import type { ExtractPropTypes } from 'vue';

export const colProps = {
  span: {
    type: Number,
    validator(value: Number) {
      return value >= 0 && value <= 24;
    },
    default: 24
  },
  offest: {
    type: Number,
    validator(value: Number) {
      return value >= 0 && value <= 24;
    },
    default: 0
  },
  push: {
    type: Number,
    validator(value: Number) {
      return value >= 0 && value <= 24;
    },
    default: 0
  },
  pull: {
    type: Number,
    validator(value: Number) {
      return value >= 0 && value <= 24;
    },
    default: 0
  },
  xs: {
    type: Object
  },
  sm: {
    type: Object
  },
  md: {
    type: Object
  },
  lg: {
    type: Object
  },
  xl: {
    type: Object
  },
  xxl: {
    type: Object
  }
};
export type ColProps = ExtractPropTypes<typeof colProps>;
