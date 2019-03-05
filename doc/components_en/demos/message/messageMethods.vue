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
      this.$Message('This is a normal reminder');
    },
    notice() {
      this.$Notice({
        type: 'success',
        title: 'success',
        content: `This is a successful notice`
      });
    },
    modal() {
      this.$Modal({
        title: 'Js',
        content: 'This is a popup called with Js'
      });
    },
    confirm() {
      this.$Confirm('Confirm delete?', 'Custom title').then(() => {
        this.$Message.success('Confirm delete!');
      });
    }
  }
};
</script>
