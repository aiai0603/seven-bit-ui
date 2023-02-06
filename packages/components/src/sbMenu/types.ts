import type { ExtractPropTypes } from 'vue';

export const MenuMode = ['horizontal', 'vertical'];

export const menuProps = {
  mode: {
    type: String,
    default: 'horizontal',
    validator(value: string) {
      return MenuMode.includes(value);
    }
  },
  defaultKey: {
    type: String
  }
};

export type MenuProps = ExtractPropTypes<typeof menuProps>;
