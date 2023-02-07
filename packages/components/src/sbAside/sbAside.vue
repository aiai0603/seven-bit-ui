<template>
  <aside class="sb-asider" v-bind="attrs" :style="styleItem">
    <slot />
  </aside>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { asiderProps } from './types';
  const props = defineProps(asiderProps);
  const attrs = useAttrs();

  const styleItem = computed(() => {
    return {
      '--sb-aside-width': props.width && props.width + 'px'
    };
  });
</script>
