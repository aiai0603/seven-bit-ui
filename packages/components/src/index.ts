import { default as sbButton } from './sbButton';

import { default as sbLink } from './sbLink';

import { default as sbModal } from './sbModal';

import { default as sbProgress } from './sbProgress';

import { default as sbSpin } from './sbSpin';

import { default as sbResult } from './sbResult';

import { default as sbIcon } from './sbIcon';

import { default as sbCol } from './sbCol';

import { default as sbRow } from './sbRow';

import { default as sbBread } from './sbBread';

import { default as sbBreadItem } from './sbBreadItem';

const components = [sbButton, sbLink, sbIcon, sbCol, sbRow, sbBread, sbBreadItem, sbModal, sbProgress, sbSpin, sbResult];
export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(components[comkey].__name, components[comkey]);
    }
  }
};

export { sbButton, sbLink, sbIcon, sbCol, sbRow, sbModal, sbProgress, sbSpin, sbResult, sbBread, sbBreadItem };
