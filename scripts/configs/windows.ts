import { Config } from "../config";
import { latinGlyphs, windowsGlyphs } from "../glyphs/latin";

// Font from https://github.com/coderiver/frontcom/

export const windowsConfig: Config = {
  name: 'windows',
  font: 'segoeui.otf',
  glyphs: [...latinGlyphs, ...windowsGlyphs],
  offset: -0.4
}