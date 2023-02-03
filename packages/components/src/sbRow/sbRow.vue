<template>
  <div :class="styleClass" v-bind="attrs">
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { rowProps } from './types';
  const props = defineProps(rowProps);
  const attrs = useAttrs();

  const styleClass = computed(() => {
    return {
      'sb-row': true,
      [`sb-row-align-${props.align}`]: props.align,
      [`sb-row-justify-${props.justify}`]: props.justify,
      [`sb-row-gutter-${props.gutter}`]: props.gutter
    };
  });
</script>
