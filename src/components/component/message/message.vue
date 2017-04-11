<template>
  <div class="doc">
    <h2>Message 提示</h2>
    <div><button class='h-btn' @click="info()">提示</button></div>
    <br>
    <div>
      <button class='h-btn' @click="message('info')">消息</button>
      <button class='h-btn' @click="message('success')">成功</button>
      <button class='h-btn' @click="message('warn')">警告</button>
      <button class='h-btn' @click="message('error')">错误</button>
    </div>
    <br>
    <div>
      <button class='h-btn' @click="message2('info')">消息</button>
      <button class='h-btn' @click="message2('success')">成功</button>
      <button class='h-btn' @click="message2('warn')">警告</button>
      <button class='h-btn' @click="message2('error')">错误</button>
    </div>
    <h3>不自动关闭</h3>
    <div>
      <button class='h-btn' @click="message3('info')">不自动关闭</button>
    </div>
    <h3>loading</h3>
    <div>
      <button class='h-btn' @click="message5('loading')">显示加载中</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    info() {
      this.$Message('这是一个普通的提醒');
    },
    message(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误' }[type];
      let param = {
        type,
        text: `这是一个${text}的消息`
      };
      this.$Message(param);
    },
    message2(type) {
      let text = { info: '消息', success: '成功', warn: '警告', error: '错误', loading: '加载中' }[type];
      this.$Message[type](`这是一个${text}的消息`);
    },
    message3() {
      this.$Message(`这是一个不会自动关闭的消息`, 0);
    },
    message5() {
      this.$Message.loading(`正在加载中`);
    }
  }
}
</script>
