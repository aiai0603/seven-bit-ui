<template>
  <transition name="modal">
    <div v-show="visible" class="sb-modal-container">
      <div v-show="ifHasMask" :class="['sb-modal-mask', maskClass ?? '']"></div>
      <transition name="wrapper" @before-enter="beforeModalEnter" @after-enter="afterModalEnter" @before-leave="beforeModalLeave" @after-leave="afterModalLeave">
        <div v-show="visible" class="sb-modal-wrapper" @click="maskClose">
          <div :class="{ 'sb-modal': true, [modalClass ?? '']: true, 'sb-modal-simple': simple }" :style="modalStyle">
            <div v-dragger="draggable" class="sb-modal-header">
              <div :class="titleClass">
                <span v-show="iconType !== 'none'" class="sb-modal-title-icon" :style="{ color: icon.color }">
                  <slot name="icon">
                    <sb-icon :name="`${icon.type}-circle-fill`"></sb-icon>
                  </slot>
                </span>
                <slot name="title">{{ title }}</slot>
              </div>
              <div v-show="!simple && closable" class="sb-modal-close-btn" @click="close">
                <sb-icon name="close"></sb-icon>
              </div>
            </div>
            <div class="sb-modal-body" :style="modalBodyStyle">
              <slot name="body">{{ content }}</slot>
            </div>
            <div v-show="footer" class="sb-modal-footer">
              <span v-show="!hideCancel">
                <sb-button @click="cancelBtnClick" :type="cancelButtonAttributes.type" :status="cancelButtonAttributes.status" :size="cancelButtonAttributes.size" :round="cancelButtonAttributes.round" :disabled="cancelButtonAttributes.disabled" :long="cancelButtonAttributes.long">
                  {{ cancelText }}
                </sb-button>
              </span>
              <sb-button @click="okBtnClick" :type="okButtonAttributes.type" :status="okButtonAttributes.status" :size="okButtonAttributes.size" :round="okButtonAttributes.round" :disabled="okButtonAttributes.disabled" :long="okButtonAttributes.long">
                {{ okText }}
              </sb-button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs, defineEmits, defineExpose, ref } from 'vue';
  import { modalProps } from './types';

  // 接口类型
  type IconType = 'info' | 'success' | 'warning' | 'error' | 'none';

  interface IconCell {
    readonly type: string;
    readonly color: string;
  }

  interface IconMap {
    info: IconCell;
    success: IconCell;
    warning: IconCell;
    error: IconCell;
    none: IconCell;
  }

  const props = defineProps(modalProps);
  const attrs = useAttrs();
  const MAP: IconMap = {
    info: { type: 'info', color: '#165dff' },
    success: { type: 'check', color: '#00b429' },
    warning: { type: 'warning', color: '#ff7d00' },
    error: { type: 'close', color: '#f53f3f' },
    none: { type: '', color: '' }
  };

  // 属性
  const ifHasMask = computed(() => !props.fullscreen && props.mask);

  const titleClass = computed(() => {
    return {
      'sb-modal-title': true,
      [`sb-modal-title-align-${props.titleAlign}`]: true
    };
  });

  const modalBodyStyle = computed(() => {
    return props.fullscreen ? { flex: 1 } : {};
  });

  const modalStyle = computed(() => {
    const width = props.width;
    const modalWidth = typeof width === 'number' ? width + 'px' : width;
    const style = {
      width: modalWidth,
      height: 'auto',
      top: props.top === 'center' ? '50%' : `${props.top}px`,
      transform: props.top === 'center' ? 'translateY(-50%)' : 'translateY(0)'
    };
    if (props.fullscreen) {
      style.width = '100vw';
      style.height = '100vh';
      style.top = '0';
    }
    return style;
  });

  const okButtonAttributes = computed(() => {
    const attributes = {
      type: 'primary',
      status: 'default',
      size: 'default',
      round: false,
      disabled: false,
      long: false
    };
    return Object.assign(attributes, props.okButtonProps);
  });

  const cancelButtonAttributes = computed(() => {
    const attributes = {
      type: 'primary',
      status: 'secondary',
      size: 'default',
      round: false,
      disabled: false,
      long: false
    };
    return Object.assign(attributes, props.cancelButtonProps);
  });

  const icon = computed(() => MAP[props.iconType as IconType]);

  // 注册事件
  const emits = defineEmits(['ok', 'cancel', 'before-open', 'open', 'before-close', 'close', 'update:visible']);

  // v-modal 属性
  const visible = !props.ifUseFunction
    ? computed({
        get: () => props.visible,
        set: val => emits('update:visible', val)
      })
    : ref(false);

  const open = () => (visible.value = true);

  const close = () => (visible.value = false);

  const maskClose = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    props.maskClosable && close();
  };

  const cancelBtnClick = (e: PointerEvent) => {
    emits('cancel', e);
    close();
  };

  const okBtnClick = (e: PointerEvent) => {
    emits('ok', e);
    close();
  };

  const beforeModalEnter = () => emits('before-open');

  const afterModalEnter = () => emits('open');

  const beforeModalLeave = () => emits('before-close');

  const afterModalLeave = () => emits('close');

  defineExpose({ open });
</script>

<script lang="ts">
  interface Bindings {
    value: boolean;
  }

  interface Positoin {
    top: number;
    left: number;
    right: number;
    bottom: number;
  }

  import sbButton from '../sbButton';
  import sbIcon from '../sbIcon';

  export default {
    components: {
      sbButton,
      sbIcon
    },
    directives: {
      dragger: {
        mounted(el: HTMLElement, bindings: Bindings) {
          if (!bindings.value) return;
          el.classList.add('sb-modal-draggable');
          const parent = el.parentNode as HTMLElement;
          let pos: Positoin = { top: 0, left: 0, right: 0, bottom: 0 };
          let flag: boolean = false;
          el.addEventListener('mousedown', (e: MouseEvent) => {
            const res = parent.getBoundingClientRect();
            if (!flag) {
              const { offsetHeight, offsetWidth } = parent.parentNode as HTMLElement;
              pos.top = res.top;
              pos.left = res.left;
              pos.bottom = offsetHeight - res.bottom;
              pos.right = offsetWidth - res.right;
              flag = true;
            }
            const { pageX: x, pageY: y } = e;
            const deltaX = x - res.left,
              deltaY = y - res.top;
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', () => document.removeEventListener('mousemove', move));

            function move(e: MouseEvent): void {
              const { pageX, pageY } = e;
              const { left, top, right, bottom } = pos;
              let tempX = pageX - deltaX - pos.left,
                tempY = pageY - deltaY - pos.top;
              // 固定范围在可视区域内拖动
              tempX = restrictArea(tempX, -left, right);
              tempY = restrictArea(tempY, -top, bottom);
              parent.style.transform = `translate(${tempX}px, ${tempY}px)`;
            }

            function restrictArea(x: number, lower: number, upper: number): number {
              if (x < lower) return lower;
              if (x > upper) return upper;
              return x;
            }
          });
        }
      }
    }
  };
</script>
