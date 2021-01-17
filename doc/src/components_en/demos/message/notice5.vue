<template>
  <p><button class='h-btn' @click="config()">Set the global auto-off time to 1 second</button></p>
</template>
<script>
export default {
  methods: {
    config() {
      this.$Notice.config({
        timeout: 1000
      });
    }
  }
};
</script>
