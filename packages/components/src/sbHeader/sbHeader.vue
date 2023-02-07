<template>
  <header class="sb-header" v-bind="attrs" :style="styleItem">
    <slot />
  </header>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { headerProps } from './types';
  const props = defineProps(headerProps);
  const attrs = useAttrs();

  const styleItem = computed(() => {
    return {
      '--sb-header-height': props.height && props.height + 'px'
    };
  });
</script>
