import { App } from "vue";

import LText from "./components/LText";

const components = [LText];

const install = (app: App) => {
  components.forEach((component, index) => {
    const componentName = component.name || `Component${index}`;
    app.component(componentName, component);
  });
};

export { LText, install };

export default {
  install,
};
