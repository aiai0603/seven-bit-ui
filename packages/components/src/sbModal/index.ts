import Modal from './sbModal.vue';
import sbModalBox from './sbModal';
import type { App } from 'vue';

const loadMethods = (target: any, origin: any): void => {
  for (const key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      const method = origin[key];
      target[`$${key}`] = method;
    }
  }
};

const withInstall = (comp: any) => {
  comp.install = (app: App) => {
    //注册组件
    app.component(comp.__name, comp);
    loadMethods(app.config.globalProperties, sbModalBox);
  };
  loadMethods(comp, sbModalBox);
  return comp;
};

const sbModal = withInstall(Modal);
export default sbModal;
