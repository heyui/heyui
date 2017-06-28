<template>
  <div>
      <button class="h-btn" @click="opened = true">打开弹出框</button>
      <Modal v-model="opened" :has-close-icon="false">
        <div >这是一个自定义的弹出框</div>
      </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false
    }
  },
  methods: {
    confirm() {
      this.$Message("点击确定了。");
      this.close();
    },
    close() {
      this.opened = false;
    }
  }
}
</script>