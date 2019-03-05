<template>
  <p>
    <button class='h-btn' @click="notice()">不自动关闭</button>
    <button class='h-btn' @click="notice2(1000)">1s</button>
    <button class='h-btn' @click="notice2(5000)">5s</button>
    <button class='h-btn' @click="notice2(15000)">15s</button>
  </p>
</template>
<script>
export default {
  methods: {
    notice() {
      this.$Notice(`这是一个不会自动关闭的通知`, 0);
    },
    notice2(timeout) {
      this.$Notice({
        title: `${timeout / 1000}s关闭`,
        content: `这是一个${timeout / 1000}s就关闭的消息`,
        timeout: timeout,
        buttons: [{
          name: '关闭',
          type: 'cancel'
        }]
      });
    }
  }
};
</script>
