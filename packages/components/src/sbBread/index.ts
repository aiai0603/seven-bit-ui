import Bread from './sbBread.vue';
const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbBread = withInstall(Bread);
export default sbBread;
