<template>
  <div>
    <blockquote>普通通知</blockquote>
    <p>
      <button class='h-btn h-btn-text-blue' @click="notice('info')">消息</button>
      <button class='h-btn h-btn-text-green' @click="notice('success')">成功</button>
      <button class='h-btn h-btn-text-yellow' @click="notice('warn')">警告</button>
      <button class='h-btn h-btn-text-red' @click="notice('error')">错误</button>
    </p>
    <blockquote>标题通知</blockquote>
  <p>
    <button class='h-btn h-btn-blue' @click="noticeTitle('info')">消息</button>
    <button class='h-btn h-btn-green' @click="noticeTitle('success')">成功</button>
    <button class='h-btn h-btn-yellow' @click="noticeTitle('warn')">警告</button>
    <button class='h-btn h-btn-red' @click="noticeTitle('error')">错误</button>
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
    noticeTitle(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误' }[type];
      this.$Notice({
        type,
        title: text,
        content: `这是一个${text}的通知`
      });
    },
  }
}
</script>