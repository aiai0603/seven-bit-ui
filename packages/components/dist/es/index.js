import e from "./LsButton/index.js";
const o = [e], c = {
  install: (t) => {
    for (const n in o)
      t.component(o[n].__name, o[n]);
  }
};
export {
  e as LsButton,
  c as default
};
