import t from "./sbButton/index.js";
import s from "./sbLink/index.js";
import p from "./sbModal/index.js";
import i from "./sbProgress/index.js";
import b from "./sbSpin/index.js";
import f from "./sbResult/index.js";
import e from "./sbIcon/index.js";
import n from "./sbCol/index.js";
import a from "./sbRow/index.js";
import d from "./sbBread/index.js";
import u from "./sbBreadItem/index.js";
import c from "./sbUpload/index.js";
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
import C from "./sbMain/index.js";
import L from "./sbBacktop/index.js";
import R from "./sbAvatar/index.js";
import S from "./sbCard/index.js";
import T from "./sbTable/index.js";
const o = [S, T, t, s, e, n, a, d, u, p, i, b, f, c, l, D, M, w, B, I, k, x, y, A, C, L, R], to = {
  install: (m) => {
    for (const r in o)
      m.component(o[r].__name, o[r]);
  }
};
export {
  to as default,
  A as sbAside,
  R as sbAvatar,
  L as sbBackTop,
  d as sbBread,
  u as sbBreadItem,
  t as sbButton,
  S as sbCard,
  n as sbCol,
  l as sbDropDown,
  M as sbDropDownItem,
  D as sbDropDownMenu,
  y as sbFooter,
  x as sbHeader,
  e as sbIcon,
  k as sbLayout,
  s as sbLink,
  C as sbMain,
  w as sbMenu,
  B as sbMenuItem,
  p as sbModal,
  i as sbProgress,
  f as sbResult,
  a as sbRow,
  b as sbSpin,
  I as sbSubMenu,
  T as sbTable,
  c as sbUpload
};
