import { default as sbButton } from './sbButton';

import { default as sbLink } from './sbLink';
import { default as sbModal } from './sbModal';

const components = [sbButton, sbLink, sbModal];
export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(components[comkey].__name, components[comkey]);
    }
  }
};

export { sbButton, sbLink, sbModal };
