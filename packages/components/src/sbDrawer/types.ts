import type { ExtractPropTypes, PropType } from 'vue';
import type { CSSProperties, RenderFunction } from 'vue';
import type { ButtonProps } from '../sbButton/types';

export type RenderContent = string | RenderFunction;

export interface DrawerConfig {
  placement?: 'top' | 'right' | 'bottom' | 'left';

  title?: RenderContent;

  content: RenderContent;

  mask?: boolean;

  maskClosable?: boolean;

  closable?: boolean;

  okText?: string;

  cancelText?: string;

  okLoading?: boolean;

  okButtonProps?: ButtonProps;

  cancelButtonProps?: ButtonProps;

  width?: number | string;

  height?: number | string;

  popupContainer?: string | HTMLElement;

  drawerStyle?: CSSProperties;

  onOk?: () => void;

  onCancel?: () => void;

  onBeforeOk?: () => void | boolean | Promise<void | boolean>;

  onBeforeCancel?: () => boolean;

  onOpen?: () => void;

  onClose?: () => void;

  escToClose?: boolean;

  header?: boolean | RenderContent;

  footer?: boolean | RenderContent;

  hideCancel?: boolean;
}

export interface DrawerReturn {
  close: () => void;
}

export interface DrawerMethod {
  open: () => DrawerReturn;
}

export const DrawerPlacement = ['right', 'left', 'top', 'bottom'];

export const drawerProps = {
  iconName: {
    type: String,
    default: 'close-circle'
  },

  placement: {
    type: String,
    default: 'right',
    validator: (value: any) => DrawerPlacement.includes(value)
  },

  visible: {
    type: Boolean,
    default: undefined
  },
  width: {
    type: [Number, String],
    default: 250
  },
  height: {
    type: [Number, String],
    default: 250
  },
  drawerStyle: {
    type: Object as PropType<CSSProperties>
  },
  top: {
    type: [Number, String]
  },
  mask: {
    type: Boolean,
    default: true
  },
  title: {
    type: String
  },
  titleAlign: {
    type: String as PropType<'start' | 'center'>,
    default: 'center'
  },
  alignCenter: {
    type: Boolean,
    default: true
  },

  maskClosable: {
    type: Boolean,
    default: true
  },
  hideCancel: {
    type: Boolean,
    default: false
  },

  closable: {
    type: Boolean,
    default: true
  },
  content: String,
  okText: String,
  cancelText: String,

  okButtonProps: {
    type: Object
  },
  cancelButtonProps: {
    type: Object
  },
  header: {
    type: Boolean,
    default: true
  },
  body: {
    type: Boolean,
    default: true
  },
  footer: {
    type: Boolean,
    default: true
  },

  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body'
  },
  maskStyle: {
    type: Object as PropType<CSSProperties>
  },
  modalClass: {
    type: [String, Array] as PropType<string | any[]>
  },
  modalStyle: {
    type: Object as PropType<CSSProperties>
  },

  onBeforeOk: {
    type: Function as PropType<() => void | boolean | Promise<void | boolean>>
  },
  onBeforeCancel: {
    type: Function as PropType<() => boolean>
  },
  escToClose: {
    type: Boolean,
    default: true
  },
  renderToBody: {
    type: Boolean,
    default: true
  },

  draggable: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  }
};
export type DrawerProps = ExtractPropTypes<typeof drawerProps>;
