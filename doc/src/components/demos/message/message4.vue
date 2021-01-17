<template>
  <p><button class='h-btn' @click="message()">不自动关闭</button></p>
</template>
<script>
export default {
  methods: {
    message() {
      this.$Message(`这是一个不会自动关闭的消息`, 0);
      // this.$Message({
      //   text:`这是一个不会自动关闭的消息`,
      //   timeout: 0
      // })
    }
  }
};
</script>
