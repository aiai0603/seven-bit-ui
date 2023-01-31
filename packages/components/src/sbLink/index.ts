import Link from './sbLink.vue';

const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    //注册组件
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbLink = withInstall(Link);
export default sbLink;
