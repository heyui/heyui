<template>
  <div>
    <Button color="primary" @click="start">开始</Button>
    <Button color="green" @click="success">成功</Button>
    <Button color="red" @click="fail">失败</Button>
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
