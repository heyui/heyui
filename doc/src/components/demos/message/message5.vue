<template>
  <p><button class='h-btn' @click="message()">显示加载中</button></p>
</template>
<script>
export default {
  methods: {
    message() {
      let message = this.$Message.loading(`正在加载中`, 0);
      // this.$Message({
      //   type: 'loading',
      //   text:`正在加载中`,
      //   timeout: 0
      // })
      setTimeout(() => {
        message.close();
      }, 4000);
    }
  }
};
</script>
