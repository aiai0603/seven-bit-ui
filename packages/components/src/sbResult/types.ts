import type { ExtractPropTypes } from 'vue';

const ResultStatus = ['info', 'success', 'warning', 'error'];

export const resultProps = {
  title: String,
  subtitle: String,
  iconClass: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: '返回'
  },
  status: {
    type: String,
    validator: (val: string) => ResultStatus.includes(val),
    default: 'info'
  }
};

export type ResultProps = ExtractPropTypes<typeof resultProps>;
