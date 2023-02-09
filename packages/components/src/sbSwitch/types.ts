import type { ExtractPropTypes } from 'vue';
import { colorReg1, colorReg2 } from '../sbProgress/types';

export const SwitchType = ['circle', 'round', 'line'];

export const SizeType = ['medium', 'small'];

export const switchProps = {
  checked: Boolean,
  type: {
    type: String,
    validator: (val: string) => SwitchType.includes(val),
    default: 'circle'
  },
  size: {
    type: String,
    validator: (val: string) => SizeType.includes(val),
    default: 'medium'
  },
  checkedColor: {
    type: String,
    validator: (val: string) => colorReg1.test(val) || colorReg2.test(val)
  },
  uncheckedColor: {
    type: String,
    validator: (val: string) => colorReg1.test(val) || colorReg2.test(val)
  },
  loading: {
    type: Boolean,
    default: false
  },
  beforeChange: Function,
  disabled: {
    type: Boolean,
    default: false
  }
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;
