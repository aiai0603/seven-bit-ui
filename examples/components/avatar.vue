<template>
  <div>
    <!-- <sb-link type="primary" size="small" round name="lst" @click="test"> 哈哈哈哈哈 </sb-link> -->
    <div class="props AvatarShape">
      <div class="title"> AvatarShape:</div>
      <div class="demoList">
        <div v-for="shapeItem in AvatarShape" :key="shapeItem" class="item"> {{ shapeItem }}: <sb-avatar :shape="shapeItem" /> </div>
      </div>
    </div>
    <div class="props">
      slot and trigger-type
      <div class="demoList">
        <div v-for="tirgger in tirggerTypeList" :key="tirgger" class="item">
          <sb-avatar :trigger-type="tirgger" @click="test">
            <template #trigger-icon>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="arco-icon arco-icon-camera" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
                <path d="m33 12-1.862-3.724A.5.5 0 0 0 30.691 8H17.309a.5.5 0 0 0-.447.276L15 12m16 14a7 7 0 1 1-14 0 7 7 0 0 1 14 0ZM7 40h34a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1Z"></path>
              </svg>
            </template>
          </sb-avatar>
        </div>
      </div>
    </div>
    <div class="props AvatarSize">
      <div class="title"> AvatarSize:</div>
      <div class="demoList">
        <div v-for="sizeItem in 40" :key="sizeItem" class="item"> {{ sizeItem * 2 }}:<sb-avatar :size="sizeItem * 2" /> </div>
      </div>
    </div>

    <div class="props">
      <div class="title"> image:</div>
      <div class="demoList">
        <div class="item"> <sb-avatar :image-url="imageUrl" @error="errorFun" @load="loadFun" /> </div>
        <div class="item"> <sb-avatar :image-url="imageUrl2" @error="errorFun" @load="loadFun" /> </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  const AvatarShape = ['circle', 'square'];
  const test = (msg: any) => {
    console.log('click', msg);
  };
  const errorFun = () => {
    console.log('error');
  };
  const loadFun = () => {
    console.log('loadFun');
  };
  const tirggerTypeList = ['mask', 'button'];
  const imageUrl = 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.we';
  const imageUrl2 = 'https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212060030103.png';
</script>
<style lang="less">
  .props {
    padding: 20px;
    margin: 10px;
    height: 20rem;
    overflow: scroll;
    border: 6px solid red;
    .demoList {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .item {
      }
    }

    .title {
      font-size: 30px;
    }
  }
</style>
