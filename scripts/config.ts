import Glyph from "./glyph";

export interface Config {
  name: string
  font: string
  glyphs: Glyph[]
  offset?: number
}