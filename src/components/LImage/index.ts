import { App } from "vue";
import LImage from "./LImage.vue";

LImage.install = (app: App) => {
  app.component(LImage.name || "LImage", LImage);
};

export default LImage;
