<template>
  <div>
      <button class="h-btn" @click="open">Js调用全屏Modal</button>
      <button class="h-btn" @click="opened=true">Vue调用全屏Modal</button>
      <Modal v-model="opened" fullScreen>
        <div slot="header">Vue</div>
        <div >这是使用vue调用的全屏弹出框</div>
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
    open() {
      this.$Modal({
        title: 'Js',
        fullScreen: true,
        content: '这是使用Js调用的全屏弹出框'
      });
    },
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
