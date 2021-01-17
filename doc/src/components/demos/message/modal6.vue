<template>
  <div>
      <button class="h-btn" @click="open">Js调用Modal</button>
      <button class="h-btn" @click="opened=true">Vue调用Modal</button>
      <Modal v-model="opened">
        <div slot="header">Vue</div>
        <div >这是使用vue调用的弹出框</div>
        <div slot="footer"><button class="h-btn" @click="opened=false">取消</button></div>
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
        content: '这是使用Js调用的弹出框'
      });
    }
  }
};
</script>
