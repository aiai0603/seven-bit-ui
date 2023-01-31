import { default as LsButton } from './LsButton';

const components = [LsButton];
export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(components[comkey].__name, components[comkey]);
    }
  }
};

export { LsButton };
