export interface GlyphConfig {
  
}

export default class Glyph {
  glyph: string
  constructor(glyph: string) {
    this.glyph = glyph
  }

  static from(glyphs: string) {
    return glyphs.split('').map(glyph => new Glyph(glyph))
  }
}