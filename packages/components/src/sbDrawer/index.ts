import Drawer from './sbDrawer.vue';

const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbDrawer = withInstall(Drawer);
export default sbDrawer;
