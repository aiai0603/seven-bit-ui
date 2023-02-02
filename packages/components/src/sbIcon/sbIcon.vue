<template>
  <svg class="sb-icon" aria-hidden="true" v-bind="attrs">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts" setup>
  import './font/iconfont.js';
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { iconProps } from './types';
  const props = defineProps(iconProps);
  const attrs = useAttrs();

  const iconName = computed(() => {
    return `#sb-icon-${props.name}`;
  });
</script>
