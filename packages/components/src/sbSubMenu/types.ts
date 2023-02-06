import type { ExtractPropTypes } from 'vue';

export const subMenuProps = {
  defaultOpen: {
    type: Boolean,
    default: false
  },
  keys: {
    type: String
  }
};

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
