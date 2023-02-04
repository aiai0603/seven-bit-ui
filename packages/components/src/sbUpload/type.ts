import type { ExtractPropTypes } from 'vue';

export const uploadType = {
  multiple: Boolean,
  accept: String,
  drag: Boolean
};

export type uploadProp = ExtractPropTypes<typeof uploadType>;
