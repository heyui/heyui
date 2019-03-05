<template>
  <p>
    <button class='h-btn' @click="notice()">Do not close automatically</button>
    <button class='h-btn' @click="notice2(1000)">1s</button>
    <button class='h-btn' @click="notice2(5000)">5s</button>
    <button class='h-btn' @click="notice2(15000)">15s</button>
  </p>
</template>
<script>
export default {
  methods: {
    notice() {
      this.$Notice(`This is a notification that won't close automatically`, 0);
    },
    notice2(timeout) {
      this.$Notice({
        title: `${timeout / 1000}s off`,
        content: `This is an ${timeout / 1000}s just closed message`,
        timeout: timeout,
        buttons: [
          {
            name: 'shut down',
            type: 'cancel'
          }
        ]
      });
    }
  }
};
</script>
