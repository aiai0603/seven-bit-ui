import type { ExtractPropTypes } from 'vue';
export const breadItemProps = {
  href: {
    type: String
  }
};

export type BreadItemProps = ExtractPropTypes<typeof breadItemProps>;
