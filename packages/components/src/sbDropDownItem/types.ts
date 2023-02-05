import type { ExtractPropTypes } from 'vue';

export const dropDownItemProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  divided: {
    type: Boolean,
    default: false
  },
  value: {
    type: String
  }
};

export type DropDownItemProps = ExtractPropTypes<typeof dropDownItemProps>;
