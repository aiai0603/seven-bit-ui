<template>
  <div :class="spinClass">
    <slot></slot>
    <transition name="spin" mode="out-in" enter>
      <div class="sb-spin-container" v-show="!ifInsideContainer || loading">
        <div class="sb-spin-icon" :style="{ fontSize: `${size}px` }">
          <div v-if="!dot" class="sb-spin-icon-loading sb-spin-icon-spinning">
            <slot name="icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
                <path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"></path>
              </svg>
            </slot>
          </div>
          <div v-else class="sb-spin-dot-loading">
            <div class="sb-spin-dot-loading-item"></div>
            <div class="sb-spin-dot-loading-item"></div>
            <div class="sb-spin-dot-loading-item"></div>
            <div class="sb-spin-dot-loading-item"></div>
            <div class="sb-spin-dot-loading-item"></div>
          </div>
        </div>
        <div class="sb-spin-tip">{{ tip }}</div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import './style/index.less';
// import sbIcon from '../sbIcon';
  import { useSlots, computed, useAttrs } from 'vue';
  import { spinProps } from './types';
  const props = defineProps(spinProps);
  const attrs = useAttrs();
  const slots = useSlots();

  // 属性
  const ifInsideContainer = typeof slots.default === 'function';

  const spinClass = computed(() => {
    return {
      'sb-spin': true,
      'sb-spin-with-tip': props.tip,
      'sb-spin-in-cotainer': ifInsideContainer
    };
  });
</script>
