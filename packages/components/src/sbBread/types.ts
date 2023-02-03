import type { ExtractPropTypes } from 'vue';

export const breadProps = {
  separatorIcon: {
    type: String
  },
  separator: {
    type: String,
    default: '/'
  }
};

export type BreadProps = ExtractPropTypes<typeof breadProps>;
