<template>
  <p><button class='h-btn' @click="config()">设置全局自动关闭时间为1秒</button></p>
</template>
<script>
export default {
  methods: {
    config() {
      this.$Notice.config({
        timeout: 1000
      });
    }
  }
};
</script>
