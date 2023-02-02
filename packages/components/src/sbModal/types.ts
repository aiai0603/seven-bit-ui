import type { ExtractPropTypes } from 'vue';

export const ModalTitleAlign = ['center', 'start'];

export const ModalIconType = ['none', 'info', 'success', 'warning', 'error'];

export const ModalWidth = 'auto';

const reg1 = /^[a-zA-Z]{1,7}$|^[\u4e00-\u9fa5]{1,4}$/;

export const modalProps = {
  mask: {
    type: Boolean,
    default: true
  },
  visible: Boolean,
  titleAlign: {
    type: String,
    validator: (value: string) => ModalTitleAlign.includes(value),
    default: 'center'
  },
  width: {
    type: [Number, String],
    validator: (value: string|number) => typeof value === 'number' || value === 'auto',
    default: 520
  },
  title: {
    type: String,
    default: 'title'
  },
  content: {
    type: String,
    default: 'This is a placeholder text!'
  },
  closable: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  hideCancel: {
    type: Boolean,
    default: false
  },
  cancelText: {
    type: String,
    validator: (text: string) => reg1.test(text),
    default: '取消'
  },
  okText: {
    type: String,
    validator: (text: string) => reg1.test(text),
    default: '确定'
  },
  footer: {
    type: Boolean,
    default: true
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  top: {
    type: [Number, String],
    validator: (top: number | string) => typeof top === 'number' || top === 'center',
    default: 100
  },
  simple: {
    type: Boolean,
    default: false
  },
  okButtonProps: {
    type: Object
  },
  cancelButtonProps: {
    type: Object
  },
  maskClass: {
    type: String
  },
  modalClass: {
    type: String
  },
  draggable: {
    type: Boolean,
    default: false
  },
  ifUseFunction: {
    type: Boolean,
    default: false
  },
  iconType: {
    type: String,
    validator: (type: string) => ModalIconType.includes(type),
    default: 'none'
  }
};

export const Props = {
  titleAlign: {
    type: String,
    validator: (value: string) => ModalTitleAlign.includes(value),
    default: 'center'
  },
  title: {
    type: String,
    default: 'title'
  },
  content: {
    type: String,
    default: 'This is a placeholder text!'
  },
  hideCancel: {
    type: Boolean,
    default: false
  },
  okText: {
    type: String,
    validator: (text: string) => reg1.test(text),
    default: '确定'
  },
  top: {
    type: [Number, String],
    validator: (top: number | string) => typeof top === 'number' || top === 'center',
    default: 100
  },
  simple: {
    type: Boolean,
    default: false
  },
  okButtonProps: {
    type: Object
  },
  ifUseFunction: {
    type: Boolean,
    default: false
  },
  iconType: {
    type: String,
    validator: (type: string) => ModalIconType.includes(type),
    default: 'none'
  }
};

export type ModalProps = ExtractPropTypes<typeof modalProps>;
export type Props = ExtractPropTypes<typeof modalProps>;
