import * as t from "./sbAvatar/index.js";
import * as o from "./sbBread/index.js";
import * as r from "./sbBreadItem/index.js";
import * as d from "./sbButton/index.js";
import * as m from "./sbCard/index.js";
import * as x from "./sbCol/index.js";
import * as a from "./sbDropDown/index.js";
import * as p from "./sbDropDownItem/index.js";
import * as b from "./sbDropDownMenu/index.js";
import * as f from "./sbIcon/index.js";
import * as $ from "./sbLink/index.js";
import * as l from "./sbMenu/index.js";
import * as u from "./sbMenuItem/index.js";
import * as c from "./sbModal/index.js";
import * as D from "./sbProgress/index.js";
import * as M from "./sbResult/index.js";
import * as w from "./sbRow/index.js";
import * as I from "./sbSpin/index.js";
import * as g from "./sbSubMenu/index.js";
import * as j from "./sbTable/index.js";
import * as B from "./sbUpload/index.js";
const h = /* @__PURE__ */ Object.assign({ "./sbAvatar/index.ts": t, "./sbBread/index.ts": o, "./sbBreadItem/index.ts": r, "./sbButton/index.ts": d, "./sbCard/index.ts": m, "./sbCol/index.ts": x, "./sbDropDown/index.ts": a, "./sbDropDownItem/index.ts": p, "./sbDropDownMenu/index.ts": b, "./sbIcon/index.ts": f, "./sbLink/index.ts": $, "./sbMenu/index.ts": l, "./sbMenuItem/index.ts": u, "./sbModal/index.ts": c, "./sbProgress/index.ts": D, "./sbResult/index.ts": M, "./sbRow/index.ts": w, "./sbSpin/index.ts": I, "./sbSubMenu/index.ts": g, "./sbTable/index.ts": j, "./sbUpload/index.ts": B }), i = {}, k = {
  install: (e) => {
    Object.entries(h).forEach((s) => {
      const n = s[0].split("/")[1];
      i[n] = s[1].default, e.use(s[1].default);
    });
  },
  ...i
};
export {
  k as default
};
