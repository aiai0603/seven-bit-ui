import Main from './sbMain.vue';
const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbMain = withInstall(Main);
export default sbMain;
