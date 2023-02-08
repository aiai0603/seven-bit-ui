<template>
  <div v-show="show" class="sb-backtop" v-bind="attrs" :style="styleItem" @click="handleBackTop">
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, onBeforeMount, onMounted, ref, useAttrs } from 'vue';
  import { backtopProps } from './types';
  const props = defineProps(backtopProps);
  const attrs = useAttrs();

  const styleItem = computed(() => {
    return {
      '--sb-backtop-right': props.right + 'px',
      '--sb-backtop-bottom': props.bottom + 'px'
    };
  });

  const show = ref(false);

  const showSearch = () => {
    let top = document.documentElement.scrollTop;
    if (top > props.height) {
      show.value = true;
    } else {
      show.value = false;
    }
  };
  const handleBackTop = () => {
    const timeTop = setInterval(() => {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      document.body.scrollTop = document.documentElement.scrollTop = top -= 25;
      if (top <= 0) {
        clearInterval(timeTop);
      }
    }, 10);
  };
  onMounted(() => {
    window.addEventListener('scroll', showSearch);
  });
  onBeforeMount(() => {
    window.removeEventListener('scroll', showSearch);
  });
</script>
