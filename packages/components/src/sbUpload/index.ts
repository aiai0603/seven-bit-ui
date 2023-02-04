import Upload from './sbUpload.vue';

const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbUpload = withInstall(Upload);
export default sbUpload;
