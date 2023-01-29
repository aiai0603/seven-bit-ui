import { defineComponent as p, useAttrs as c, computed as m, openBlock as d, createElementBlock as a, mergeProps as b, unref as o, renderSlot as f } from "vue";
import "./style/index.css";
import { buttonProps as k } from "./types.js";
const B = /* @__PURE__ */ p({
  name: "button",
  props: k,
  emits: ["click"],
  setup(s, { emit: n }) {
    const t = s, r = c(), l = m(() => ({
      "ls-button": !0,
      [`ls-button-${t.type}`]: t.type,
      "is-round": t.round,
      "is-disabled": t.disabled,
      [`ls-button-${t.size}`]: t.size
    })), u = () => {
      n("click", 11);
    };
    return (i, e) => (d(), a("button", b({ class: o(l) }, o(r), {
      onClick: e[0] || (e[0] = (y) => u())
    }), [
      f(i.$slots, "default")
    ], 16));
  }
});
export {
  B as default
};
