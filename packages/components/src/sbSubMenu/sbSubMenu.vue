<template>
  <div :class="styleClass" v-bind="attrs">
    <div class="sb-sub-mune-title" @click="handleTitleClick">
      <slot name="title"></slot>
      <sb-icon name="down" class="sb-sub-menu-arrow"></sb-icon>
    </div>
    <div class="sb-sub-menu-slot" @click="handleSubClick">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import '../sbIcon';
  import { computed, inject, onMounted, ref, useAttrs } from 'vue';
  import { subMenuProps } from './types';
  const props = defineProps(subMenuProps);
  const attrs = useAttrs();

  const subActive = ref(false);

  const subContext = inject('subKey');
  const click = subContext ? (subContext as any).click : undefined;

  const handleSubClick = () => {
    if (!props.keys) {
      return false;
    }
    click && click(props.keys);
  };
  const activeKey = subContext && (subContext as any).activeKey;

  const styleClass = computed(() => {
    return {
      'sb-sub-mune': true,
      'sb-sub-mune-active': subActive.value,
      'sb-sub-mune-choose': activeKey.value && activeKey.value.indexOf(props.keys) >= 0
    };
  });

  const handleTitleClick = () => {
    subActive.value = !subActive.value;
  };
  onMounted(() => {
    subActive.value = props.defaultOpen;
  });
</script>
