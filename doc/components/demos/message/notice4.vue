<template>
  <p><button class='h-btn' @click="notice()">不自动关闭</button><button class='h-btn' @click="notice2()">不自动关闭带标题</button></p>
</template>
<script>
export default {
  methods: {
    notice() {
      this.$Notice(`这是一个不会自动关闭的通知`, 0);
    },
    notice2() {
      this.$Notice({
        title: '不会关闭',
        content: `这是一个不会自动关闭的消息`,
        timeout: 0
      });
    }
  }
}
</script>