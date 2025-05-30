import basicConfig, { name, file } from "./rollup.config.js";

export default {
  ...basicConfig,
  output: {
    name,
    file: file("umd"),
    format: "umd",
    exports: "named",
    globals: {
      vue: "Vue",
      "lodash-es": "lodashEs",
    },
  },
};
