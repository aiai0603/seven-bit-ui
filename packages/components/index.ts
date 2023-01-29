import components from './src/index';
export * from './src/index';
import type { App } from 'vue';
import { version } from './package.json';
const install = function (app: App): void {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export default {
  install,
  version
};
