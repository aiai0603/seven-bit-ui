<template>
  <div>
    <sb-button type="primary" size="small" round name="lst" @click="test"> 哈哈哈哈哈 </sb-button>
  </div>
</template>
<script lang="ts" setup>
  const test = (msg: number) => {
    console.log(msg);
  };
</script>
