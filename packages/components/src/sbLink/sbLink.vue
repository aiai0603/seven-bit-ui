<template>
  <a :class="styleClass" v-bind="attrs" @click="handleAllowHref">
    <slot />
  </a>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { linkProps } from './types';
  const props = defineProps(linkProps);
  const attrs = useAttrs();

  const handleAllowHref = (e: Event) => {
    if (props.disabled) {
      e.preventDefault();
      return false;
    }
  };

  const styleClass = computed(() => {
    return {
      'sb-link': true,
      [`sb-link-${props.type}`]: props.type,
      'sb-link-is-disabled': props.disabled,
      'sb-link-is-underline': props.underline
    };
  });
</script>
