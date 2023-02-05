<template>
  <div class="sb-upload">
    <input v-show="false" ref="sbIpt" type="file" :multiple="props.multiple" :accept="props.accept" @change="getFiles" />
    <div v-if="!props.drag" @click="fileUpload">
      <slot />
    </div>
    <dragger v-else @getfileslist="getfileslist" @fileupload="fileUpload"></dragger>
    <div class="sb-upload-list">
      <div v-for="(item, index) in filesList" :key="index" class="sb-upload-list-item" width="100px">
        <div class="sb-upload-list-item-name">
          {{ item.name }}
        </div>
        <!-- <div class="sb-upload-list-item-status-label">
          <icon name="ashbin" @click="delFile(index)" />
        </div> -->
      </div>
    </div>
    <!-- <div class="tip">文件允许上传doc/docx/pdf格式文件</div> -->
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import './style/index.less';
  import { uploadType } from './type';
  import dragger from './sbDragger.vue';
  //获取dom元素
  const sbIpt = ref();
  //定义发射给父组件的方法
  const emits = defineEmits(['getfileslist']);
  const props = defineProps(uploadType);

  const filesList = ref<File[]>([]);

  const fileUpload = () => {
    //触发input点击事件
    sbIpt.value.click();
  };
  //获取文件列表
  const getFiles = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;

    filesList.value.push(...Array.from(files));
    //将文件列表传给父组件
    emits('getfileslist', filesList.value);
  };

  // const delFile = (index: number) => {
  //   filesList.value.splice(index, 1);
  //   emits('getfileslist', filesList.value);
  // };

  const getfileslist = (file: File[]) => {
    filesList.value = file;
    emits('getfileslist', file);
  };
</script>
