<template>
  <div>
    <div v-show="visible" class="sb-drawer-container">
      <transition name="fade-drawer">
        <div v-if="mask" class="sb-drawer-mask" @click="maskIsClosable"></div>
      </transition>
      <transition :name="`slide-${placement}-drawer`">
        <div v-show="visible">
          <div v-if="header" class="sb-drawer" :style="style">
            <div class="sb-drawer-header">
              <div class="sb-drawer-title">
                <slot name="title">{{ title }}</slot>
              </div>
              <div v-if="closable" role="button" class="sb-drawer-close-btn" @click="handleCancel">
                <span class="sb-drawer-icon-hover">
                  <sb-icon name="close" @click="onIconClick"></sb-icon>
                </span>
              </div>
            </div>
            <div class="sb-drawer-body">
              <slot name="body">{{ content }}</slot>
            </div>
            <div v-if="footer" class="sb-drawer-footer">
              <div class="footer">
                <sb-button v-if="!hideCancel" v-bind="cancelButtonProps" :type="cancelButtonAttributes.type" :size="cancelButtonAttributes.size" :status="cancelButtonAttributes.status" :round="cancelButtonAttributes.round" :disabled="cancelButtonAttributes.round" :long="cancelButtonAttributes.long" @click="handleCancel">{{ cancelText }}</sb-button>
                <sb-button v-bind="okButtonProps" :type="okButtonAttributes.type" :size="okButtonAttributes.size" :status="okButtonAttributes.status" :round="okButtonAttributes.round" :disabled="okButtonAttributes.disabled" :long="okButtonAttributes.long" @click="handleOk">{{ okText }}</sb-button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { CSSProperties,computed, defineEmits, ref } from 'vue';
  import { drawerProps } from './types';
  import sbButton from '../sbButton';
  import sbIcon from '../sbIcon';
  import { isBoolean, isFunction, isNumber, isPromise } from './hook/is';

  const props = defineProps(drawerProps);
  const emits = defineEmits(['update:visible', 'ok', 'cancel', 'open', 'close', 'icon-click']);

  // const emits = defineEmits<{'update:visible': (visible: boolean) => true, 'ok': () => true,'cancel': () => true,'open': () => true,'close': () => true,}>()
  

  const visible = computed({
    get: () => props.visible,
    set: (val) => emits('update:visible',val)
  })

  const open = () => {visible.value = true}
  const close = () => {
    visible.value = false;
    emits('update:visible', false);
  };

  const maskIsClosable = () => {
    if (props.maskClosable) {
      handleCancel();
    }
  };

  const style = computed(() => {
      const style: CSSProperties = {
        [props.placement]: 0,
        ...(props.drawerStyle ?? {}),
      };
      if (['right', 'left'].includes(props.placement)) {
        style.width = isNumber(props.width) ? `${props.width}px` : props.width;
      } else {
        style.height = isNumber(props.height)
          ? `${props.height}px`
          : props.height;
      }
      return style;
    });

  const onIconClick = (ev: MouseEvent) => {
    emits('icon-click', ev);
  };

  const handleCancel = () => {
    let result = true;
    if (isFunction(props.onBeforeCancel)) {
      result = props.onBeforeCancel() ?? false;
    }
    if (result) {
      emits('cancel');
      close();
    }
  };

  const _okLoading = ref(false);
  let promiseNumber = 0;

  const handleOk = async () => {
    const currentPromiseNumber = promiseNumber;
    const closed = await new Promise<boolean>(
      // eslint-disable-next-line no-async-promise-executor
      async resolve => {
        if (isFunction(props.onBeforeOk)) {
          let result = props.onBeforeOk();
          if (isPromise(result) || !isBoolean(result)) {
            _okLoading.value = true;
          }
          if (isPromise(result)) {
            try {
              // if onBeforeOk is Promise<void> ,set Defaults true
              result = (await result) ?? true;
            } catch (error) {
              result = false;
            }
          }
          if (isBoolean(result)) {
            resolve(result);
          }
        } else {
          resolve(true);
        }
      }
    );
    if (currentPromiseNumber === promiseNumber) {
      if (closed) {
        emits('ok');
        close();
      } else if (_okLoading.value) {
        _okLoading.value = false;
      }
    }
  };

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
</script>
