import type { ExtractPropTypes } from 'vue';

export const dropDownMenuProps = {
  title: {
    type: String
  }
};
export type DropDownMenuProps = ExtractPropTypes<typeof dropDownMenuProps>;
