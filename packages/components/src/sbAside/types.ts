import type { ExtractPropTypes } from 'vue';

export const asiderProps = {
  width: {
    type: Number
  }
};

export type AsiderProps = ExtractPropTypes<typeof asiderProps>;
