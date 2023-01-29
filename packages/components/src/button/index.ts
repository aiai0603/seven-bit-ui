import Button from './button.vue';

type SFCWithInstall<T> = T & Plugin;
const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E): T => {
  (main as SFCWithInstall<T> as any).install = (app: any): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

const LsButton = withInstall(Button);
export default LsButton;
