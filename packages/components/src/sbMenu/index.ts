import Menu from './sbMenu.vue';
const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbMenu = withInstall(Menu);
export default sbMenu;
