<template>
  <svg :class="styleClass" aria-hidden="true" v-bind="attrs">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts" setup>
  // import loadIcon from './font/iconfont';
  import './style/index.less';
  import { computed, onMounted, useAttrs } from 'vue';
  import { iconProps } from './types';
  const props = defineProps(iconProps);
  const attrs = useAttrs();

  const iconName = computed(() => {
    return `#sb-icon-${props.name}`;
  });

  const styleClass = computed(() => {
    return {
      'sb-icon': true,
      'sb-icon-is-spin': props.spin
    };
  });

  onMounted(() => {
    // loadIcon();
  });
</script>
