import DropDownMenu from './sbDropDownMenu.vue';
const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbDropDownMenu = withInstall(DropDownMenu);
export default sbDropDownMenu;
