<template>
  <div>
    <span v-tooltip ref-el="demo" class="text-hover" theme="white">详情</span>

    <div tmpl="demo" v-width="220">
      <div v-padding="20">
        <img :width="80" :height="80" style="border-radius:80px;float:left" src="http://www.ch-un.com/images/head.jpg">
        <div style="height:80px;margin-left:90px;line-height:80px;">用户名: <a>LAN</a></div>
      </div>
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
