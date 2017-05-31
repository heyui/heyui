<template>
  <div class="doc">
    <h2>LoadingBar 加载进度条</h2>
    <h3>基础调用</h3>
    <p>
      <Button color="primary" @click="start">开始</Button>
      <Button color="green" @click="success">成功</Button>
      <Button color="red" @click="fail">失败</Button>
    </p>
    

    <h3>VueRouter 示例</h3>
    <codes src="/codes/loadingbar1.txt" type="js"></codes>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
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
}
</script>
