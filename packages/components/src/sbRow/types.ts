import type { ExtractPropTypes } from 'vue';
export const ButtonJustify = ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'];

export const ButtonAlign = ['start', 'center', 'end', 'stretch'];

export const rowProps = {
  justify: {
    type: String,
    validator(value: string) {
      return ButtonJustify.includes(value);
    }
  },
  align: {
    type: String,
    validator(value: string) {
      return ButtonAlign.includes(value);
    }
  },
  gutter: {
    type: Number
  }
};

export type RowProps = ExtractPropTypes<typeof rowProps>;
