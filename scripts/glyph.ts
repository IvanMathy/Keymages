export interface GlyphConfig {
  name?: string
  size?: number
  width?: number
  offset?: number
  font?: string
}

export default class Glyph {
  glyph: string
  config?: GlyphConfig

  constructor(glyph: string, config?: GlyphConfig) {
    this.glyph = glyph
    this.config = config
  }

  static from(glyphs: string) {
    return glyphs.split('').map(glyph => new Glyph(glyph))
  }

  public get path() {
    return `glyph_${this.config?.name ?? this.glyph}.svg`;
  }

}