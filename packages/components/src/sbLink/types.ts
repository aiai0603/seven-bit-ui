import type { ExtractPropTypes } from 'vue';

export const LinkType = ['warning', 'error', 'success', 'secondary', 'default'];

export const linkProps = {
  type: {
    type: String,
    validator(value: string) {
      return LinkType.includes(value);
    },
    default: 'default'
  },
  underline: Boolean,
  disabled: Boolean
};

export type LinkProps = ExtractPropTypes<typeof linkProps>;
