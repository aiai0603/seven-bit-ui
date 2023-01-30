<template>
  <div>
    <ls-button type="primary" size="small" round name="lst" @click="test"> 哈哈哈哈哈 </ls-button>
  </div>
</template>
<script lang="ts" setup>
  import { LsButton } from 'seven-bit-ui';
  const test = (msg: number) => {
    console.log(msg);
  };
</script>
