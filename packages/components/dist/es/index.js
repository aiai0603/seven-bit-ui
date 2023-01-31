import m from "./sbButton/index.js";
import s from "./sbLink/index.js";
const o = [m, s], i = {
  install: (t) => {
    for (const n in o)
      t.component(o[n].__name, o[n]);
  }
};
export {
  i as default,
  m as sbButton,
  s as sbLink
};
