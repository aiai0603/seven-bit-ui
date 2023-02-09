import Input from './sbInput.vue';

const withInstall = (comp: any) => {
  comp.install = (app: any) => {
    app.component(comp.__name, comp);
  };
  return comp;
};

const sbInput = withInstall(Input);
export default sbInput;
