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

import { default as sbUpload } from './sbUpload';

import { default as sbDropDown } from './sbDropDown';

import { default as sbDropDownMenu } from './sbDropDownMenu';

import { default as sbDropDownItem } from './sbDropDownItem';

import { default as sbMenu } from './sbMenu';

import { default as sbMenuItem } from './sbMenuItem';

import { default as sbSubMenu } from './sbSubMenu';

const components = [sbButton, sbLink, sbIcon, sbCol, sbRow, sbBread, sbBreadItem, sbModal, sbProgress, sbSpin, sbResult, sbUpload, sbDropDown, sbDropDownMenu, sbDropDownItem, sbMenu, sbMenuItem, sbSubMenu];
export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(components[comkey].__name, components[comkey]);
    }
  }
};

export { sbButton, sbLink, sbIcon, sbCol, sbRow, sbModal, sbProgress, sbSpin, sbResult, sbBread, sbBreadItem, sbUpload, sbDropDown, sbDropDownMenu, sbDropDownItem, sbMenu, sbMenuItem, sbSubMenu };
