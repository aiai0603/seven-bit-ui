import { default as sbButton } from './sbButton';

const components = [sbButton];
export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(components[comkey].__name, components[comkey]);
    }
  }
};

export { sbButton };
