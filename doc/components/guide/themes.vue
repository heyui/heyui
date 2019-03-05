<template>
  <div class="doc">
    <h2>更换主题</h2>
    <p>我们的样式使用的是less语言，我们定义了一些全局使用的变量</p>
    <p>您可以通过修改这些变量，达到变换样式的需求。</p>

    <h4>使用 <a href="https://github.com/heyui/hey-cli" target="_blank">hey-cli</a> 脚手架(推荐)</h4>
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
    <p>hey-cli 配置文件 hey.js ，<a href="https://github.com/heyui/heyui-admin/blob/master/hey.conf.js" target="_blank">示例</a></p>
    <codes type="javascript">globalVars: './src/css/var.less',</codes>
    <p>注意：使用这种引用方式，在vue单文件中也可以使用这些变量。</p>

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

    <h3>全局变量说明</h3>
    <p>我们的原始全局变量文件你可以在<a href="https://github.com/heyui/heyui/blob/master/themes/var.less" target="_blank">github</a>上查看。</p>
    <p>下面代码中的参数，你可以按照自己的设计修改，达成设定系统主题的目的。</p>
<codes type="less">
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
</codes>

    <h3>示例</h3>
    <p>我们提供的<a href="http://admin.heyui.top/" target="_blank">heyui-admin</a>就是一个完整的示例，我们修改了主色，并调整了一些参数，<a href="https://github.com/heyui/heyui-admin/blob/master/src/css/var.less">代码示例</a>。</p>
    <p>如果你还需要一些更细节化的调整，我们建议可以新建<code>overwrite.less</code>对已有的class进行覆盖修改。</p>
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
