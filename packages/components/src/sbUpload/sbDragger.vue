<template>
  <div ref="fileArea" class="sb-upload-dragger" :class="{ ['sb-upload-draggerenter']: isEnter }" @click="emits('fileUpload')">
    <div class="sb-upload-content">
      <!-- <sb-icon class="sb-upload-icon" name="info-circle-fill"></sb-icon> -->
      <!-- <sb-link type="default" :name="isEnter ? 'file-open' : 'folder-close'">点击上传</sb-link> -->
      <div class="sb-upload-dragger-text"> 将文件拖到此处或<sb-link>点击上传</sb-link> <br /><p style="font-size: 10px">Only doc/docx/pdf types are accepted</p></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import './style/drag.less';
  import { ref, onMounted } from 'vue';
  const emits = defineEmits(['getfileslist', 'fileUpload']);
  // 通过ref属性在组件创建完成后进行事件监听
  const fileArea = ref();
  const isEnter = ref(false);
  const timer = ref<null | number>(null);
  const filesList = ref<File[]>([]);

  onMounted(() => {
    fileArea.value.addEventListener(
      // 获取到文件之后把文件名字渲染到下面的列表中，并且将文件列表传给用户，同时限制如果没有传入drag则不监听这两个事件
      'drop',
      (e: any) => {
        e.preventDefault();
        filesList.value.push(...Array.from(e.dataTransfer.files as FileList));
        emits('getfileslist', filesList.value);
      },
      false
    );
    fileArea.value.addEventListener('dragover', onDragover, false);
  });

  // 判断文件是否拖到这个区域从而展示不同样式
  const onDragover = (e: Event) => {
    isEnter.value = true;
    // dragover+防抖代替dragenter和dragleave，因为dragleave进入子元素也会触发
    if (timer.value !== null) {
      clearTimeout(timer.value);
    }
    timer.value = window.setTimeout(() => {
      isEnter.value = false;
      timer.value = null;
    }, 100);

    e.stopPropagation();
    e.preventDefault();
  };
</script>
