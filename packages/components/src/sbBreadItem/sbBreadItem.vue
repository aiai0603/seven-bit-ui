<template>
  <a v-if="props.href" class="sb-bread-item sb-bread-is-link" :href="props.href">
    <slot />
  </a>
  <div v-else class="sb-bread-item">
    <slot />
  </div>
  <sb-icon v-if="separatorIcon" class="sb-bread-item-separator" :name="separatorIcon"></sb-icon>
  <span v-else class="sb-bread-item-separator">
    {{ separator }}
  </span>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import '../sbIcon';
  import { inject, toRefs } from 'vue';
  import { breadItemProps } from './types';
  const props = defineProps(breadItemProps);

  const breadContext = inject('breadcrum');

  const { separator, separatorIcon } = toRefs(breadContext as any);
</script>
