
<template>
  <!-- 效果预览 -->
  <div class="run-preview-vue">
    <component :is="componentName" v-if="componentName" :err="err" :key="uuid"></component>
  </div>
</template>

<script>

import Vue from 'vue';
import Less from 'less';
import vars from '../../../../themes/var.js';
import runError from './run-error';

export default {
  components: {
    runError
  },
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      componentName: null,
      uuid: null,
      err: null
    };
  },
  watch: {
    code: function () {
      this.destroyCode();
      this.renderCode();
    }
  },
  mounted() {
  },
  errorCaptured(err, vm, info) {
    this.err = err;
    this.componentName = 'run-error';
  },
  methods: {
    getSource: function (e, t) {
      if (e == null) return '';
      var n = new RegExp('<' + t + '[^>]*>');

      var r = e.match(n);
      return r
        ? ((r = r[0]),
        e.slice(e.indexOf(r) + r.length, e.lastIndexOf('</' + t + '>')))
        : '';
    },
    splitCode: function () {
      let js = this.getSource(this.code, 'script').replace(/export default/, 'return ');
      let html = '<div id="runAppShow">' + this.getSource(this.code, 'template') + '</div>';
      return { js, html };
    },
    genCss() {
      let css = this.getSource(this.code, 'style');

      if (this.css !== '') {
        Less.render(css, {
          globalVars: vars
        }).then(output => {
          css = output.css;
          let styleDom = document.getElementById('style_test');
          if (!styleDom) {
            styleDom = document.createElement('style');
            styleDom.rel = 'stylesheet/less';
            styleDom.type = 'text/css';
            styleDom.id = 'style_test';
            document.getElementsByTagName('head')[0].appendChild(styleDom);
          }
          styleDom.innerHTML = css;
        });
      }
    },
    renderCode: function () {
      this.err = null;
      this.destroyCode();
      Utils.saveLocal('RUN_CODE', this.code);
      let { html, js } = this.splitCode();
      var vueObj = {
        data: function () {
          return {};
        }
      };
      if (js) {
        try {
          // eslint-disable-next-line no-new-func
          vueObj = new Function(js)();
        } catch (error) {
          console.error(error);
          this.componentName = 'run-error';
          return;
        }
      }
      vueObj.template = '<div></div>';
      if (html) {
        vueObj.template = html;
      }
      Vue.component('run-example', vueObj);
      this.componentName = 'run-example';
      this.uuid = Utils.uuid();
      this.genCss();
    },
    destroyCode: function () {
      this.componentName = '';
    }
  }
};
</script>

<style lang="less">
.run-preview-vue {
  padding: 10px;
  border-left: 1px solid #eee;
  flex: 1;
  overflow: auto;
  border-right: 1px solid #EEE;
}
</style>
