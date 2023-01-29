const e = ["primary", "text"], r = ["large", "small"], n = {
  type: {
    type: String,
    validator(t) {
      return e.includes(t);
    },
    default: "primary"
  },
  size: {
    type: String,
    validator(t) {
      return r.includes(t);
    }
  },
  round: Boolean,
  disabled: Boolean
};
export {
  r as ButtonSize,
  e as ButtonType,
  n as buttonProps
};
