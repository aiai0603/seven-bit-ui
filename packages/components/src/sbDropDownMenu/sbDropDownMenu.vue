<template>
  <div class="sb-dropdown-menu" v-bind="attrs">
    <div v-if="props.title" class="sb-dropdown-menu-title">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { useAttrs } from 'vue';
  import { dropDownMenuProps } from './types';
  const props = defineProps(dropDownMenuProps);
  const attrs = useAttrs();
</script>
