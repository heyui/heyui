<template>
  <p>
    <button class='h-btn h-btn-blue' @click="message('info')">info</button>
    <button class='h-btn h-btn-green' @click="message('success')">success</button>
    <button class='h-btn h-btn-yellow' @click="message('warn')">warn</button>
    <button class='h-btn h-btn-red' @click="message('error')">error</button>
  </p>
</template>
<script>
export default {
  methods: {
    message(type) {
      let text = {
        info: 'info',
        success: 'success',
        warn: 'warn',
        error: 'error'
      }[type];
      this.$Message({
        type,
        text: `This is an ${text} message`
      });
    }
  }
};
</script>
