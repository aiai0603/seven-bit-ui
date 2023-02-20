import Image from './sbImage.vue';

const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbImage = withInstall(Image);
export default sbImage;