import { createSVGWindow } from 'svgdom'
import svgjs from 'svg.js'
import fs from 'fs'
import TextToSVG from 'text-to-svg'

import { macConfig } from './configs/mac'
import { latinGlyphs } from './glyphs/latin'

const textToSVG = TextToSVG.loadSync(`${__dirname}/../fonts/${macConfig.font}`);
const root = `${__dirname}/../out/`
const window = createSVGWindow()

const SVG = svgjs(window)
const document = window.document

const size = 30
// create svg.js instance
const canvas = new SVG(document.documentElement).size(size, size)

const radius = 1;

// use svg.js as normal
canvas.rect(size - radius, size - radius)
  .move(radius / 2, radius / 2)
  .radius(6)
  .fill(macConfig.backgroundColor)
  .stroke({ color: macConfig.borderColor, opacity: 1, width: radius })

const attributes = { fill: 'red', stroke: 'white' };
const options = { x: size / 2, y: size / 2, fontSize: 20, anchor: 'center middle', attributes: attributes };

const svg = textToSVG.getD('⌘', options);

canvas.path(svg).fill(macConfig.textColor)

console.log(latinGlyphs)

if (!fs.existsSync(root)) {
  fs.mkdirSync(root)
}


fs.writeFile('out/test.svg', canvas.svg(), (e) => {
  console.log(e)
});