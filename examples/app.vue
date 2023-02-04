<template>
  <div class="test">
    <sb-modal
      v-model:visible="visible"
      :mask="true"
      title-align="center"
      :width="600"
      title="我是标题"
      content="hello world!"
      icon-type="none"
      :closable="true"
      :mask-closable="true"
      :hide-cancel="false"
      cancelText="cancel"
      okText="confirm"
      :footer="true"
      :fullscreen="false"
      :top="150"
      :simple="false"
      :ok-button-props="{ status: 'danger' }"
      :cancel-button-props="{ round: true }"
      mask-class="maskClass"
      modal-class="modalClass"
      :draggable="false"
      @ok="okClick"
      @cancel="cancelClick"
      @before-open="beforeOpen"
      @open="open"
      @before-close="beforeClose"
      @close="close"
    >
      <template #body> 哈哈哈哈哈 </template>
    </sb-modal>
    <sb-button @click="showModal">click</sb-button>
    <br /><br />
    <sb-button @click="show">click</sb-button>
    <br /><br />
    <hr />
    <sb-progress width="50%" :percent="percent" :stroke-width="10" :color="colorObj"></sb-progress>
    <br /><br />
    <sb-progress :width="300" :percent="percent" :stroke-width="6"></sb-progress>
    <br /><br />
    <sb-progress width="50%" :percent="percent" color="#ff0000" track-color="#000"></sb-progress>
    <br /><br />
    <sb-progress width="50%" :stroke-width="13" :percent="percent" :size="size" :status="status"></sb-progress>
    <select name="size" id="" v-model="size">
      <option value="small">small</option>
      <option value="medium">medium</option>
      <option value="large">large</option>
    </select>
    <br /><br />
    <sb-progress width="50%" :percent="percent" :show-text="false"></sb-progress>
    <br /><br />
    <sb-progress width="50%" :percent="percent" :status="status"></sb-progress>
    <select name="status" id="" v-model="status">
      <option value="normal">normal</option>
      <option value="success">success</option>
      <option value="warning">warning</option>
      <option value="danger">danger</option>
    </select>
    <br /><br />
    <sb-progress width="50%" :percent="percent" :round="false"></sb-progress>
    <br /><br />
    <sb-progress :width="150" :percent="percent" type="circle"></sb-progress>
    <br /><br />
    <sb-progress :width="150" :percent="percent" type="circle" color="#ff0000" track-color="#0000ff"></sb-progress>
    <br /><br />
    <sb-progress :width="150" :percent="percent" type="circle" :size="size" :status="status" :round="false"></sb-progress>
    <br /><br />
    <sb-progress :width="150" :percent="percent" type="circle" :color="colorObj"></sb-progress>
    <br /><br />
    <sb-button @click="percent += 0.1">+10</sb-button>
    <sb-button style="margin-left: 10px" @click="percent -= 0.1">-10</sb-button>
    <hr />
    <sb-spin /><br />
    <sb-spin :size="28" /><br />
    <sb-spin :size="36" /><br />
    <sb-spin :size="36" tip="This may take a while..." /><br />
    <sb-spin :size="36">
      <template #icon>
        <sb-icon name="sync" style="color: orange"></sb-icon>
      </template>
    </sb-spin>
    <br />
    <br />
    <sb-spin :size="36">
      <template #icon>
        <div class="element"></div>
      </template>
    </sb-spin>
    <br />
    <br />
    <sb-spin :size="50" :loading="loading" dot tip="This may take a while..." /><br />
    <br />
    <br />
    <sb-spin :size="30" :loading="loading" tip="This may take a while..." style="width: 50%">
      <div class="container">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aliquam. Velit, sequi magnam. Ipsa odit eum totam consectetur perferendis voluptatum sapiente, voluptas, vel esse dolorem ipsam natus adipisci modi aut!</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti rem hic velit nihil delectus nisi modi quam dolores magni voluptatibus, aliquid ad, sit sapiente nam praesentium eos. Tempore, impedit.</span>
      </div>
    </sb-spin>
    <br />
    <br />
    <sb-button @click="loading = !loading">click</sb-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
let visible = ref(false);
let percent = ref(0.1);
let size = ref('large');
let status = ref('warning');
let loading = ref(false);
const colorObj = [
  {
    offset: '0%',
    color: 'yellow'
  },
  {
    offset: '100%',
    color: 'orange'
  }
];
const showModal = function () {
  visible.value = true;
};

const okClick = (e: PointerEvent) => {
  console.log('Ok Btn CLick');
};

const cancelClick = (e: PointerEvent) => {
  console.log('Cancel Btn CLick');
};

const beforeOpen = () => console.log('before-open');

const open = () => console.log('open');

const beforeClose = () => console.log('before-close');

const close = () => console.log('close');
</script>

<script lang="ts">
import { sbModal } from 'seven-bit-ui';
export default {
  methods: {
    show() {
      sbModal.$error({
        title: 'My Title',
        content: 'This is a long long long content!',
        onOk: () => {
          console.log('okkkkk');
        }
      });
    }
  }
};
</script>

<style scoped>
.test::v-deep .maskClass {
  background-color: rgba(0, 0, 0, 0.6);
}

.element {
  width: 30px;
  height: 30px;
  background-color: red;
}

.container {
  box-sizing: border-box;
  padding: 20px 32px;
  border: 10px solid lightblue;
  border-radius: 5px;
}
</style>