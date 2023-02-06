import MenuItem from './sbMenuItem.vue';
const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbMenuItem = withInstall(MenuItem);
export default sbMenuItem;
