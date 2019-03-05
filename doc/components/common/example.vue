<template>
  <div class="demo-box">
    <div class="demo" v-if="noDemo!==true">
      <div class="browser-mockup" v-if="iframe"><iframe style="display: block; border: 0px;" :src="iframePath" width="100%" frameborder="0" height="400"></iframe></div>
      <component v-else :is="com" :key="com"></component>
    </div>
    <pre v-highlightjs="sourcecode" :class="{'expand':expand}"><code class="html"></code></pre>
    <div class="expand-button link" @click="expand=!expand">{{expand?'收起':'展开'}}代码</div>
  </div>
</template>
<script>
import components from '../demos/demos';
export default {
  props: {
    demo: String,
    noDemo: Boolean,
    iframe: Boolean
  },
  data() {
    let com = this.demo;
    let index = com.indexOf('/');
    com = com.replace('/', '');
    com =
      com.substr(0, index) +
      com.charAt(index).toUpperCase() +
      com.substr(index + 1);

    return {
      com,
      path: this.demo,
      sourcecode: '',
      expand: false,
      iframePath: `/frame/example?path=${encodeURIComponent(this.demo)}`
    };
  },
  methods: {},
  mounted() {
    $.get(`/components/demos/${this.path}.vue`, resp => {
      this.sourcecode = resp;
    });
  },
  components
};
</script>
