<template>
  <div class="doc">
    <h2>快速上手</h2>
    <p>我们建议使用webpack进行系统构建。</p>

    <h3>搭建示例</h3>
    <p>示例同时支持hey-cli，以及vue-cli。</p>
    <p><a target="_blank" href="https://codesandbox.io/s/zxl0yzv6np">https://codesandbox.io/s/zxl0yzv6np</a></p>
    
    <h3>使用 <a href="https://github.com/heyui/hey-cli" target="_blank">hey-cli</a> 脚手架(推荐)</h3>
    <p>hey-cli 是我们开源的脚手架，支持单纯的ES6项目开发，也支持Vue, React项目开发。集成了开发与打包等一系列功能。</p>
    <p>使用 hey-cli 可以设定全局的 <code>var.less</code> 文件，文件中定义的变量可以使用在任意<code>less</code>文件中，以及<code>vue</code>文件的less样式中。</p>
    <h4>全局less变量定义引用</h4>
    <p>在自己定义的 var.less 文件中引用 heyui 的 var.less 文件，并按照自己的需求重新定义更换主题，然后在hey.js脚手架配置文件中设定全局引用文件。</p>
    <p>var.less，<a href="https://github.com/heyui/heyui-admin/blob/master/src/css/var.less" target="_blank">示例</a></p>
    <codes type="less">@import (less) "~/heyui/themes/var.less";
//重新定义主题
@primary-color: #FDA729;
@red-color: #D64244;
@green-color: #3cb357;
@yellow-color: #EAC12C;
@blue-color: #77A2DC;</codes>

    <p v-height="10"></p>
    <p>hey-cli 配置文件 hey.js ，<a href="https://github.com/heyui/heyui-admin/blob/master/hey.js" target="_blank">示例</a></p>
    <codes type="javascript">globalVars: './src/css/var.less',</codes>
    <p v-height="10"></p>
    <h4>样式引用</h4>
    <p>对于样式引用，您可以在入口js文件中import，也可以直接在app.less中引用。 <a href="https://github.com/heyui/heyui-admin/blob/master/src/css/app.less" target="_blank">示例</a></p>
    <codes type="less">@import (less) "~heyui/themes/common.less";</codes>
    <h4>引入 HeyUI</h4>
    <p>一般，我们在webpack 入口页面引用。</p>
    <p>同时，HeyUI 也可以设置为全局引用，因为 HeyUI 拥有Message, Loadding等全局可以调用的方法。<a href="https://github.com/heyui/heyui-admin/blob/master/src/app.js" target="_blank">示例</a></p>
    <codes type="less">import Vue from 'vue';
import HeyUI from 'heyui';
Vue.use(HeyUI);
new Vue({
  el: '#app',
  render: h => h(App)
});</codes>

    <h3>使用 vue-cli / 自己搭建webpack</h3>
    <p>这里的引用有一些差别，主要在于样式的引用上。</p>
    <p>对于 less 变量的定义，我们并没有写入common.less文件，所以需要自己定义一个less文件做引用。</p>
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
    <p>注意：使用这种引用方式，在 Vue 文件中将无法使用 var.less 文件中的变量。</p>

    <h3>快速搭建</h3>
    <p>如果你需要搭建一个新的项目，我们建议你直接使用我们的heyui-admin进行基础搭建。</p>
    <p>在线地址: <a href="http://admin.heyui.top/" target="_blank">http://admin.heyui.top</a></p>
    <p>github地址: <a href="https://github.com/heyui/heyui-admin" target="_blank">https://github.com/heyui/heyui-admin</a></p>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components:{
  }
}
</script>
