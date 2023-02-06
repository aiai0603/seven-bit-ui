import t from "./sbButton/index.js";
import s from "./sbLink/index.js";
import p from "./sbModal/index.js";
import i from "./sbProgress/index.js";
import n from "./sbSpin/index.js";
import f from "./sbResult/index.js";
import b from "./sbIcon/index.js";
import e from "./sbCol/index.js";
import a from "./sbRow/index.js";
import c from "./sbBread/index.js";
import l from "./sbBreadItem/index.js";
import d from "./sbUpload/index.js";
import D from "./sbDropDown/index.js";
import u from "./sbDropDownMenu/index.js";
import w from "./sbDropDownItem/index.js";
const o = [t, s, b, e, a, c, l, p, i, n, f, d, D, u, w], j = {
  install: (m) => {
    for (const r in o)
      m.component(o[r].__name, o[r]);
  }
};
export {
  j as default,
  c as sbBread,
  l as sbBreadItem,
  t as sbButton,
  e as sbCol,
  D as sbDropDown,
  w as sbDropDownItem,
  u as sbDropDownMenu,
  b as sbIcon,
  s as sbLink,
  p as sbModal,
  i as sbProgress,
  f as sbResult,
  a as sbRow,
  n as sbSpin,
  d as sbUpload
};
