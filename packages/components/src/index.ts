import { default as sbButton } from './sbButton';

import { default as sbLink } from './sbLink';

const components = [sbButton, sbLink];
export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(components[comkey].__name, components[comkey]);
    }
  }
};

export { sbButton, sbLink };
