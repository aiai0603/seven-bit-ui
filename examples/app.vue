<template>
  <div>
    <sb-menu @handleItemClick="test2" defaultKey="1">
      <sb-menu-item value="1">
        <template #icon>
          <sb-icon name="down"></sb-icon>
        </template>
        测试1
      </sb-menu-item>
      <sb-menu-item value="2" disabled>测试2</sb-menu-item>
      <sb-menu-item value="3">测试3</sb-menu-item>
    </sb-menu>
  </div>
  <div style="width: 200px">
    <sb-button status="secondary" @click="testopen()"> 打开 </sb-button>
    <sb-button @click="testclose()"> 关闭 </sb-button>
    <sb-menu @handleItemClick="test2" defaultKey="1" mode="vertical" ref="me">
      <sb-menu-item value="1">
        <template #icon>
          <sb-icon name="close"></sb-icon>
        </template>
        测试1
      </sb-menu-item>
      <sb-menu-item value="2" disabled>测试2</sb-menu-item>
      <sb-sub-menu :defaultOpen="true" keys="3">
        <template #title>
          <sb-menu-item value="3-1">
            <template #icon>
              <sb-icon name="close"></sb-icon>
            </template>
            测试1
          </sb-menu-item>
        </template>
        <sb-menu-item value="3-2">测试5</sb-menu-item>
        <sb-sub-menu :defaultOpen="true" keys="3-3">
          <template #title>
            <sb-menu-item> 测试1 </sb-menu-item>
          </template>
          <sb-menu-item value="3-3-1">测试5</sb-menu-item>
          <sb-menu-item value="3-3-2">测试6</sb-menu-item>
        </sb-sub-menu>
      </sb-sub-menu>
      <sb-menu-item value="4">
        <template #icon>
          <sb-icon name="close"></sb-icon>
        </template>
        测试4
      </sb-menu-item>
    </sb-menu>
  </div>

  <div style="height: 100px">
    <sb-drop-down @handleItemClick="test2" ref="drop" trigger="click">
      <template #title>
        展开试试看
        <sb-icon name="down"></sb-icon>
      </template>
      <template #dropdown>
        <sb-drop-down-menu title="测试标题">
          <sb-drop-down-item value="1">按钮11111</sb-drop-down-item>
          <sb-drop-down-item value="2" disabled>按钮11111</sb-drop-down-item>
          <sb-drop-down-item value="3" divided>按钮11111</sb-drop-down-item>
        </sb-drop-down-menu>
      </template>
    </sb-drop-down>
  </div>
  <div>
    <sb-bread>
      <sb-bread-item>111</sb-bread-item>
      <sb-bread-item href="#">222</sb-bread-item>
      <sb-bread-item>333</sb-bread-item>
    </sb-bread>
  </div>
  <div>
    <sb-button size="small"> 小按钮 </sb-button>
    <sb-button> 默认按钮 </sb-button>
    <sb-button size="large"> 大按钮 </sb-button>
  </div>
  <div>
    <sb-button size="small" round> 小按钮 </sb-button>
    <sb-button round> 默认按钮 </sb-button>
    <sb-button size="large" round> 大按钮 </sb-button>
  </div>
  <div style="width: 300px">
    <sb-button size="small" long> 长按钮 </sb-button>
  </div>
  <div>
    <sb-button status="warning"> 警告 </sb-button>
    <sb-button status="danger"> 危险 </sb-button>
    <sb-button status="success"> 成功 </sb-button>
    <sb-button status="secondary"> 次要 </sb-button>
    <sb-button status="default"> 默认 </sb-button>
  </div>
  <div>
    <sb-button status="warning" type="outline"> 中空 </sb-button>
    <sb-button status="danger" type="outline"> 中空 </sb-button>
    <sb-button status="success" type="outline"> 中空 </sb-button>
    <sb-button status="secondary" type="outline"> 中空 </sb-button>
    <sb-button type="outline"> 中空 </sb-button>
  </div>
  <div>
    <sb-button status="warning" type="text"> 文字 </sb-button>
    <sb-button status="danger" type="text"> 文字 </sb-button>
    <sb-button status="success" type="text"> 文字 </sb-button>
    <sb-button status="secondary" type="text"> 文字 </sb-button>
    <sb-button type="text"> 文字 </sb-button>
  </div>
  <div>
    <sb-button type="outline" disabled> 中空禁用 </sb-button>
    <sb-button type="text" disabled> 文字禁用 </sb-button>
    <sb-button disabled> 基础禁用 </sb-button>
  </div>
  <div>
    <sb-button status="warning" type="outline" disabled> 中空禁用 </sb-button>
    <sb-button status="warning" type="text" disabled> 文字禁用 </sb-button>
    <sb-button status="warning" disabled> 基础禁用 </sb-button>
  </div>
  <div>
    <sb-button status="danger" type="outline" disabled> 中空禁用 </sb-button>
    <sb-button status="danger" type="text" disabled> 文字禁用 </sb-button>
    <sb-button status="danger" disabled> 基础禁用 </sb-button>
  </div>
  <div>
    <sb-button status="secondary" type="outline" disabled> 中空禁用 </sb-button>
    <sb-button status="secondary" type="text" disabled> 文字禁用 </sb-button>
    <sb-button status="secondary" disabled> 基础禁用 </sb-button>
  </div>
  <div>
    <sb-button status="success" type="outline" disabled> 中空禁用 </sb-button>
    <sb-button status="success" type="text" disabled> 文字禁用 </sb-button>
    <sb-button status="success" disabled> 基础禁用 </sb-button>
  </div>
  <div> <sb-button @click="test(1, $event)"> 基础禁用 </sb-button> 计数是:{{ count }} </div>

  <div>
    <sb-link type="default" title="这是一个打开我们git的链接" href="https://github.com/aiai0603" target="_blank"> 这是一个默认链接 </sb-link>
    <sb-link type="warning"> 这是一个警告链接 </sb-link>
    <sb-link type="success"> 这是一个成功链接 </sb-link>
    <sb-link type="error"> 这是一个错误链接 </sb-link>
    <sb-link type="secondary"> 这是一个次级链接 </sb-link>
  </div>
  <div>
    <sb-link type="default" disabled title="这是一个打开我们git的链接" href="https://github.com/aiai0603" target="_blank"> 这是一个默认链接 </sb-link>
    <sb-link type="warning" disabled> 这是一个警告链接 </sb-link>
    <sb-link type="success" disabled> 这是一个成功链接 </sb-link>
    <sb-link type="error" disabled> 这是一个错误链接 </sb-link>
    <sb-link type="secondary" disabled> 这是一个次级链接 </sb-link>
  </div>
  <div>
    <sb-link type="default" underline title="这是一个打开我们git的链接" href="https://github.com/aiai0603" target="_blank"> 这是一个下划线链接 </sb-link>
  </div>
  <div>
    <sb-icon name="exclaimination" class="test-icon" style="color: green" />
    <sb-icon name="info-circle-fill" class="test-icon" style="color: blue" />
    <sb-icon name="close-circle-fill" class="test-icon" />
    <sb-icon name="warning-circle-fill" class="test-icon" style="color: red" />
    <sb-icon name="close" class="test-icon" spin />
  </div>
  <sb-row align="center" justify="center" style="height: 200px" :gutter="20">
    <sb-col :span="12">
      <div class="demo"> A </div>
    </sb-col>
    <sb-col :span="12">
      <div class="demo"> B </div>
    </sb-col>
  </sb-row>

  <sb-row align="center" justify="center">
    <sb-col :span="16" :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl" :xxl="xxl">
      <div class="demo"> A </div>
    </sb-col>
  </sb-row>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  const xs = {
    span: 2
  };
  const sm = {
    span: 4
  };
  const md = {
    span: 6
  };
  const lg = {
    span: 8
  };
  const xl = {
    span: 12
  };
  const xxl = {
    span: 16
  };
  let count = ref(1);
  const test = (num: number, e: Event) => {
    console.log(e);
    count.value += num;
  };

  const test2 = (num: any) => {
    console.log(num);
  };

  const drop = ref(null);
  const me = ref(null);

  const testopen = () => {
    me.value && (me.value as any).handleOpenMenu();
  };

  const testclose = () => {
    me.value && (me.value as any).handleCloseMenu();
  };
</script>
<style>
  body {
    display: block;
    margin: 0px;
  }
  .demo {
    height: 100px;
    background-color: aquamarine;
  }
  .test-icon {
    font-size: 40px;
  }
  .sb-button {
    margin: 10px;
  }
  .sb-link {
    margin: 10px;
  }
</style>
