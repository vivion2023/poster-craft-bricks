import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
// const name = "poster-craft-bricks";
import pkg from "../package.json" with { type: "json" };
const { name } = pkg;
const file = (type) => `dist/${name}.${type}.js`;

const config = {
  input: "src/App.vue",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  plugins: [vue(), css({ output: "bundle.css" })],
};

export default config;
