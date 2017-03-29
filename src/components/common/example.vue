<template>
  <div class="demo-box">
    <div class="demo">
      <component :is="demo"></component>
    </div>
    <pre v-highlightjs="sourcecode" :class="{'expand':expand}"><code class="html"></code></pre>
    <div class="expand-button link" @click="expand=!expand">{{expand?'收起':'展开'}}代码</div>
  </div>
</template>
<script>
import grid1 from "../demos/grid1.vue";
import grid2 from "../demos/grid2.vue";
import grid3 from "../demos/grid3.vue";
import grid4 from "../demos/grid4.vue";
import grid5 from "../demos/grid5.vue";
import grid6 from "../demos/grid6.vue";
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
      $.get(`/src/components/demos/${this.demo}.vue`,(resp)=>{
        this.sourcecode=resp;
      })
    },
    components:{
      grid1,
      grid2,
      grid3,
      grid4,
      grid5,
      grid6
    }
}
</script>
