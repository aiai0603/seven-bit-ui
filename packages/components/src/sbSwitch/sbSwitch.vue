<template>
  <button :class="switchClass" @click="change" :style="{ backgroundColor: currentBgColor }">
    <span class="sb-switch-handle">
      <span class="sb-switch-handle-icon">
        <slot v-if="checked" name="checked-icon">
          <sb-spin v-show="loading" class="sb-swtich-spin" :size="10"/>
        </slot>
        <slot v-else name="unchecked-icon"></slot>
      </span>
    </span>
    <template v-if="type !== 'line'">
      <span class="sb-switch-text-holder">
        <slot v-if="checked" name="checked"></slot>
        <slot v-else name="unchecked"></slot>
      </span>
      <span class="sb-switch-text">
        <slot v-if="checked" name="checked"></slot>
        <slot v-else name="unchecked"></slot>
      </span>
    </template>
  </button>
</template>
<script lang="ts" setup>
import './style/index.less';
import sbSpin from '../sbSpin';
import { computed, ref } from 'vue';
import { switchProps } from './types';
import sbIcon from '../sbIcon';

const props = defineProps(switchProps);

// 定义事件
const emits = defineEmits(['update:checked', 'change']);

// 属性
const checked = computed({
  get: () => props.checked,
  set: (val: boolean) => emits('update:checked')
});

const loading = ref(props.loading);

const switchClass = computed(() => {
  return {
    'sb-switch': true,
    [`sb-switch-type-${props.type}`]: true,
    'sb-switch-checked': props.loading ? false : checked.value,
    [`sb-switch-${props.size}`]: true,
    [`sb-switch-loading`]: loading.value,
  };
});

const currentBgColor = computed(() => (checked.value ? props.checkedColor : props.uncheckedColor));

// 事件
const change = async () => {
  if (loading.value) return;
  const stauts = checked.value, beforeChange = props.beforeChange;
  if (beforeChange) {
    loading.value = true;
    const res = await beforeChange(stauts);
    loading.value = false;
    if (!res) return;
  }
  checked.value = !stauts;
  emits('change', !stauts);
  emits('update:checked', !stauts);
};
</script>