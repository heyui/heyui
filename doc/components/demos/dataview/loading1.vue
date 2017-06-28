<template>
  <div>
    <p v-height="40"><h-switch v-model="loading">切换状态</h-switch></p>
    <div>
      <div style="padding:100px 0;" v-bg-color:gray4  class="text-center">
        内容
      </div>
      <Loading text="测试" :loading="loading"></Loading>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
</script>