<template>
  <div ref="breadcrumb" :class="styleClass" v-bind="attrs">
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import '../sbIcon';
  import { computed, provide, ref, useAttrs } from 'vue';
  import { breadProps } from './types';
  const props = defineProps(breadProps);
  const attrs = useAttrs();
  const breadcrumb = ref<HTMLDivElement>();

  provide('breadcrum', props);

  const styleClass = computed(() => {
    return {
      'sb-bread': true
    };
  });
</script>
