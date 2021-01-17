<template>
  <p>
    <button class='h-btn' @click="message">Message</button>
    <button class='h-btn' @click="notice">Notice</button>
    <button class='h-btn' @click="modal">Modal</button>
    <button class='h-btn' @click="confirm">Confirm</button>
  </p>
</template>
<script>

export default {
  methods: {
    message() {
      this.$Message('这是一个普通的提醒');
    },
    notice() {
      this.$Notice({
        type: 'success',
        title: '成功',
        content: `这是一个成功的通知`
      });
    },
    modal() {
      this.$Modal({
        title: 'Js',
        content: '这是使用Js调用的弹出框'
      });
    },
    confirm() {
      this.$Confirm('确定删除？', '自定义title').then(() => {
        this.$Message.success('确定删除！');
      });
    }
  }
};
</script>
