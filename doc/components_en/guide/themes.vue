<template>
  <div class="doc">
    <h2>Themes</h2>
    <p>We are use less language, we define some global variables.</p>
    <p>You can change the style requirements by modifying these variables.</p>

    <h4><a href="https://github.com/heyui/hey-cli" target="_blank">hey-cli</a> scaffold (recommended)</h4>
    <p>Refer to the var.less file of Heyui in the var.less file you defined, and redefine the replacement theme according to your needs. Then set the global reference file in the hey.js scaffolding configuration file.</p>
    <p>var.less, <a href="https://github.com/heyui/heyui-admin/blob/master/src/css/var.less" target="_blank">example link</a></p>
    <codesEn type="less">@import (less) "~/heyui/themes/var.less";
//Redefine theme
@primary-color: #FDA729;
@red-color: #D64244;
@green-color: #3cb357;
@yellow-color: #EAC12C;
@blue-color: #77A2DC;</codesEn>
    <p v-height="10"></p>
    <p>hey-cli configuration file hey.js, <a href="https://github.com/heyui/heyui-admin/blob/master/hey.conf.js" target="_blank">example link</a></p>
    <codesEn type="javascript">globalVars: './src/css/var.less',</codesEn>
    <p>Note: With this reference, these variables can also be used in the vue file.</p>

    <h3>vue-cli / webpack</h3>
    <h4>var.js</h4>
    <p>HeyUI defines the var. JS file, and you can define global variables through the globalVars parameter of lessLoader.</p>
    <p>You can refer to the heyui-admin project: <a href="https://github.com/heyui/heyui-admin">link</a></p>
    <p>1、Redefining parameters in projects</p>
<codes type="javascript">
const vars = require('heyui/themes/var.js');
  Object.assign(vars, {
    'primary-color': '#3788ee',
    'link-color': '#3788ee',
    'blue-color': '#2d7bf4',
    'green-color': '#0acf97',
    'yellow-color': '#f9bc0b',
    'red-color': '#f1556c',
  });
  module.exports = vars;
</codes>

    <p>2、as as an example of vue-cli3 to define loaderOptions.</p>
<codes type="javascript">
const globalVars = require('./src/css/var.js');
export default = {
  css: {
    loaderOptions: {
      less: {
        globalVars
      }
    }
  }
}
</codes>

    <h4>var.less</h4>
    <p>For the definition of the less variable, we do not write the common.less file, so we need to define a less file for reference.</p>
    <codesEn type="less">@import (less) "~heyui/themes/var.less";
//Redefine theme
@primary-color: #FDA729;
@red-color: #D64244;
@green-color: #3cb357;
@yellow-color: #EAC12C;
@blue-color: #77A2DC;
@import (less) "~heyui/themes/common.less";

//Using this method, you can use the variables defined by var.less in your own less file.
@import (less) "自己的less文件";
    </codesEn>
    <p>Note: In this way of reference, variables in var.less files cannot be used in vue files.</p>

    <h3>Global variable</h3>
    <p>Our original global variable file can be viewed on <a href="https://github.com/heyui/heyui/blob/master/themes/var.less" target="_blank">github</a>上查看。</p>
    <p>The parameters in the following code, you can modify according to your own design, achieve the purpose of setting the system theme.</p>
    <codesEn type="less">
// Color
@primary-color : #3399ff;
@link-color : @primary-color;
@blue-color : #3B91FF; //info
@green-color : #13CE66; //success
@yellow-color : #FFAE00; //warn
@red-color : #E11617; //error
@white-color : #ffffff;

//Gray 1-4 more shallow
@dark-color: #333333;
@gray-color: #808080;
@gray1-color: #d3d3d3;
@gray2-color: #eeeeee;
@gray3-color: #f3f3f3;
@gray4-color: #f9f9f9;

//hover
@hover-background-color: lighten(@primary-color, 37%);

//tag
@tag-background-color: lighten(@primary-color, 37%);
@tag-color: @primary-color;

//font-size
@font-size : 14px;
@font-size-mini : 13px;
@font-size-input : @font-size-mini;
@font-size-input-tag : 12px;
@font-size-badge : 12px;

@font-family : "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
@line-height : 1.5;
@line-height-computed : floor((@font-size * @line-height));

// Input
@input-height : 30px;

//border
@border-color: @gray2-color;
@border: 1px solid @gray2-color;

//disabled
@disabled-cursor: not-allowed;
@disabled-color: @gray-color;
@disabled-border-color: @gray1-color;
@disabled-background-color: @gray4-color;

//radius
@border-radius : 4px;
@btn-border-radius: 4px;

//box-shadow
@box-shadow-button: 0 1px 1px 0 @gray2-color;
@box-shadow-notify: 0 5px 10px rgba(0, 0, 0, 0.1);
@box-shadow-dropdown : 0 5px 10px rgba(0, 0, 0, 0.1);
@box-shadow-select-dropdown: 0 1px 6px rgba(0, 0, 0, .2);

//switch
@switch-hight: 26px;
@min-switch-height: 18px;
    </codesEn>

    <h3>Example</h3>
    <p><a href="http://admin.heyui.top/" target="_blank">heyui-admin</a> is a complete example, We modified the main color and adjusted some parameters. <a href="https://github.com/heyui/heyui-admin/blob/master/src/css/var.less">example code</a>。</p>
    <p>If you still need some more detailed adjustments, we suggest that you can newly <code>overwrite.less</code> overwrite existing classes.</p>
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
