import type { ExtractPropTypes } from 'vue';

export const cardProps = {
  style: {},
  bordered: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    value: ['small', 'medium'],
    default: 'medium'
  }
};

export type CardProps = ExtractPropTypes<typeof cardProps>;
