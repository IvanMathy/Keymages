type Color = `#${string}`;
export interface Scheme {
  name: string,
  backgroundColor: Color,
  borderColor: Color,
  textColor: Color,
}

const LightScheme: Scheme = {
  name: "light",
  backgroundColor: "#fff",
  borderColor: "#444C56",
  textColor: "#000",
}

const DarkScheme: Scheme = {
  name: "dark",
  backgroundColor: "#2D333B",
  borderColor: "#444C56",
  textColor: "#FFFFFF",
}

export default [LightScheme, DarkScheme]