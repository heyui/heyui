<template>
  <div>
    <blockquote>Ordinary notice</blockquote>
    <p>
      <Button color='blue' @click="notice('info')">info</Button>
      <Button color='green' @click="notice('success')">success</Button>
      <Button color='yellow' @click="notice('warn')">warn</Button>
      <Button color='red' @click="notice('error')">error</Button>
      <Button color='primary' icon="h-icon-bell" @click="noticeIcon(false)">Custom Icon</Button>
    </p>
    <blockquote>Title notification</blockquote>
    <p>
      <Button color='blue' @click="noticeTitle('info')">info</Button>
      <Button color='green' @click="noticeTitle('success')">success</Button>
      <Button color='yellow' @click="noticeTitle('warn')">warn</Button>
      <Button color='red' @click="noticeTitle('error')">error</Button>
      <Button color='primary' icon="h-icon-bell" @click="noticeIcon(true)">Custom Icon</Button>
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    notice(type) {
      let text = {
        info: 'Message',
        success: 'success',
        warn: 'caveat',
        error: 'error'
      }[type];
      this.$Notice[type](`This is a ${text} notification`);
    },
    noticeIcon(hasTitle) {
      this.$Notice({
        icon: 'h-icon-bell',
        title: hasTitle ? 'Custom Icon' : null,
        content: `This is a custom Icon notification`
      });
    },
    noticeTitle(type) {
      let text = {
        info: 'Messageinfo',
        success: 'success',
        warn: 'warn',
        error: 'error'
      }[type];
      this.$Notice({
        type,
        title: text,
        content: `This is a ${text} notification`
      });
    }
  }
};
</script>
