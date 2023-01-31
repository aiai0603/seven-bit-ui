import type { ExtractPropTypes } from 'vue';

export const ButtonType = ['primary', 'text'];

export const ButtonSize = ['large', 'small'];

export const linkProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value);
    },
    default: 'primary'
  },
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value);
    }
  },
  round: Boolean,
  disabled: Boolean
};

export type LinkProps = ExtractPropTypes<typeof linkProps>;
