import type { ExtractPropTypes } from 'vue';
export const iconProps = {
  name: {
    type: String
  },
  spin: Boolean
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
