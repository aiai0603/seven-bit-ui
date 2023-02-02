import { default as sbButton } from './sbButton';

import { default as sbLink } from './sbLink';

import { default as sbIcon } from './sbIcon';

import { default as sbCol } from './sbCol';

import { default as sbRow } from './sbRow';

const components = [sbButton, sbLink, sbIcon, sbCol, sbRow];
export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(components[comkey].__name, components[comkey]);
    }
  }
};

export { sbButton, sbLink, sbIcon, sbCol, sbRow };
