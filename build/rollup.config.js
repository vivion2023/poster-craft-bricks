import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import typescript from "rollup-plugin-typescript2";
import pkg from "../package.json" with { type: "json" };
const { name } = pkg;
const file = (type) => `dist/${name}.${type}.js`;
const override = {
  compilerOptions: {
    declaration: true,
  },
};

const config = {
  input: "src/App.vue",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  plugins: [
    vue(), 
    css({ output: "bundle.css" }), 
    typescript({ 
      tsconfigOverride: override,
      check: false,
      tsconfig: "tsconfig.json",
      include: ["src/**/*.vue"]
    })
  ],
};

export default config;
