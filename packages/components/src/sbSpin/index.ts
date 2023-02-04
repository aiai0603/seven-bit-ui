import Spin from './sbSpin.vue';

const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbSpin = withInstall(Spin);
export default sbSpin;
