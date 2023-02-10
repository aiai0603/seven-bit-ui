<template>
 <div>
  <sb-input size="small" disabled="true">
    <template #prepend>
            http://
        </template>
  </sb-input>
<br>
  <sb-input size="small">
    <template #append>
            .com
    </template>
  </sb-input>
 </div>
  <div>
    <Table />
    <Avatar />
  </div>
</template>
<script lang="ts" setup>
  import Table from './components/table.vue';
  import Avatar from './components/avatar.vue';
</script>
