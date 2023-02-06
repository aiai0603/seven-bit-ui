<template>
  <div :class="styleClass" v-bind="attrs" @click="handleClick()">
    <div class="sb-menu-logo">
      <slot name="icon"></slot>
    </div>
    <div class="sb-menu-item-content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import '../sbIcon';
  import { computed, inject, toRefs, useAttrs } from 'vue';
  import { menuItemProps } from './types';
  const props = defineProps(menuItemProps);
  const attrs = useAttrs();

  const menuContext = inject('menuKey');
  const click = menuContext ? (menuContext as any).click : undefined;

  const handleClick = () => {
    if (props.disabled || !props.value) {
      return false;
    }
    click && click(props.value);
  };
  const { activeKey } = toRefs(menuContext as any);

  const styleClass = computed(() => {
    return {
      'sb-menu-item': true,
      'sb-menu-item-active': activeKey.value == props.value,
      'sb-menu-is-disabled': props.disabled
    };
  });
</script>
