<template>
  <main class="sb-main" v-bind="attrs">
    <slot />
  </main>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { useAttrs } from 'vue';
  const attrs = useAttrs();
</script>
