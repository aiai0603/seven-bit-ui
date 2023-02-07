<template>
  <div>
    <sbCard :style="{ width: '360px' }" :bordered="bordered" loading :size="size">
      <template #extra> more</template>
      content
    </sbCard>

    <br />
    bordered: <button @click="changeBroder">{{ bordered }}</button>
    <br />
    size:
    <input type="radio" name="size" value="medium" v-model="size" />
    medium
    <input type="radio" name="size" value="small" v-model="size" />
    small
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const bordered = ref(true);
  const changeBroder = function () {
    bordered.value = !bordered.value;
  };
  const size = ref('medium');
</script>

<style lang="less" scoped></style>
