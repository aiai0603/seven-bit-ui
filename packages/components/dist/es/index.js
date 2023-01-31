import e from "./sbButton/index.js";
const o = [e], c = {
  install: (t) => {
    for (const n in o)
      t.component(o[n].__name, o[n]);
  }
};
export {
  c as default,
  e as sbButton
};
