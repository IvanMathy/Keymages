declare module 'svgdom' {
  const createSVGWindow: Function
}

declare module 'text-to-svg' {
  const t2s: { loadSync: Function };
  export default t2s;
}