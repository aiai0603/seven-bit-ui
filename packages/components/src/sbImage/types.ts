import type { ExtractPropTypes } from 'vue';

export const imageProps = {
  src: {
    type: String,
    default: ''
  },
  width: {
    type: Number || String
  },
  height: {
    type: Number || String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  fit: {
    type: String,
    default: 'cover',
    value: ['contain', 'cover', 'fill', 'none', 'scale-down']
  },
  alt: {
    type: String
  },
  footerPosition: {
    type: String,
    value: ['inner', 'outer'],
    default: 'inner'
  },

  preview: {
    type: Boolean,
    default: true
  }
};

export type ImageProps = ExtractPropTypes<typeof imageProps>;
