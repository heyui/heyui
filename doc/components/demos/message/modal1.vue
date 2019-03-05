<template>
  <div>
      <button class="h-btn" @click="opened = true">打开弹出框</button>
      <Modal v-model="opened">
        <div slot="header">标题</div>
        <div >这是一个普通的弹出框</div>
        <div slot="footer"><button class="h-btn" @click="close">取消</button><button class="h-btn h-btn-primary" @click="confirm">确定</button></div>
      </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false
    };
  },
  methods: {
    confirm() {
      this.$Message('点击确定了。');
      this.close();
    },
    close() {
      this.opened = false;
    }
  }
};
</script>
