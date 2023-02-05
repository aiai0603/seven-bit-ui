<template>
  <div v-if="props.divided" class="sb-dropdown-item-divided"></div>
  <div :class="styleClass" v-bind="attrs" @click.stop="handleClick(props.value)">
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, inject, useAttrs } from 'vue';
  import { dropDownItemProps } from './types';
  const props = defineProps(dropDownItemProps);
  const attrs = useAttrs();

  const dropdownContext = inject('dropdownKey');
  const handleClick = (e: any) => {
    if (props.disabled) {
      return false;
    }
    click && click(e);
    if (autoClose) {
      close && close();
    }
  };
  const click = dropdownContext ? (dropdownContext as any).click : undefined;
  const close = dropdownContext ? (dropdownContext as any).close : undefined;
  const { autoClose } = dropdownContext as any;

  const styleClass = computed(() => {
    return {
      'sb-dropdown-item': true,
      'sb-dropdown-item-is-disabled': props.disabled
    };
  });
</script>
