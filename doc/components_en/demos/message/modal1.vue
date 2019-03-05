<template>
  <div>
    <button class="h-btn" @click="opened = true">Open popup</button>
    <Modal v-model="opened">
      <div slot="header">title</div>
      <div>This is a normal popup</div>
      <div slot="footer"><button class="h-btn" @click="close">cancel</button><button class="h-btn h-btn-primary" @click="confirm">confirm</button></div>
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
      this.$Message('Click OK.');
      this.close();
    },
    close() {
      this.opened = false;
    }
  }
};
</script>
