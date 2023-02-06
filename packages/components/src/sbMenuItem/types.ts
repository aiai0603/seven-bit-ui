import type { ExtractPropTypes } from 'vue';

export const menuItemProps = {
  value: {
    type: String
  },
  disabled: Boolean
};

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
