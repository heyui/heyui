<template>
  <div>
    <button class="h-btn" @click="open">Js calls full screen Modal</button>
    <button class="h-btn" @click="opened=true">Vue calls full screen Modal</button>
    <Modal v-model="opened" fullScreen>
      <div slot="header">Vue</div>
      <div>This is a full-screen popup called with vue</div>
      <div slot="footer"><button class="h-btn" @click="close">cancel</button><button class="h-btn h-btn-primary" @click="confirm">determine</button></div>
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
        content: 'This is a full-screen popup called with Js'
      });
    },
    confirm() {
      this.$Message('Click OK.');
      this.close();
    },
    close() {
      this.opened = false;
    }
  }
};
</script>
