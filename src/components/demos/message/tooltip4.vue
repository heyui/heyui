<template>
  <div>
    <span v-tooltip ref-el="demo" class="text-hover" theme="white">详情</span>
    &nbsp;
    <button class="h-btn h-btn-text" @click="change()">修改绑定的参数</button>
    <div tmpl='demo' v-height="100" v-width="200">
      <p>绑定的参数：{{a}}</p>
      <p>这是一个自定义的气泡提示</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        a: 1
      }
    },
    methods: {
      change(){
        this.a = this.a+1;
      }
    }
  }
</script>
