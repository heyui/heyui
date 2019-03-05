<template>
  <div>
      <button class="h-btn" @click="open">Js打开弹出框</button>
      <button class="h-btn" @click="opened = true">Vue打开弹出框</button>
      <Modal v-model="opened" :closeOnMask="false">
        <div slot="header">Vue</div>
        <div >这是一个Vue的弹出框</div>
        <div slot="footer"><button class="h-btn" @click="opened = false">取消</button></div>
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
        closeOnMask: false,
        content: '这是一个Js的弹出框'
      });
    }
  }
};
</script>
