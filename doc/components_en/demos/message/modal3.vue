<template>
  <div>
    <button class="h-btn" @click="open">Js opens the popup</button>
    <button class="h-btn" @click="opened = true">Vue opens the popup</button>
    <Modal v-model="opened" :closeOnMask="false">
      <div slot="header">Vue</div>
      <div>This is a Vue popup</div>
      <div slot="footer"><button class="h-btn" @click="opened = false">cancel</button></div>
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
        content: 'This is a Js popup'
      });
    }
  }
};
</script>
