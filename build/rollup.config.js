import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
const name = "poster-craft-bricks";
const file = (type) => `dist/${name}.${type}.js`;

const config = {
  input: "src/App.vue",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  plugins: [vue(), css({ output: "dist/style.css" })],
};

export default config;
