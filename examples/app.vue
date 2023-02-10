<template>
    <sb-alert v-model:visible="visible" type="warning" title="adsf" closable @close="asdf">
    content
  </sb-alert>
</template>
<script lang="ts" setup>
    import {ref} from 'vue'
    const visible = ref(true)
    function asdf(){
      visible.value = false;
    }
</script>