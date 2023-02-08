import type { ExtractPropTypes } from 'vue';

export const LayoutSize = ['horizontal', 'vertical'];

export const layoutProps = {
  direction: {
    type: String,
    validator(value: string) {
      return LayoutSize.includes(value);
    },
    default: 'vertical'
  }
};

export type LayoutProps = ExtractPropTypes<typeof layoutProps>;
