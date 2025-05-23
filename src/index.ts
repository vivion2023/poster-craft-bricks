import { App } from "vue";

import LText from "./components/LText";
import LImage from "./components/LImage";

const components = [LText, LImage];

const install = (app: App) => {
  components.forEach((component, index) => {
    const componentName = component.name || `Component${index}`;
    app.component(componentName, component);
  });
};

export { LText, LImage, install };

export default {
  install,
};
