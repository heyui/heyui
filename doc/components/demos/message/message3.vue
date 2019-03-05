<template>
  <p>
    <button class='h-btn h-btn-blue' @click="message('info')">消息</button>
    <button class='h-btn h-btn-green' @click="message('success')">成功</button>
    <button class='h-btn h-btn-yellow' @click="message('warn')">警告</button>
    <button class='h-btn h-btn-red' @click="message('error')">错误</button>
  </p>
</template>
<script>
export default {
  methods: {
    message(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误', loading: '加载中' }[type];
      this.$Message[type](`这是一个${text}的消息`);
      // this.$Message.info("这是一个消息的消息");
    }
  }
};
</script>
