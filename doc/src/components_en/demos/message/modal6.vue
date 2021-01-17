<template>
  <div>
    <button class="h-btn" @click="open">Js calls Modal</button>
    <button class="h-btn" @click="opened=true">Vue calls Modal</button>
    <Modal v-model="opened">
      <div slot="header">Vue</div>
      <div>This is a popup called with vue</div>
      <div slot="footer"><button class="h-btn" @click="opened=false">cancel</button></div>
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
        content: 'This is a popup called with Js'
      });
    }
  }
};
</script>
