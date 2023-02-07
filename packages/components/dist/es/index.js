import t from "./sbAvatar/index.js";
import s from "./sbButton/index.js";
import p from "./sbLink/index.js";
import i from "./sbModal/index.js";
import b from "./sbProgress/index.js";
import f from "./sbSpin/index.js";
import n from "./sbResult/index.js";
import e from "./sbIcon/index.js";
import a from "./sbCol/index.js";
import l from "./sbRow/index.js";
import u from "./sbBread/index.js";
import c from "./sbBreadItem/index.js";
import d from "./sbUpload/index.js";
import D from "./sbDropDown/index.js";
import M from "./sbDropDownMenu/index.js";
import w from "./sbDropDownItem/index.js";
import I from "./sbMenu/index.js";
import B from "./sbMenuItem/index.js";
import k from "./sbSubMenu/index.js";
import x from "./sbTable/index.js";
import C from "./sbCard/index.js";
const o = [t, x, C, s, p, e, a, l, u, c, i, b, f, n, d, D, M, w, I, B, k], N = {
  install: (m) => {
    for (const r in o)
      m.component(o[r].__name, o[r]);
  }
};
export {
  N as default,
  t as sbAvatar,
  u as sbBread,
  c as sbBreadItem,
  s as sbButton,
  C as sbCard,
  a as sbCol,
  D as sbDropDown,
  w as sbDropDownItem,
  M as sbDropDownMenu,
  e as sbIcon,
  p as sbLink,
  I as sbMenu,
  B as sbMenuItem,
  i as sbModal,
  b as sbProgress,
  n as sbResult,
  l as sbRow,
  f as sbSpin,
  k as sbSubMenu,
  x as sbTable,
  d as sbUpload
};
