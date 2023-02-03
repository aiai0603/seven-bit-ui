<template>
  <div :class="styleClass" v-bind="attrs">
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs } from 'vue';
  import { colProps } from './types';
  const props = defineProps(colProps);
  const attrs = useAttrs();

  const styleClass = computed(() => {
    return {
      'sb-col': true,
      [`sb-col-span-${props.span}`]: props.span,
      [`sb-col-offest-${props.offest}`]: props.offest,
      [`sb-col-pull-${props.pull}`]: props.pull,
      [`sb-col-push-${props.push}`]: props.push,
      [`sb-col-xs-span-${props.xs && props.xs.span}`]: props.xs && props.xs.span,
      [`sb-col-xs-offest-${props.xs && props.xs.offest}`]: props.xs && props.xs.offest,
      [`sb-col-xs-pull-${props.xs && props.xs.pull}`]: props.xs && props.xs.pull,
      [`sb-col-xs-push-${props.xs && props.xs.push}`]: props.xs && props.xs.push,
      [`sb-col-sm-span-${props.sm && props.sm.span}`]: props.sm && props.sm.span,
      [`sb-col-sm-offest-${props.sm && props.sm.offest}`]: props.sm && props.sm.offest,
      [`sb-col-sm-pull-${props.sm && props.sm.pull}`]: props.sm && props.sm.pull,
      [`sb-col-sm-push-${props.sm && props.sm.push}`]: props.sm && props.sm.push,
      [`sb-col-md-span-${props.md && props.md.span}`]: props.md && props.md.span,
      [`sb-col-md-offest-${props.md && props.md.offest}`]: props.md && props.md.offest,
      [`sb-col-md-pull-${props.md && props.md.pull}`]: props.md && props.md.pull,
      [`sb-col-md-push-${props.md && props.md.push}`]: props.md && props.md.push,
      [`sb-col-lg-span-${props.lg && props.lg.span}`]: props.lg && props.lg.span,
      [`sb-col-lg-offest-${props.lg && props.lg.offest}`]: props.lg && props.lg.offest,
      [`sb-col-lg-pull-${props.lg && props.lg.pull}`]: props.lg && props.lg.pull,
      [`sb-col-lg-push-${props.lg && props.lg.push}`]: props.lg && props.lg.push,
      [`sb-col-xl-span-${props.xl && props.xl.span}`]: props.xl && props.xl.span,
      [`sb-col-xl-offest-${props.xl && props.xl.offest}`]: props.xl && props.xl.offest,
      [`sb-col-xl-pull-${props.xl && props.xl.pull}`]: props.xl && props.xl.pull,
      [`sb-col-xl-push-${props.xl && props.xl.push}`]: props.xl && props.xl.push,
      [`sb-col-xxl-span-${props.xxl && props.xxl.span}`]: props.xxl && props.xxl.span,
      [`sb-col-xxl-offest-${props.xxl && props.xxl.offest}`]: props.xxl && props.xxl.offest,
      [`sb-col-xxl-pull-${props.xxl && props.xxl.pull}`]: props.xxl && props.xxl.pull,
      [`sb-col-xxl-push-${props.xxl && props.xxl.push}`]: props.xxl && props.xxl.push
    };
  });
</script>
