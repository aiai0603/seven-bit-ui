<template>
  <div :class="styleClass" v-bind="attrs" @click="handleClickeMenu" @contextmenu.prevent="handleContextmenuMenu">
    <div class="sb-dropdown-title">
      <slot name="title"></slot>
    </div>
    <div :class="styleClassItem" :style="{ maxHeight: props.maxHeight + 'px' }">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, provide, ref, useAttrs, defineEmits } from 'vue';
  import { dropDownProps } from './types';
  const props = defineProps(dropDownProps);
  const attrs = useAttrs();
  const styleClass = computed(() => {
    return {
      'sb-dropdown': true,
      'sb-dropdown-is-disabled': props.disabled
    };
  });
  const styleClassItem = computed(() => {
    return {
      'sb-dropdown-content': true,
      'sb-dropdown-content-show': show.value
    };
  });
  const emits = defineEmits(['handle-item-click']);
  const show = ref(false);
  const handleItemClick = (value: any) => {
    emits('handle-item-click', value);
  };
  // const handleHoverMenu = () => {
  //   if (props.trigger !== 'hover') {
  //     return false;
  //   }
  //   if (props.disabled) {
  //     return false;
  //   }
  //   if (!show.value) {
  //     handleShowMenu();
  //   } else {
  //     handleCloseMenu();
  //   }
  // };
  const handleContextmenuMenu = () => {
    if (props.trigger !== 'contextmenu') {
      return false;
    }
    if (props.disabled) {
      return false;
    }
    if (!show.value) {
      handleShowMenu();
    } else {
      handleCloseMenu();
    }
  };
  const handleClickeMenu = () => {
    if (props.trigger !== 'click') {
      return false;
    }
    if (props.disabled) {
      return false;
    }
    if (!show.value) {
      handleShowMenu();
    } else {
      handleCloseMenu();
    }
  };
  const handleShowMenu = () => {
    show.value = true;
  };
  const handleCloseMenu = () => {
    show.value = false;
  };
  provide('dropdownKey', { click: handleItemClick, close: handleCloseMenu, autoClose: props.autoClose });
  defineExpose({
    handleShowMenu,
    handleCloseMenu
  });
</script>
