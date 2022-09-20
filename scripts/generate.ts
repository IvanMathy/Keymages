import { createSVGWindow } from 'svgdom'
import svgjs from 'svg.js'
import fs from 'fs'
import { macConfig } from './configs/mac'


const window = createSVGWindow()

const SVG = svgjs(window)
const document = window.document

// create svg.js instance
const canvas = new SVG(document.documentElement).size(100, 100)

const radius = 1;

// use svg.js as normal
canvas.rect(100 - radius, 100 - radius)
  .move(radius / 2, radius / 2)
  .radius(10)
  .fill(macConfig.backgroundColor)
  .stroke({ color: macConfig.borderColor, opacity: 1, width: radius })


fs.writeFile('test.svg', canvas.svg(), (e) => {
  console.log(e)
});