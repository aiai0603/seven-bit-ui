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
  },
  hoverable: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  ['header-style']: {},
  ['body-style']: {}
};

export type CardProps = ExtractPropTypes<typeof cardProps>;
