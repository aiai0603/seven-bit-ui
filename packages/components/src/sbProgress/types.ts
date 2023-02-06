import type { ExtractPropTypes } from 'vue';

const ProgressType = ['line', 'circle'];

const ProgressSize = ['small', 'medium', 'large'];

const ProgressStatus = ['normal', 'success', 'warning', 'danger'];

const colorReg1 = /^rgb\((\s*?)\d{1,3}(\s*?)\,(\s*?)\d{1,3}(\s*?)\,(\s*?)\d{1,3}\)$/;
const colorReg2 = /^#([a-zA-Z0-9]{3}|[a-zA-Z0-9]{6})$/;

export const progressProps = {
  type: {
    type: String,
    validator: (value: string) => ProgressType.includes(value),
    default: 'line'
  },
  size: {
    type: String,
    validator: (value: string) => ProgressSize.includes(value)
  },
  percent: {
    type: Number,
    validator: (val: number) => val >= 0 && val <= 1,
    default: 0
  },
  strokeWidth: {
    type: Number
  },
  width: {
    type: [String, Number],
    validator: (val: string | number) => typeof val === 'number' || /^[1-9][0-9]*%?$/.test(val)
  },
  color: {
    type: [String, Array],
    validator: (val: string | Object[]) => {
      const type = Object.prototype.toString.call(val).slice(8, -1);
      if (['String', 'Array'].includes(type)) {
        if (type === 'Array') return true;
        return colorReg1.test(val as string) || colorReg2.test(val as string);
      }
      return false;
    }
  },
  trackColor: {
    type: String,
    validator: (val: string) => colorReg1.test(val) || colorReg2.test(val),
    default: 'rgb(229, 230, 235)'
  },
  showText: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    validator: (val: string) => ProgressStatus.includes(val)
  },
  round: {
    type: Boolean,
    default: true
  }
};

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
