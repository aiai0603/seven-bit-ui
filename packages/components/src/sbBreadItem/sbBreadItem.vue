<template>
  <a v-if="props.href" class="sb-bread-item" :href="props.href">
    <slot />
  </a>
  <span v-else class="sb-bread-item">
    <slot />
  </span>
  <sb-icon v-if="separatorIcon" class="sb-bread-item-separator" :name="separatorIcon"></sb-icon>
  <span v-else class="sb-bread-item-separator">
    {{ separator }}
  </span>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { sbIcon } from '../index';
  import { inject, toRefs } from 'vue';
  import { breadItemProps } from './types';
  const props = defineProps(breadItemProps);

  const breadContext = inject('breadcrum');

  const { separator, separatorIcon } = toRefs(breadContext as any);
</script>
