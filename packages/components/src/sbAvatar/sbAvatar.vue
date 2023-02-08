<template>
  <div :class="styleClass" :style="style" @click="Click">
    <span v-if="!imgUrl" class="sb-avatar-text">kif</span>
    <span v-else class="sb-avatar-image">
      <div v-if="imgUrl === '1'" class="sb-avatar-image-icon">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="arco-icon arco-icon-image-close" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
          <path d="M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17"></path>
          <path d="m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z"></path>
          <path d="M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z" fill="currentColor" stroke="none"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z" fill="currentColor" stroke="none"></path>
          <path d="M17 15h-2v2h2v-2Z"></path>
        </svg>
      </div>
      <img v-else :src="imgUrl" alt="avatar" />
    </span>
    <div v-if="props.triggerType" :class="tiggerStyle">
      <slot name="trigger-icon"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, defineEmits, onMounted, ref } from 'vue';
  import { avatarProps } from './types';
  const props = defineProps(avatarProps);
  const style = computed(() => {
    return {
      fontSize: props.size / 2 + 'px',
      width: props.size + 'px',
      height: props.size + 'px'
    };
  });
  const styleClass = computed(() => {
    return {
      'sb-avatar': true,
      [`sb-avatar-${props.shape}`]: props.shape,
      [`sb-avatar-${props.size}`]: props.size
    };
  });
  const tiggerStyle = computed(() => {
    return {
      [`sb-avatar-trigger-icon-${props.triggerType}`]: props.triggerType
    };
  });
  // 事件处理
  const emits = defineEmits(['click', 'error', 'load']);
  const Click = (e: any) => {
    emits('click', e);
  };
  let imgUrl = ref(props.imageUrl);
  onMounted(() => {
    if (imgUrl.value) {
      let ImgObj = new Image();
      ImgObj.src = imgUrl.value as string;
      ImgObj.onload = function () {
        emits('load');
      };
      ImgObj.onerror = function () {
        emits('error');
        imgUrl.value = '1';
      };
    } else {
      emits('error');
      imgUrl.value = '';
    }
  });
</script>
