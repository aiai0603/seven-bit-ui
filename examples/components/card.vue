<template>
  <div>
    <sbCard :style="{ width: '360px', marginBottom: '20px' }" :hoverable="hoverable" :bordered="bordered" :loading="loading" :size="size">
      <!-- <template #extra> more</template> -->
      <template #cover>
        <div
          :style="{
            height: '204px',
            overflow: 'hidden'
          }"
        >
          <img :style="{ width: '100%', transform: 'translateY(-20px)' }" alt="dessert" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp" />
        </div>
      </template>
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
    <br />
    loading: <button @click="changeloading">{{ loading }}</button>
    <br />
    hoverable: <button @click="changehoverable">{{ hoverable }}</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const bordered = ref(true);
  const changeBroder = function () {
    bordered.value = !bordered.value;
  };
  const size = ref('medium');
  const loading = ref(false);
  const changeloading = function () {
    loading.value = !loading.value;
  };
  const hoverable = ref(true);

  const changehoverable = function () {
    hoverable.value = !hoverable.value;
  };
  let title = 'title';
</script>

<style lang="less" scoped></style>
