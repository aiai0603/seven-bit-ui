<template>
  <transition name="zoom-in-top" @after-leave="handleAfterLeave">
    <div v-if="visible" role="error" :class="alertCls">
      <div v-if="showIcon" class="sb-alert-icon">
        <slot name="icon">
          <sb-icon :name="`${icon.type}-circle-fill`" :style="{ color: icon.color }"></sb-icon>
        </slot>
      </div>
      <div class="sb-alert-body">
        <div v-if="title || $slots.title" class="sb-alert-title">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div class="sb-alert-content">
          <slot />
        </div>
      </div>
      <div v-if="$slots.action" class="sb-alert-action">
        <slot name="action" />
      </div>
      <div v-if="closable" class="sb-alert-close-btn" @click="handleClose">
        <slot name="close-element" @click="onIconClick">
          <span class="sb-alert-icon-hover">
            <sb-icon name="close"></sb-icon>
          </span>
        </slot>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed } from 'vue';
  import { alertProps } from './types';
  import sbIcon from '../sbIcon';

  const emits = defineEmits(['close', 'after-close', 'update:visible']);

  const props = defineProps(alertProps);

  type IconType = 'info' | 'success' | 'warning' | 'error' | 'none';

  interface IconCell {
    readonly type: string;
    readonly color: string;
  }
  interface IconMap {
    info: IconCell;
    success: IconCell;
    warning: IconCell;
    error: IconCell;
    none: IconCell;
  }

  const MAP: IconMap = {
    info: { type: 'info', color: '#165dff' },
    success: { type: 'check', color: '#00b429' },
    warning: { type: 'warning', color: '#ff7d00' },
    error: { type: 'close', color: '#f53f3f' },
    none: { type: '', color: '' }
  };

  const icon = computed(() => MAP[props.type as IconType]);

  const alertCls = computed(() => [
    'sb-alert',
    `sb-alert-${props.type}`,
    {
      ['sb-alert-with-title']: Boolean(props.title),
      ['sb-alert-banner']: props.banner
    }
  ]);

  const visible = computed({
    get: () => props.visible,
    set: val => emits('update:visible', val)
  });

  const onIconClick = (e: MouseEvent) => {
    visible.value = false;
    emits('close', e);
  };

  const handleAfterLeave = () => {
    emits('after-close', () => true);
  };

  const handleClose = (ev: MouseEvent) => {
    visible.value = false;
    emits('close', ev);
  };
</script>
