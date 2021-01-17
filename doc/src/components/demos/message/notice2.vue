<template>
  <div>
    <blockquote>普通通知</blockquote>
    <p>
      <Button color='blue' @click="notice('info')">消息</Button>
      <Button color='green' @click="notice('success')">成功</Button>
      <Button color='yellow' @click="notice('warn')">警告</Button>
      <Button color='red' @click="notice('error')">错误</Button>
      <Button color='primary' icon="h-icon-bell" @click="noticeIcon(false)">自定义Icon</Button>
    </p>
    <blockquote>标题通知</blockquote>
  <p>
    <Button color='blue' @click="noticeTitle('info')">消息</Button>
    <Button color='green' @click="noticeTitle('success')">成功</Button>
    <Button color='yellow' @click="noticeTitle('warn')">警告</Button>
    <Button color='red' @click="noticeTitle('error')">错误</Button>
    <Button color='primary' icon="h-icon-bell" @click="noticeIcon(true)">自定义Icon</Button>
  </p>
  </div>
</template>
<script>
export default {
  methods: {
    notice(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误' }[type];
      this.$Notice[type](`这是一个${text}的通知`);
    },
    noticeIcon(hasTitle) {
      this.$Notice({
        icon: 'h-icon-bell',
        title: hasTitle ? '自定义Icon' : null,
        content: `这是一个自定义Icon的通知`
      });
    },
    noticeTitle(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误' }[type];
      this.$Notice({
        type,
        title: text,
        content: `这是一个${text}的通知`
      });
    }
  }
};
</script>
