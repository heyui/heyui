<template>
  <div>
      <button class="h-btn" @click="open">打开全屏的弹出框</button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      let that = this;
      this.$Modal({
        fullScreen: true,
        title:'全屏',
        content: '测试',
        hasDivider: true,
        hasCloseIcon: true,
        buttons: []
      });
    }
  }
}
</script>