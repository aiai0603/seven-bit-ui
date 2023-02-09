import type { ExtractPropTypes } from 'vue';

export const inputType = {
  size: String
};

export type inputProp = ExtractPropTypes<typeof inputType>;
