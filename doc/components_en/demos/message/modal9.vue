<template>
  <div>
    <button class="h-btn" @click="open">Js opens the popup</button>
    <button class="h-btn" @click="opened = true">Vue opens the popup</button>
    <Modal v-model="opened" :hasDivider="true">
      <div slot="header">Vue</div>
      <div v-width="600" v-height="800">
        This is a Vue popup
        <Select dict="simple" v-width="100"></Select>
      </div>
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
        hasDivider: true,
        content: 'This is a centered popup'
      });
    }
  }
};
</script>
