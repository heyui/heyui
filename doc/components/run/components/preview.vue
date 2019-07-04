
<template>
  <!-- 效果预览 -->
  <div class="run-preview-vue">
    <div ref="display"></div>
  </div>
</template>

<script>

import Vue from 'vue';
import Less from 'less';
import vars from '../../../../themes/var.js';

export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: '',
      js: '',
      css: '',
      html: '',
      component: null
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
  methods: {
    getSource: function (e, t) {
      var n = new RegExp('<' + t + '[^>]*>');

      var r = e.match(n);
      return r
        ? ((r = r[0]),
        e.slice(e.indexOf(r) + r.length, e.lastIndexOf('</' + t + '>')))
        : '';
    },
    splitCode: function (callback) {
      let js = this.getSource(this.code, 'script').replace(/export default/, 'return ');
      let css = this.getSource(this.code, 'style');
      let html = '<div id="appShow" class="doc">' + this.getSource(this.code, 'template') + '</div>';

      Less.render(css, {
        globalVars: vars
      }).then(output => {
        css = output.css;

        this.js = js;
        this.css = css;
        this.html = html;

        callback && callback();
      });
    },
    r(e, t) {
      return (
        Object.keys(t).forEach(function (n) {
          e = e
            .replace(new RegExp('<' + n + '(\\W+)', 'g'), '<' + t[n] + '$1')
            .replace(new RegExp('</' + n + '>', 'g'), '</' + t[n] + '>');
        }),
        e
      );
    },
    renderCode: function () {
      this.destroyCode();
      this.splitCode(() => {
        if (this.html !== '' && this.js !== '') {
          // eslint-disable-next-line no-new-func
          var vueObj = new Function(this.js)();
          vueObj.template = this.html;
          var NewVue = Vue.extend(vueObj);
          this.component = new NewVue().$mount();
          this.$refs.display.appendChild(this.component.$el);

          if (this.css !== '') {
            let styleDom = document.getElementById('style_test');
            if (!styleDom) {
              styleDom = document.createElement('style');
              styleDom.rel = 'stylesheet/less';
              styleDom.type = 'text/css';
              styleDom.id = 'style_test';
              document.getElementsByTagName('head')[0].appendChild(styleDom);
            }
            styleDom.innerHTML = this.css;
          }
        }
      });
    },
    destroyCode: function () {
      var e = document.getElementById(this.id);
      if (e) {
        e.parentNode.removeChild(e);
      }
      if (this.component) {
        this.$refs.display.removeChild(this.component.$el);
        this.component.$destroy();
        this.component = null;
      }
    }
  }
};
</script>

<style lang="less">
.run-preview-vue {
  padding: 10px;
  border-left: 1px solid #eee;
  flex: 1;
}
</style>
