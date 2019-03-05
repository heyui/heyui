<template>
  <div>
      <button class="h-btn" @click="open">Js打开弹出框</button>
      <button class="h-btn" @click="opened = true">Vue打开弹出框</button>
      <Modal v-model="opened" :hasDivider="true">
        <div slot="header">Vue</div>
        <div v-width="600" v-height="800">
          这是一个Vue的弹出框
          <Select dict="simple" v-width="100"></Select>
        </div>
        <div slot="footer"><button class="h-btn" @click="close">取消</button></div>
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
        content: '这是一个居中的弹出框'
      });
    }
  }
};
</script>
