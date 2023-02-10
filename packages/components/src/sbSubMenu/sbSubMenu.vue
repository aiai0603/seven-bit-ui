<template>
  <div :class="styleClass" v-bind="attrs">
    <div class="sb-sub-mune-title" @click="handleTitleClick">
      <slot name="title"></slot>
      <sb-icon name="down" class="sb-sub-menu-arrow"></sb-icon>
    </div>
    <div class="sb-sub-menu-slot">
      <slot />
    </div>
    <div v-if="subActive" class="sb-sub-menu-slot-close">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import '../sbIcon';
  import { computed, onMounted, ref, useAttrs } from 'vue';
  import { subMenuProps } from './types';
  const props = defineProps(subMenuProps);
  const attrs = useAttrs();

  const subActive = ref(false);

  const styleClass = computed(() => {
    return {
      'sb-sub-mune': true,
      'sb-sub-mune-active': subActive.value
    };
  });

  const handleTitleClick = () => {
    subActive.value = !subActive.value;
  };
  onMounted(() => {
    subActive.value = props.defaultOpen;
  });
</script>
