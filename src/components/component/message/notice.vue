<template>
  <div class="doc">
    <h2>Notice 通知</h2>
    <p><button class='h-btn' @click="info()">提示</button></p>
    <p><button class='h-btn' @click="config()">设置全局的timeout时间为1秒</button></p>
    <p>
      <button class='h-btn' @click="message('info')">消息</button>
      <button class='h-btn' @click="message('success')">成功</button>
      <button class='h-btn' @click="message('warn')">警告</button>
      <button class='h-btn' @click="message('error')">错误</button>
    </p>
    <p>
      <button class='h-btn' @click="message2('info')">消息</button>
      <button class='h-btn' @click="message2('success')">成功</button>
      <button class='h-btn' @click="message2('warn')">警告</button>
      <button class='h-btn' @click="message2('error')">错误</button>
    </p>
    <h3>不自动关闭</h3>
    <p>
      <button class='h-btn' @click="message3('info')">不自动关闭</button>
    </p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    config() {
      this.$Notice.config({
        timeout: 0,
      });
    },
    info() {
      this.$Notice('这是一个普通的提醒');
    },
    message(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误' }[type];
      let param = {
        type,
        title: text,
        content: `这是一个${text}的消息`
      };
      this.$Notice(param);
    },
    message2(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误', loading: '加载中' }[type];
      this.$Notice[type](`这是一个${text}的消息`);
    },
    message3() {
      this.$Notice({
        title: '不会关闭',
        content: `这是一个不会自动关闭的消息`,
        timeout: 0
      });
    }
  }
}
</script>
