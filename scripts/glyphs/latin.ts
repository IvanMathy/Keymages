import Glyph from '../glyph'

export const latinGlyphs = [
  ...Glyph.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
  ...Glyph.from('0123456789'),
  new Glyph('cmd'),
  new Glyph('alt')
]