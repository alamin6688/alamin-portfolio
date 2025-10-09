// Declaration for the Spline viewer web component so TypeScript/JSX accepts <spline-viewer>
declare namespace JSX {
  interface IntrinsicElements {
    "spline-viewer": {
      url?: string;
      className?: string;
      style?: Record<string, string> | string | unknown;
      [key: string]: unknown;
    };
  }
}
