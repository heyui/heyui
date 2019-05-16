<template>
  <div class="doc">
    <h2>Quick Start</h2>
    <p>We recommend using webpack for system building.</p>

    <h3>An Example</h3>
    <p>The sample supports both<code>hey-cli</code>as well<code>vue-cli</code>。</p>
    <p><a target="_blank" href="https://codesandbox.io/s/github/vvpvvp/hey-demos/tree/master/">https://codesandbox.io/s/github/vvpvvp/hey-demos/tree/master/</a></p>
    <p>If you can't access this example, you can try it open directly at <a target="_blank" href="https://github.com/vvpvvp/hey-demos">https://github.com/vvpvvp/hey-demos</a>进行尝试。</p>

    <h3>Reference JS and CSS</h3>
    <p class="tip">If you are a backend developer, or have just started on the front end, we recommend using the simplest js, css direct reference.</p>
    <p>The easiest way to try HeyUI is to use <a href="https://codepen.io/vvpvvp/pen/WJYKyq" target="_blank">Hello World on CodePen</a>, You can open it in your browser's new tab and follow the examples to learn some basic usage.</p>
    <p>Or you can create a <code>.html</code> file, and then use HeyUI by:</p>
    <codesEn type="html" src="/codes/jscss.txt"></codesEn>
    <p>Here, we provide an html example: <a target="_blank" href="/simple.html">simple.html</a>, you can view the source code by "viewing the source of the page". </p>

    <h3>Use <a href="https://github.com/heyui/hey-cli" target="_blank">hey-cli</a> scaffold (recommended)</h3>
    <p class="tip">Suppose you already know intermediate knowledge about HTML, CSS, and JavaScript, and you already know enough about NPM, ES6, and WEBPACK.</p>
    <p>hey-cli is our open source scaffolding, supports simple ES6 project development, and supports Vue, React project development. Integrated development and packaging and other functions.</p>
    <p>it can be set using the global <code>var.less</code> files, variables defined in the file can be used in any of the less file, and also the vue's style less label.</p>
    <h4>Global less variable definition</h4>
    <p>Refer to the var.less file of Heyui in the var.less file you defined, and redefine the replacement theme according to your needs. Then set the global reference file in the hey.js scaffolding configuration file.</p>
    <p>var.less，<a href="https://github.com/heyui/heyui-admin/blob/master/src/css/var.less" target="_blank">example link</a></p>
    <codesEn type="less">@import (less) "~/heyui/themes/var.less";
@primary-color: #FDA729;
@red-color: #D64244;
@green-color: #3cb357;
@yellow-color: #EAC12C;
@blue-color: #77A2DC;</codesEn>

    <p v-height="10"></p>
    <p>hey-cli configuration file hey.js ，<a href="https://github.com/heyui/heyui-admin/blob/master/hey.conf.js" target="_blank">example link</a></p>
    <codesEn type="javascript">globalVars: './src/css/var.less',</codesEn>
    <p v-height="10"></p>
    <h4>Style reference</h4>
    <p>For style references, you can import in the entry js file, or directly in app.less. <a href="https://github.com/heyui/heyui-admin/blob/master/src/css/app.less" target="_blank">example link</a></p>
    <codesEn type="less">@import (less) "~heyui/themes/common.less";</codesEn>

    <h4>Import HeyUI</h4>
    <p>In general, we import HeyUI to the webpack portal page.</p>
    <p>At the same time, HeyUI can also be set as a global reference, because HeyUI has methods that Message, Loadding, etc. can call globally.<a href="https://github.com/heyui/heyui-admin/blob/master/src/main.js" target="_blank">example link</a></p>
    <codesEn type="less">import Vue from 'vue';
import HeyUI from 'heyui';
Vue.use(HeyUI);
new Vue({
  el: '#app',
  render: h => h(App)
});</codesEn>

    <h3>Use vue-cli / webpack</h3>
    <p>There are some differences in the references here, mainly in style references.</p>
    <h4>Var.js global variable</h4>
    <p>For the definition of the less variable, we provide a convenient reference to the var.js file.</p>
<codes type="javascript">
const vars = require('heyui/themes/var.js');
Object.assign(vars, {
  'primary-color': '#3788ee',
  'link-color': '#3788ee',
  'blue-color': '#2d7bf4',
  'green-color': '#0acf97',
  'yellow-color': '#f9bc0b',
  'red-color': '#f1556c'
});
module.exports = vars;
</codes>
<p>Taking vue-cli as an example, vue.config.js is configured as follows:</p>
<codes type="javascript">
const globalVars = require('./src/css/var.js');
module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars
      }
    }
  },
}
</codes>
<h4>No global variables</h4>
<codes type="less">@import (less) "~heyui/themes/var.less";
//重新定义主题
@primary-color: #FDA729;
@red-color: #D64244;
@green-color: #3cb357;
@yellow-color: #EAC12C;
@blue-color: #77A2DC;
@import (less) "~heyui/themes/common.less";

//使用这种方式引用，可以在自己的less文件中使用var.less定义的变量。
@import (less) "自己的less文件";
</codes>

    <h3>Load on demand</h3>
    <p>With the plug-in <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a>, you can load components on demand and reduce file size.</p>
    <h4>vue-cli / webpack</h4>
<codes>
npm install babel-plugin-import --save-dev
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "heyui",
    "libraryDirectory": "lib/components"
  }]]
}
</codes>
    <h4>hey-cli</h4>
    <p>Need to use hey-cli@2.3.0+</p>
<codes>
pluginImport: {
  libraryName: 'heyui',
  libraryDirectory: 'lib/components'
},
</codes>
    <p>Import components:</p>
<codes type="javascript">
import Vue from 'vue';
import App from './app.vue';
import { install, Prototypes, Button, DropdownMenu } from 'heyui';

require('../css/module.less');

Vue.use(install, { components: { Button, DropdownMenu }, prototypes: Prototypes });

const app = new Vue({
  el: '#app',
  render: h => h(App)
});
export default app;
</codes>
<p>Components refer to the following file: <a href="https://github.com/heyui/heyui/blob/master/src/index.js" target="_blank">index.js</a>，Prototypes reference <a href="https://github.com/heyui/heyui/blob/master/src/components/prototypes/index.js" target="_blank">prototypes/index.js</a></p>

<h4>Load styles on demand</h4>
<p>System provides the basic style, if you need to load the component, add the style of the component you need to load.</p>
<p>For the configuration of the global style definition, please refer to the above description.</p>
<codes>
// 若无全局变量
@import (less) "~heyui/themes/var.less";

@import (less) "~heyui/themes/common.base.less";
@import (less) "~heyui/themes/components/dropdown-menu.less";
</codes>
<p>For the style referenced by common.base.less, please refer to: <a href="https://github.com/heyui/heyui/blob/master/themes/components/index.base.less" target="_blank">index.base.js</a></p>
<p>If you need to reference the loaded component style, please refer to the folder: <a href="https://github.com/heyui/heyui/tree/master/themes/components" target="_blank">themes/components</a></p>

    <h3>Quickly Build</h3>
    <p>If you need to build a new project, we suggest that you use our heyui-admin directly to build the foundation.</p>
    <p>Link: <a href="http://admin.heyui.top/" target="_blank">http://admin.heyui.top</a></p>
    <p>github: <a href="https://github.com/heyui/heyui-admin" target="_blank">https://github.com/heyui/heyui-admin</a></p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
  }
};
</script>
