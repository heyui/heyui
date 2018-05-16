<template>
  <div>
      <button class="h-btn" @click="open">js打开弹出框</button>
      <button class="h-btn" @click="opened = true">vue打开弹出框</button>
      <Modal v-model="opened" :middle="true">
        <div slot="header">标题</div>
        <div >这是一个居中的弹出框</div>
        <div slot="footer"><button class="h-btn" @click="close">取消</button><button class="h-btn h-btn-primary" @click="confirm">确定</button></div>
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
    },
    open() {
      this.$Modal({
        title: '标题',
        middle: true,
        content: '这是一个居中的弹出框'
      })
    }
  }
}
</script>