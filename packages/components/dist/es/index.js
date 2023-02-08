import t from "./sbButton/index.js";
import s from "./sbLink/index.js";
import p from "./sbModal/index.js";
import i from "./sbProgress/index.js";
import f from "./sbSpin/index.js";
import b from "./sbResult/index.js";
import n from "./sbIcon/index.js";
import e from "./sbCol/index.js";
import a from "./sbRow/index.js";
import u from "./sbBread/index.js";
import c from "./sbBreadItem/index.js";
import d from "./sbUpload/index.js";
import l from "./sbDropDown/index.js";
import D from "./sbDropDownMenu/index.js";
import M from "./sbDropDownItem/index.js";
import w from "./sbMenu/index.js";
import B from "./sbMenuItem/index.js";
import I from "./sbSubMenu/index.js";
import k from "./sbLayout/index.js";
import x from "./sbHeader/index.js";
import y from "./sbFooter/index.js";
import A from "./sbAside/index.js";
import L from "./sbMain/index.js";
import R from "./sbBackTop/index.js";
import S from "./sbAvatar/index.js";
const o = [t, s, n, e, a, u, c, p, i, f, b, d, l, D, M, w, B, I, k, x, y, A, L, R, S], $ = {
  install: (m) => {
    for (const r in o)
      m.component(o[r].__name, o[r]);
  }
};
export {
  $ as default,
  A as sbAside,
  S as sbAvatar,
  R as sbBackTop,
  u as sbBread,
  c as sbBreadItem,
  t as sbButton,
  e as sbCol,
  l as sbDropDown,
  M as sbDropDownItem,
  D as sbDropDownMenu,
  y as sbFooter,
  x as sbHeader,
  n as sbIcon,
  k as sbLayout,
  s as sbLink,
  L as sbMain,
  w as sbMenu,
  B as sbMenuItem,
  p as sbModal,
  i as sbProgress,
  b as sbResult,
  a as sbRow,
  f as sbSpin,
  I as sbSubMenu,
  d as sbUpload
};
