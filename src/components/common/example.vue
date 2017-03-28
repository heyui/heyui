<template>
  <div class="demo-box">
    <!-- <div class="desc"><slot name="desc"></slot></div> -->
    <div class="demo">
      <component :is="demo"></component>
    </div>
    <pre v-highlightjs="sourcecode" :class="{'expand':expand}"><code class="html"></code></pre>
    <div class="expand-button link" @click="expand=!expand">{{expand?'收起':'展开'}}代码</div>
  </div>
</template>
<script>
import grid from "../demos/grid1.vue";
export default {
  props:['demo'],
  data() {
      return {
        sourcecode:'',
        expand:false
      }
    },
    methods: {},
    mounted() {
      $.get('/src/components/demos/grid1.vue',(resp)=>{
        this.sourcecode=resp;
      })
    },
    components:{
      grid
    }
}
</script>
