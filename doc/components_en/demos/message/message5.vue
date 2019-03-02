<template>
  <p><button class='h-btn' @click="message()">Display loading</button></p>
</template>
<script>
export default {
  methods: {
    message() {
      let message = this.$Message.loading(`Loading`, 0);
      // this.$Message({
      //   type: 'loading',
      //   text:`Loading`,
      //   timeout: 0
      // })
      setTimeout(() => {
        message.close();
      }, 4000);
    }
  }
};
</script>
