<template>
  <section v-if="type === 'line'">
    <div :style="{ width: currentWidth }" :class="progressClass">
      <div class="sb-progress-line-wrapper">
        <div class="sb-progress-line" :style="{ width: '100%', height: strokeWidth + 'px', backgroundColor: trackColor }">
          <div class="sb-progress-line-bar-buffer"></div>
          <div v-if="typeof currentColor === 'string'" class="sb-progress-line-bar" :style="{ width: currentPercent + '%', background: currentColor }"></div>
        </div>
        <div v-show="showText" class="sb-progress-line-text">
          <span>{{ currentPercent }}%</span>
          <sb-icon class="sb-progress-icon" :name="`${iconName}-circle-fill`"></sb-icon>
        </div>
      </div>
    </div>
  </section>
  <section v-else-if="type === 'circle'">
    <div :class="progressClass" style="width: 100%; height: 100%">
      <div class="sb-progress-circle-wrapper" :style="circleStyle">
        <svg viewBox="0 0 80 80" class="sb-progress-circle-svg">
          <defs v-if="typeof currentColor === 'object'">
            <linearGradient :id="currentColor.id" :x1="currentColor.x1" :y1="currentColor.y1" :x2="currentColor.x2" :y2="currentColor.y2">
              <stop v-for="(item, index) in currentColor.colorStops" :key="index" :offset="item.offset" :stop-color="item.color" />
            </linearGradient>
          </defs>
          <circle class="sb-progress-circle-bg" :style="{ stroke: trackColor }" fill="none" cx="40" cy="40" r="38" stroke-width="2"></circle>
          <circle class="sb-progress-circle-bar" :style="{ stroke: typeof currentColor === 'object' ? `url(#${currentColor.id})` : currentColor, 'stroke-dashoffset': (currentPercent * circleStroke) / 100 }" fill="none" cx="40" cy="40" r="38" stroke-width="4"></circle>
        </svg>
        <div class="sb-progress-circle-text">
          <span v-if="status === 'normal' || status === undefined">{{ 100 - currentPercent }}%</span>
          <sb-icon v-else class="sb-progress-icon" :name="`${iconName}`"></sb-icon>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import { computed, useAttrs, defineEmits } from 'vue';
  import { progressProps } from './types';

  // 类型接口
  type Type = 'line' | 'circle';
  type Status = 'normal' | 'success' | 'warning' | 'danger';

  interface LinearGradientCell {
    offset: string;
    color: string;
  }

  interface LinearGradient {
    id: string;
    x1: string;
    x2: string;
    y1: string;
    y2: string;
    colorStops: LinearGradientCell[];
  }

  // 全局变量
  const props = defineProps(progressProps);
  const attrs = useAttrs();
  const circleStroke = 238.761;

  const iconMap = {
    line: {
      success: 'check',
      warning: 'warning',
      danger: 'close',
      normal: ''
    },
    circle: {
      success: 'check',
      warning: 'exclaimination',
      danger: 'close',
      normal: ''
    }
  };

  // 属性
  const progressClass = computed(() => {
    return {
      'sb-progress': true,
      [`sb-progress-round`]: props.round,
      [`sb-progress-type-${props.type}`]: true,
      [`sb-progress-size-${props.size ?? 'medium'}`]: true,
      [`sb-progress-status-${props.status ?? 'normal'}`]: true
    };
  });

  const currentWidth = computed(() => {
    const width = props.width;
    if (width === undefined) return '100%';
    return typeof width === 'number' ? width + 'px' : width;
  });

  const currentPercent = computed((): number => {
    const type = props.type;
    const percent = props.percent;
    if (type === 'line') {
      if (percent <= 0) return 0;
      if (percent > 0 && percent <= 1) return Math.round(percent * 100);
      if (percent >= 100) return 100;
      return Math.round(percent);
    } else if (type === 'circle') {
      if (percent <= 0) return 100;
      if (percent > 0 && percent <= 1) return Math.round((1 - percent) * 100);
      if (percent >= 100) return 0;
      return Math.round(100 - percent);
    }
    return 0;
  });

  const currentColor = computed((): string | LinearGradient => {
    const color = props.color ?? '';
    if (typeof color === 'string') return color;
    if (props.type === 'line') {
      let str = 'linear-gradient(to right, ';
      for (let i = 0; i < color.length; i++) {
        const item = color[i] as LinearGradientCell;
        str += `${item.color} ${item.offset}, `;
      }
      return str.slice(0, -2) + ')';
    } else if (props.type === 'circle') {
      return {
        id: 'svg-linear-gradient',
        x1: '0%',
        y1: '0%',
        x2: '0%',
        y2: '100%',
        colorStops:
          JSON.stringify(color) === '{}'
            ? [
                {
                  offset: '0%',
                  color: 'yellow'
                },
                {
                  offset: '100%',
                  color: 'orange'
                }
              ]
            : (color as LinearGradientCell[])
      };
    }
    return '';
  });

  const circleStyle = computed(() => {
    return {
      width: currentWidth.value,
      height: currentWidth.value
    };
  });

  const iconName = computed(() => iconMap[props.type as Type][props.status as Status]);

  const emits = defineEmits(['click']);
</script>

<script lang="ts">
  import sbIcon from '../sbIcon';
  export default {
    components: {
      sbIcon
    }
  };
</script>
