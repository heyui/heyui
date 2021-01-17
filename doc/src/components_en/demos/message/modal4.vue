<template>
  <div>
    <button class="h-btn" @click="open">Js opens the popup</button>
    <button class="h-btn" @click="opened = true">Vue opens the popup</button>
    <Modal v-model="opened" :middle="true">
      <div slot="header">Vue</div>
      <div>This is a centered popup</div>
      <div slot="footer"><button class="h-btn" @click="close">cancel</button></div>
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
    close() {
      this.opened = false;
    },
    open() {
      this.$Modal({
        title: 'Js',
        middle: true,
        content: 'This is a centered popup'
      });
    }
  }
};
</script>
