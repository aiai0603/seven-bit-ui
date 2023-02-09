<template>
  <div v-if="attrs.type === 'textarea'" class="sb-textarea">
    <textarea v-bind="attrs" ref="textarea" class="sb-textarea-inner" :style="textareaStyle" :value="inputProps.modelValue" @input="changeInputVal" />
  </div>
  <div v-else class="sb-input" :class="styleClass" @mouseenter="isEnter = true" @mouseleave="isEnter = false">
    <div v-if="slots.prepend" class="sb-input-prepend">
      <slot name="prepend"></slot>
    </div>

    <input ref="ipt" class="sb-input-inner" :class="inputStyle" :disabled="inputProps.disabled" v-bind="attrs" :value="inputProps.modelValue" @input="changeInputVal" />

    <div v-if="slots.append" class="sb-input-append">
      <slot name="append"></slot>
    </div>
    <div v-if="inputProps.clearable && isClearAbled" v-show="isEnter" class="sb-input-suffix" @click="clearValue">
      <icon name="close-circle-fill" />
    </div>
    <div v-show="isShowEye" class="sb-input-suffix">
      <icon :name="eyeIcon" @click="changeType" />
    </div>
    <div v-if="isShowPrefixIcon" class="sb-input-prefix">
      <icon :name="inputProps.prefixIcon" />
    </div>
    <div v-if="isShowSuffixIcon" class="sb-input-suffix no-cursor">
      <icon :name="inputProps.suffixIcon" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import './style/index.less';
  import { useAttrs, computed, ref, nextTick, shallowRef, watch, useSlots } from 'vue';
  import Icon from '../sbIcon';
  import { calcTextareaHeight, isObject } from './utils';

  //双向数据绑定&接收属性
  interface AutosizeObj {
    minRows?: number;
    maxRows?: number;
  }
  interface InputProps {
    modelValue?: string | number;
    disabled?: boolean; //禁用状态
    // eslint-disable-next-line vue/require-default-prop
    size?: string; //尺寸
    clearable?: boolean; //可清空
    showPassword?: boolean; //密码框
    // eslint-disable-next-line vue/require-default-prop
    prefixIcon?: string; //首图标
    // eslint-disable-next-line vue/require-default-prop
    suffixIcon?: string; //尾图标
    // eslint-disable-next-line vue/require-default-prop
    autosize?: boolean | AutosizeObj;
  }
  interface InputEmits {
    // eslint-disable-next-line no-unused-vars
    (e: 'update:modelValue', value: string): void;
    // eslint-disable-next-line no-unused-vars
    (e: 'change', value: string): void;
  }
  const inputProps = withDefaults(defineProps<InputProps>(), {
    modelValue: ''
  });
  const inputEmits = defineEmits<InputEmits>();
  const isClearAbled = ref(false);
  const changeInputVal = (event: Event) => {
    //可清除clearable
    (event.target as HTMLInputElement).value ? (isClearAbled.value = true) : (isClearAbled.value = false);
    inputEmits('change', (event.target as HTMLInputElement).value);
    inputEmits('update:modelValue', (event.target as HTMLInputElement).value);
  };
  //将sb-input的属性全部赋予Input组件
  const attrs = useAttrs();

  //根据props更改类名
  const styleClass = computed(() => {
    return {
      'is-disabled': inputProps.disabled,
      [`sb-input-${inputProps.size}`]: inputProps.size,
      ['sb-input-group sb-input-prepend']: slots.prepend,
      ['sb-input-group sb-input-append']: slots.append
    };
  });
  const inputStyle = computed(() => {
    return {
      ['sb-input-prefix']: isShowPrefixIcon.value
    };
  });

  //清除input value
  const isEnter = ref(true);
  const clearValue = () => {
    inputEmits('update:modelValue', '');
  };

  //显示隐藏密码框 showPassword
  const ipt = ref();
  Promise.resolve().then(() => {
    if (inputProps.showPassword) {
      ipt.value.type = 'password';
    }
  });
  const eyeIcon = ref('close-circle-fill');
  const isShowEye = computed(() => {
    return inputProps.showPassword && inputProps.modelValue && !inputProps.clearable;
  });
  const changeType = () => {
    if (ipt.value.type === 'password') {
      eyeIcon.value = 'close-circle-fill';
      ipt.value.type = attrs.type || 'text';
      return;
    }
    ipt.value.type = 'password';
    eyeIcon.value = 'eye';
  };

  //带Icon输入框
  const isShowSuffixIcon = computed(() => {
    return inputProps.suffixIcon && !inputProps.clearable && !inputProps.showPassword;
  });
  const isShowPrefixIcon = computed(() => {
    return inputProps.prefixIcon;
  });
  //textarea
  const textareaStyle = ref<any>();
  const textarea = shallowRef<HTMLTextAreaElement>();
  watch(
    () => inputProps.modelValue,
    () => {
      if (attrs.type === 'textarea' && inputProps.autosize) {
        const minRows = isObject(inputProps.autosize) ? (inputProps.autosize as AutosizeObj).minRows : undefined;
        const maxRows = isObject(inputProps.autosize) ? (inputProps.autosize as AutosizeObj).maxRows : undefined;
        nextTick(() => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          textareaStyle.value = calcTextareaHeight(textarea.value!, minRows, maxRows);
        });
      }
    },
    { immediate: true }
  );

  //复合输入框
  const slots = useSlots();
</script>
