<template>
  <button :class="styleClass" v-bind="attrs" :disabled="props.disabled">
    <slot />
  </button>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { buttonProps } from './types';
  const props = defineProps(buttonProps);
  const attrs = useAttrs();

  const styleClass = computed(() => {
    return {
      'sb-button': true,
      [`sb-button-${props.type}`]: props.type,
      [`sb-button-${props.status}`]: props.status,
      'sb-button-is-round': props.round,
      'sb-button-is-long': props.long,
      'sb-button-is-disabled': props.disabled,
      [`sb-button-size-${props.size}`]: props.size
    };
  });
</script>
