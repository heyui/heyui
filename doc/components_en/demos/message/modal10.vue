<template>
  <div>
    <button class="h-btn" @click="opened = true">Open popup</button>
    <Modal v-model="opened" :has-close-icon="false">
      <div>This is a custom popup</div>
      <div><Button @click="openModal">Open a new frame</Button></div>
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
    openModal() {
      this.$Modal({
        title: 'Custom pop-up',
        content: '<p>Custom pop-up test</p><p>Custom pop-up test</p>',
        hasMask: false
      });
    }
  }
};
</script>
