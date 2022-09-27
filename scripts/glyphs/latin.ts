import Glyph from '../glyph'

const smallSize = 0.5

export const latinGlyphs = [
  ...Glyph.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
  ...Glyph.from('0123456789'),

  ...Array.from(Array(20)).map((_, i) => {
    return new Glyph('F' + i, { size: 0.6, width: 1.3 })
  }),

  new Glyph('cmd', { name: "cmdtext", size: smallSize, width: 1.1, offset: 1 }),
  new Glyph('alt', { size: smallSize, offset: 1 }),
  new Glyph('fn', { size: smallSize, offset: 1 }),
  new Glyph('tab', { size: smallSize, offset: 1 }),
  new Glyph('command', { size: smallSize, width: 2.2, offset: 1 }),
  new Glyph('option', { size: smallSize, width: 1.6, offset: 1 }),
  new Glyph('delete', { size: smallSize, width: 1.6, offset: 1 }),
  new Glyph('delete 􀆘', { name: "delete-forward", size: smallSize, width: 1.9 }),
  new Glyph('escape', { size: smallSize, width: 1.6, offset: 1 }),
  new Glyph('return', { size: smallSize, width: 1.6, offset: 1 }),
  new Glyph('control', { size: smallSize, width: 1.7, offset: 1 }),
  new Glyph('shift', { size: smallSize, width: 1.5, offset: 1 }),
  new Glyph('enter', { size: smallSize, width: 1.5, offset: 1 }),
  new Glyph('backspace', { size: smallSize, width: 2.25, offset: 1 }),
  new Glyph('caps lock', { name: "capslock", size: smallSize, width: 2.1, offset: 1 }),
  new Glyph('⌘', { name: "command-glyph" }),
  new Glyph('⌥', { name: "option-glyph" }),
  new Glyph('⇪', { name: "capslock-glyph" }),
  new Glyph('⇧', { name: "shift-glyph" }),
  new Glyph('⌃', { name: "control-glyph" }),
  new Glyph('􀅆', { name: "tab-glyph" }),
  new Glyph('⎋', { name: "escape-glyph" }),
  new Glyph('⌫', { name: "backspace-glyph" }),
  new Glyph('⏎', { name: "return-glyph" }),
  new Glyph('⌦', { name: "erase-glyph" }),
  new Glyph('⏏', { name: "eject" }),
  new Glyph('▲', { name: "up" }),
  new Glyph('▶', { name: "right" }),
  new Glyph('▼', { name: "down" }),
  new Glyph('◀', { name: "left" }),
  new Glyph('', { name: "apple" }),
  new Glyph('􀆪', { name: "globe" }),
]