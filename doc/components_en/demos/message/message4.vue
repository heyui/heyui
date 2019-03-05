<template>
  <p><button class='h-btn' @click="message()">Do not close automatically</button></p>
</template>
<script>
export default {
  methods: {
    message() {
      this.$Message(`This is a message that does not automatically close.`, 0);
      // this.$Message({
      //   text:`This is a message that does not automatically close.`,
      //   timeout: 0
      // })
    }
  }
};
</script>
