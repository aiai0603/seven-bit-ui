import t from "./sbButton/index.js";
import p from "./sbLink/index.js";
import s from "./sbModal/index.js";
import i from "./sbProgress/index.js";
import b from "./sbSpin/index.js";
import f from "./sbResult/index.js";
import e from "./sbIcon/index.js";
import n from "./sbCol/index.js";
import a from "./sbRow/index.js";
import u from "./sbBread/index.js";
import c from "./sbBreadItem/index.js";
import d from "./sbUpload/index.js";
import l from "./sbDropDown/index.js";
import D from "./sbDropDownMenu/index.js";
import w from "./sbDropDownItem/index.js";
import M from "./sbMenu/index.js";
import I from "./sbMenuItem/index.js";
import B from "./sbSubMenu/index.js";
import k from "./sbLayout/index.js";
import A from "./sbHeader/index.js";
import S from "./sbFooter/index.js";
import x from "./sbAside/index.js";
import y from "./sbMain/index.js";
import C from "./sbBacktop/index.js";
import L from "./sbAvatar/index.js";
import R from "./sbCard/index.js";
import T from "./sbTable/index.js";
import _ from "./sbSwitch/index.js";
import g from "./sbAlert/index.js";
import h from "./sbDrawer/index.js";
import v from "./sbInput/index.js";
const o = [
  R,
  T,
  t,
  p,
  e,
  n,
  a,
  u,
  c,
  s,
  i,
  b,
  f,
  d,
  l,
  D,
  w,
  M,
  I,
  B,
  k,
  A,
  S,
  x,
  y,
  C,
  L,
  _,
  g,
  h,
  v
], ao = {
  install: (m) => {
    for (const r in o)
      m.component(o[r].__name, o[r]);
  }
};
export {
  ao as default,
  g as sbAlert,
  x as sbAside,
  L as sbAvatar,
  C as sbBackTop,
  u as sbBread,
  c as sbBreadItem,
  t as sbButton,
  R as sbCard,
  n as sbCol,
  h as sbDrawer,
  l as sbDropDown,
  w as sbDropDownItem,
  D as sbDropDownMenu,
  S as sbFooter,
  A as sbHeader,
  e as sbIcon,
  v as sbInput,
  k as sbLayout,
  p as sbLink,
  y as sbMain,
  M as sbMenu,
  I as sbMenuItem,
  s as sbModal,
  i as sbProgress,
  f as sbResult,
  a as sbRow,
  b as sbSpin,
  B as sbSubMenu,
  _ as sbSwitch,
  T as sbTable,
  d as sbUpload
};
