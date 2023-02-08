<template>
  <div v-if="props.mode === 'horizontal'" :class="styleClass" v-bind="attrs">
    <slot />
  </div>
  <div v-else v-bind="attrs" ref="menu" :class="styleClass">
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, onMounted, provide, ref, useAttrs } from 'vue';
  import { menuProps } from './types';
  const props = defineProps(menuProps);
  const attrs = useAttrs();

  const emits = defineEmits(['handle-item-click']);
  const handleItemClick = (value: any) => {
    activeKey.value = value;
    emits('handle-item-click', value);
  };

  const menuActive = ref(false);

  const handleCloseMenu = () => {
    menuActive.value = true;
  };

  const handleOpenMenu = () => {
    menuActive.value = false;
  };

  const activeKey = ref<string | undefined>(undefined);

  provide('menuKey', { click: handleItemClick, activeKey: activeKey });

  const styleClass = computed(() => {
    return {
      'sb-menu': true,
      [`sb-menu-${props.mode}`]: props.mode,
      'sb-menu-vertical-close': props.mode === 'vertical' && menuActive.value
    };
  });

  const menu = ref<HTMLElement | null>(null);

  onMounted(() => {
    activeKey.value = props.defaultKey;
  });

  defineExpose({
    handleCloseMenu,
    handleOpenMenu
  });
</script>
