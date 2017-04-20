<template>
  <div class="doc">
    <h2>Loading 加载中</h2>
    <div>
      <p>
        <Button @click="loading=!loading">切换状态</Button>
      </p>
      <div class="text-center">
        测试中
        <Loading text="测试"
                 :loading="loading"></Loading>
      </div>
    </div>
  
    <div>
      <p>
        <Button @click="pageload">全局加载</Button>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      loading1: false,
    }
  },
  methods: {
    pageload() {
      this.$Loading("加载中");
      setTimeout(() => {
        this.$Loading.close();
      }, 3000);
      // this.$Loading(false);
    }
  }
}
</script>
