<template>
  <button :class="styleClass" v-bind="attrs" @click="myClick()">
    <slot />
  </button>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs, defineEmits } from 'vue';
  import { buttonProps } from './types';
  const props = defineProps(buttonProps);
  const attrs = useAttrs();

  const emits = defineEmits(['click']);

  const styleClass = computed(() => {
    return {
      'ls-button': true,
      [`ls-button-${props.type}`]: props.type,
      'is-round': props.round,
      'is-disabled': props.disabled,
      [`ls-button-${props.size}`]: props.size
    };
  });

  const myClick = () => {
    emits('click', 11);
  };
</script>
