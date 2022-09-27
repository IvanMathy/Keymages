import { createSVGWindow } from 'svgdom'
import svgjs from 'svg.js'
import fs from 'fs'
import TextToSVG from 'text-to-svg'

import { macConfig } from './configs/mac'
import { latinGlyphs } from './glyphs/latin'
import Glyph from './glyph'
import { Config } from './config'
import schemes, { Scheme } from './configs/schemes'

const textToSVG = TextToSVG.loadSync(`${__dirname}/../fonts/${macConfig.font}`);
const root = `${__dirname}/../out/`
const window = createSVGWindow()

const SVG = svgjs(window)
const document = window.document

interface Size {
  size: number
  name: string
  radius: number
}

const sizes: Size[] = [
  { size: 20, name: "small", radius: 4 },
  { size: 30, name: "medium", radius: 6 },
  { size: 40, name: "large", radius: 8 }
]


if (!fs.existsSync(root)) {
  fs.mkdirSync(root)
}

const borderWidth = 1;

const files: string[] = []

function generateGlyph(glyph: Glyph, sizeTemplate: Size, scheme: Scheme) {
  const size = sizeTemplate.size
  const width = size * (glyph.config?.width || 1)

  const canvas = new SVG(document.documentElement).size(width, size)
  canvas.rect(width - borderWidth, size - borderWidth)
    .move(borderWidth / 2, borderWidth / 2)
    .radius(sizeTemplate.radius)
    .fill(scheme.backgroundColor)
    .stroke({ color: scheme.borderColor, opacity: 1, width: borderWidth })

  const attributes = { fill: 'red', stroke: 'white' };
  const offset = (glyph.config?.offset || 0) * size / 10
  const fontSize = size * 0.7 * (glyph.config?.size || 1)
  const options = { x: width / 2, y: size / 2 + offset, fontSize: fontSize, anchor: 'center middle', attributes: attributes };

  const svg = textToSVG.getD(glyph.glyph, options);

  canvas.path(svg).fill(scheme.textColor)

  const dir = `${scheme.name}/${sizeTemplate.name}`
  const fullDir = `out/${dir}`
  const path = `glyph_${glyph?.config?.name ?? glyph.glyph}.svg`

  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true })
  }

  files.push(`![${glyph.path}](./${dir}/${path})`)

  fs.writeFileSync(`${fullDir}/${path}`, canvas.svg());

  canvas.clear()
}

schemes.forEach(scheme => {
  files.push(`# ${scheme.name}`)
  sizes.forEach(size => {
    files.push(`## ${size.name}`)
    latinGlyphs.map(g => generateGlyph(g, size, scheme))
  })
})


const md = files.join('\n')

fs.writeFile('out/sample.md', md, (e) => {
  //console.log(e)
});