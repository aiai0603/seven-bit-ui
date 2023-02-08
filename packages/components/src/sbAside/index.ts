import Aside from './sbAside.vue';
const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbAside = withInstall(Aside);
export default sbAside;
