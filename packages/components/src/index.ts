import { default as sbButton } from './sbButton';

import { default as sbLink } from './sbLink';

import { default as sbIcon } from './sbIcon';

const components = [sbButton, sbLink, sbIcon];
export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(components[comkey].__name, components[comkey]);
    }
  }
};

export { sbButton, sbLink, sbIcon };
