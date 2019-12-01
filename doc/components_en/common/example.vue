<template>
  <div class="demo-box">
    <div class="demo" v-if="noDemo!==true">
      <component :is="com" :key="com"></component>
    </div>
    <div class="demo-operate"><span @click="copy">Copy</span><span @click="run">Run</span></div>
    <pre v-highlightjs="sourcecode" :class="{'expand':expand}"><code class="html"></code></pre>
    <div class="expand-button link" @click="expand=!expand">{{expand?'Collapse ':'Expand '}}Code</div>
  </div>
</template>
<script>
import components from '../demos/demos';
export default {
  props: ['demo', 'noDemo'],
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
      expand: false
    };
  },
  methods: {
    copy() {
      this.$Clipboard({ text: this.sourcecode });
    },
    run() {
      Utils.saveLocal('RUN_CODE', this.sourcecode);
      let route = this.$router.resolve({ name: 'en_sysrun' });
      window.open(route.href);
    }
  },
  mounted() {
    $.get(`/components_en/demos/${this.path}.vue`, resp => {
      this.sourcecode = resp;
    });
  },
  components
};
</script>
