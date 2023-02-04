import type { ExtractPropTypes } from 'vue';

export const SpinType = [];

export const spinProps = {
  size: {
    type: Number,
    default: 20
  },
  tip: String,
  dot: {
    type: Boolean,
    default: false
  },
  loading: Boolean
};

export type SpinProps = ExtractPropTypes<typeof spinProps>;
