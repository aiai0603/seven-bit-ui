<template>
  <div class="sb-image" :style="styleObj">
    <img class="sb-image-img" :src="imgUrl" :style="styleObj" :flt="props.fit" @click="handleClick" />
    <div v-if="overlayFlag" class="sb-image-overlay">
      <div class="sb-image-error">
        <slot name="error"> error </slot>
      </div>
    </div>
    <div class="sb-image-footer" :class="classObj">
      <div v-if="props.title && props.description" class="sb-image-footer-caption">
        <div class="sb-image-footer-caption-title">{{ props.title }}</div>
        <div class="sb-image-footer-caption-description">{{ props.description }}</div>
      </div>
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref, toRef } from 'vue';
  import { preview } from 'vue3-preview-image';
  import './style/index.less';
  import { imageProps } from './types';
  const props = defineProps(imageProps);
  let styleObj = computed(() => {
    return {
      width: props.width + 'px',
      height: props.height + 'px',
      objectFit: props.fit
    };
  });
  let classObj = computed(() => {
    return {
      [`sb-image-footer-${props.footerPosition}`]: props.footerPosition
    };
  });
  let imgUrl = toRef(props, 'src');
  let overlayFlag = ref(false);
  onMounted(() => {
    if (imgUrl.value) {
      let ImgObj = new Image();
      ImgObj.src = imgUrl.value as string;
      // ImgObj.onload = function () { };
      ImgObj.onerror = function () {
        imgUrl.value = '1';
        overlayFlag.value = true;
      };
    } else {
      imgUrl.value = '';
      overlayFlag.value = true;
    }
  });
  // 预览
  const handleClick = () => {
    if (props.preview) {
      preview(imgUrl.value);
    }
  };
</script>

<style lang="less" scoped></style>
