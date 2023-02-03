import Progress from './sbProgress.vue';

const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbProgress = withInstall(Progress);
export default sbProgress;
