import Ts from "rollup-plugin-typescript2";

export default {
  input: [
    "src/index.ts",
    "src/atoms/Color/index.ts",
    "src/atoms/Text/index.ts",
    "src/atoms/Margin/index.ts",
  ],
  output: {
    dir: "lib",
    format: "esm",
  },
  plugins: [Ts()],
  external: ["react", "@ds.e/foundation"],
};
