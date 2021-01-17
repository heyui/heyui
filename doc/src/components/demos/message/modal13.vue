<template>
  <div>
      <button class="h-btn" @click="show = true">打开全屏的弹出框</button>
      <Modal v-model="show" hasDivider hasCloseIcon fullScreen>
        <div slot="header">title</div>
        <div>
          测试内容
        </div>
      </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
