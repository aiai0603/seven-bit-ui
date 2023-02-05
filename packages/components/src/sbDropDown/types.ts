import type { ExtractPropTypes } from 'vue';

export const dropDownTrigger = ['hover', 'click', 'contextmenu'];

export const dropDownProps = {
  disabled: Boolean,
  autoClose: {
    type: Boolean,
    default: true
  },
  maxHeight: {
    type: Number,
    default: 200
  },
  trigger: {
    type: String,
    validator(value: string) {
      return dropDownTrigger.includes(value);
    },
    default: 'click'
  }
};
export type DropDownProps = ExtractPropTypes<typeof dropDownProps>;
