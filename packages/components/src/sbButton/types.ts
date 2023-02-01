import type { ExtractPropTypes } from 'vue';

export const ButtonType = ['primary', 'outline', 'text'];

export const ButtonStatus = ['warning', 'danger', 'success', 'secondary', 'default'];

export const ButtonSize = ['large', 'small', 'default'];

export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value);
    },
    default: 'primary'
  },
  status: {
    type: String,
    validator(value: string) {
      return ButtonStatus.includes(value);
    },
    default: 'default'
  },
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value);
    },
    default: 'default'
  },
  round: Boolean,
  disabled: Boolean,
  long: Boolean
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
