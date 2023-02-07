import type { ExtractPropTypes } from 'vue';

export const headerProps = {
  height: {
    type: Number
  }
};

export type HeaderProps = ExtractPropTypes<typeof headerProps>;
