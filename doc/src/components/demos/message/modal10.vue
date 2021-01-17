<template>
  <div>
      <button class="h-btn" @click="opened = true">打开弹出框</button>
      <Modal v-model="opened" :has-close-icon="false">
        <div >这是一个自定义的弹出框</div>
        <div><Button @click="openModal">打开新的弹框</Button></div>
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
        title: '自定义的弹出框',
        content: '<p>自定义的弹出框测试</p><p>自定义的弹出框测试</p>',
        hasMask: false
      });
    }
  }
};
</script>
