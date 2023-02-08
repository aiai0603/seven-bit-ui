<template>
  <footer class="sb-footer" v-bind="attrs" :style="styleItem">
    <slot />
  </footer>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { footerProps } from './types';
  const props = defineProps(footerProps);
  const attrs = useAttrs();

  const styleItem = computed(() => {
    return {
      '--sb-footer-height': props.height && props.height + 'px'
    };
  });
</script>
