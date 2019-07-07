
<template>
  <!-- 效果预览 -->
  <div class="run-preview-vue">
    <component :is="componentName" v-if="componentName" :key="uuid"></component>
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
      id: 'runAppShow',
      js: '',
      css: '',
      html: '',
      componentName: null,
      component: null,
      uuid: null
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
      if (e == null) return '';
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
      let html = '<div id="runAppShow" class="doc">' + this.getSource(this.code, 'template') + '</div>';

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
          // var NewVue = Vue.extend(vueObj);
          // this.component = new NewVue().$mount();
          // this.$el.appendChild(this.component.$el);
          Vue.component('run-example', vueObj);
          this.componentName = 'run-example';
          this.uuid = Utils.uuid();

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
      // if (this.component) {
      // this.component.$destroy();
      // this.component = null;
      // }
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
}
</style>
