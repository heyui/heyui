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
    <p>For the definition of the less variable, we do not write the common.less file, so we need to define a less file for reference.</p>
<codesEn type="less">@import (less) "~heyui/themes/var.less";
@primary-color: #FDA729;
@red-color: #D64244;
@green-color: #3cb357;
@yellow-color: #EAC12C;
@blue-color: #77A2DC;
@import (less) "~heyui/themes/common.less";

//Using this method, you can use the variables defined by var.less in your own less file.
@import (less) "index.less";
</codesEn>
    <p>Note: In this way of reference, variables in var.less files cannot be used in Vue files.</p>

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
