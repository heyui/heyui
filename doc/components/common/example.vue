<template>
  <div class="demo-box">
    <div class="demo" v-if="noDemo!==true">
      <component :is="demo"></component>
    </div>
    <pre v-highlightjs="sourcecode" :class="{'expand':expand}"><code class="html"></code></pre>
    <div class="expand-button link" @click="expand=!expand">{{expand?'收起':'展开'}}代码</div>
  </div>
</template>
<script>

import components from '../demos/demos';
export default {
  props:['demo','noDemo'],
  data() {
      return {
        sourcecode:'',
        expand:false
      }
    },
    methods: {},
    mounted() {
      $.get(`/components/demos/${this.demo}.vue`,(resp)=>{
        this.sourcecode=resp;
      })
    },
    components
}
</script>
