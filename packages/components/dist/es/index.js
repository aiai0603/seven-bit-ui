import t from "./sbButton/index.js";
import s from "./sbLink/index.js";
import n from "./sbModal/index.js";
import i from "./sbProgress/index.js";
import p from "./sbIcon/index.js";
import e from "./sbCol/index.js";
import f from "./sbRow/index.js";
import b from "./sbBread/index.js";
import a from "./sbBreadItem/index.js";
const o = [t, s, p, e, f, b, a, n, i], g = {
  install: (m) => {
    for (const r in o)
      m.component(o[r].__name, o[r]);
  }
};
export {
  g as default,
  b as sbBread,
  a as sbBreadItem,
  t as sbButton,
  e as sbCol,
  p as sbIcon,
  s as sbLink,
  n as sbModal,
  i as sbProgress,
  f as sbRow
};
