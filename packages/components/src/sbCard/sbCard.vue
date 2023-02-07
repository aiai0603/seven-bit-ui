<template>
  <div class="sb-card" :class="styleClass" :style="props.style">
    <div class="sb-card-header">
      <div class="sb-card-header-title">title</div>
      <div class="sb-card-header-extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="sb-card-body">
      <div v-if="props.loading" class="sb-spin">
        <div class="sb-spin-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="sb-icon sb-icon-loading sb-icon-spin" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter"><path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"></path></svg>
        </div>
      </div>
      <slot v-else></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import './style/index.less';
  import { cardProps } from './types';
  const props = defineProps(cardProps);
  const styleClass = computed(() => {
    return {
      ['sb-card-bordered']: props.bordered,
      [`sb-card-size-${props.size}`]: props.size,
      ['sb-card-loading']: props.loading
    };
  });
</script>
<style lang="less"></style>
