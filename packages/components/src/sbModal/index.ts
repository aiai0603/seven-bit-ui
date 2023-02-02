import Modal from './sbModal.vue';
import sbModalBox from './sbModal';
import { App } from 'vue';

const withInstall = (comp: any) => {
  comp.install = (app: App) => {
    //注册组件
    app.component(comp.__name, comp);
    console.log(111);
    app.config.globalProperties.$info = sbModalBox.info;
  };
  comp.$info = sbModalBox.info;
  return comp;
};

const sbModal = withInstall(Modal);
export default sbModal;
