<template>
  <p>
    <button class='h-btn b-color-blue' @click="notice('info')">消息</button>
    <button class='h-btn b-color-green' @click="notice('success')">成功</button>
    <button class='h-btn b-color-yellow' @click="notice('warn')">警告</button>
    <button class='h-btn b-color-red' @click="notice('error')">错误</button>
  </p>
</template>
<script>
export default {
  methods: {
    notice(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误' }[type];
      this.$Notice[type](`这是一个${text}的通知`);
    },
  }
}
</script>