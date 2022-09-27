import { Config } from "../config";
import { latinGlyphs, macGlyphs } from "../glyphs/latin";

// Font from https://github.com/thelioncape/San-Francisco-family/tree/master/SF%20Compact%20Rounded

export const macConfig: Config = {
  name: 'mac',
  font: 'SF-Compact-Display-Regular.otf',
  glyphs: [...latinGlyphs, ...macGlyphs]
}