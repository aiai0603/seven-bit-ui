import type { ExtractPropTypes } from 'vue';

export const footerProps = {
  height: {
    type: Number
  }
};

export type FooterProps = ExtractPropTypes<typeof footerProps>;
