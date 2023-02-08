<template>
  <section :class="styleClass" v-bind="attrs">
    <slot />
  </section>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { layoutProps } from './types';
  const props = defineProps(layoutProps);
  const attrs = useAttrs();

  const styleClass = computed(() => {
    return {
      'sb-layout': true,
      [`sb-layout-is-${props.direction}`]: props.direction
    };
  });
</script>
