import Col from './sbCol.vue';
const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbCol = withInstall(Col);
export default sbCol;
