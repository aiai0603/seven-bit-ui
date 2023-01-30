import components from './src/index';
export * from './src/index';
import type { App } from 'vue';
export default {
  install: (app: App) => {
    components.forEach(c => app.use(c));
  }
};
