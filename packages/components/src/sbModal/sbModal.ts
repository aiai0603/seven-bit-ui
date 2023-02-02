import { createVNode, render, ref } from "vue";
import sbModal from "./sbModal.vue";
import { Props } from './types';

type ModalType = 'info' | 'success' | 'warning' | 'error';

interface modalFunction {
  (props: Props): void 
}

interface ModalBox {
  info: modalFunction,
  success: modalFunction,
  warning: modalFunction,
  error: modalFunction
}

const type: ModalType[] = ['info', 'success', 'warning', 'error'];
const sbModalBox: ModalBox = { } as ModalBox;
const ModalFactory = (typeList: ModalType[]) => {
  typeList.forEach((type: ModalType) => {
    sbModalBox[type] = function (props: Props): void {
      if (props === undefined) props = {} as Props;
      props.simple = true;
      props.hideCancel = true;
      props.width = 400;
      props.ifUseFunction = true;
      props.iconType = type;
      const modalVNode = createVNode(sbModal, props);
      const modalContainer = document.createElement('div');
      render(modalVNode, modalContainer);
      document.body.appendChild(modalContainer);
      modalVNode.component?.exposed?.open();
    }
  });
}

ModalFactory(type);

export default sbModalBox;