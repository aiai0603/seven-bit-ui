<template>
  <div class="sb-result">
    <div class="sb-result-icon">
      <slot name="icon">
        <sb-icon :name="`${iconName}-circle-fill`" :class="currentIconClass"></sb-icon>
      </slot>
    </div>
    <div class="sb-result-title">{{ title }}</div>
    <div class="sb-result-subtitle">{{ subtitle }}</div>
    <div class="sb-result-extra">
      <slot name="extra">
        <sb-button @click="backTo">{{ text }}</sb-button>
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import './style/index.less';
import { computed, useAttrs, defineEmits } from 'vue';
import { resultProps } from './types';
const props = defineProps(resultProps);
const attrs = useAttrs();

type Status = 'info' | 'success' | 'warning' | 'error';
const MAP = {
  info: 'info',
  success: 'check', 
  warning: 'warning', 
  error: 'close'
};

// 属性
const currentIconClass = computed(() => {
  return {
    [`sb-result-icon-${props.status}`]: true,
    [props.iconClass]: true
  }
})

const iconName = MAP[props.status as Status];

// 事件
const emits = defineEmits(['back'])
const backTo = () => emits('back');

</script>

<script lang="ts">
import sbButton from '../sbButton';
import sbIcon from '../sbIcon';
export default {
  components: {
    sbButton,
    sbIcon
  }
};
</script>