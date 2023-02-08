import type { ExtractPropTypes } from 'vue';

export const backtopProps = {
  height: {
    type: Number,
    default: 200
  },
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  }
};

export type BacktopProps = ExtractPropTypes<typeof backtopProps>;
