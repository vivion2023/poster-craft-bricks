import { App } from "vue";
import LText from "./LText.vue";

LText.install = (app: App) => {
  app.component(LText.name || "LText", LText);
};

export default LText;
