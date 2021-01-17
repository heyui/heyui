<template>
  <div>
    <Button color="primary" @click="start">start</Button>
    <Button color="green" @click="success">success</Button>
    <Button color="red" @click="fail">failure</Button>
  </div>
</template>
<script>
export default {
  methods: {
    start() {
      this.$LoadingBar.start();
    },
    success() {
      this.$LoadingBar.success();
    },
    fail() {
      this.$LoadingBar.fail();
    }
  }
};
</script>
