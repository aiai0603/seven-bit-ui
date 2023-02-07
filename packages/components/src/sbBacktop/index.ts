import BackTop from './sbBackTop.vue';
const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbBackTop = withInstall(BackTop);
export default sbBackTop;
