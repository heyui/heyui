<template>
  <div class="doc">
    <h2>更换主题</h2>
    <p>我们的样式使用的是less语言，我们定义了一些全局使用的变量，您可以通过修改这些变量引用达到变换样式的需求。</p>
    
    <h3>更换方法</h3>
    <p>更换的方法已经在快速上手的文档中有详细的说明，如果有任何疑问，请参考<a href="/guide/quickstart">快速上手</a>文档。</p>

    <h3>全局变量说明</h3>
    <p>我们的原始全局变量文件如下，<a href="">去查看</a></p>
<codes type="less">
@prefix : h-;
// Color
@primary-color : #3399ff;
@light-primary-color : lighten(@primary-color, 10%);
@dark-primary-color : darken(@primary-color, 10%);
@link-color : @primary-color;
@blue-color : #3B91FF; //info
@green-color : #13CE66; //success
@yellow-color : #FFAE00; //warn
@red-color : #E11617; //error
@white-color : #ffffff;
//Gray 1-4 more shallow
@dark-color: #333333;
@dark1-color: #555555;
@dark2-color: #666666;
@gray-color: #808080;
@gray1-color: #d3d3d3;
@gray2-color: #eeeeee;
@gray3-color: #f3f3f3;
@gray4-color: #f9f9f9;
//border
@border-color : @gray2-color;
@border: 1px solid @gray2-color;
@border-darken-color : @gray1-color;
//disabled
@disabled-color: @dark1-color;
//hover
@hover-background-color: lighten(@primary-color, 37%);
//Base
@background : #FFF;
@font-size : 14px;
@font-size-mini : 13px;
@line-height : 1.5;
@border-radius : 4px;
@btn-border-radius: 4px;
@line-height-computed : floor((@font-size * @line-height));
@font-family : "Helvetica Neue",
Helvetica,
"PingFang SC",
"Hiragino Sans GB",
"Microsoft YaHei",
"微软雅黑",
Arial,
sans-serif;
@shadow-color : rgba(0, 0, 0, .2);
@box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
@shadow-base: 0 1px 6px rgba(0,0,0,.2);
@disabled-cursor: not-allowed;
@icon-prefix: h-icon-;
//dropdown,tooltip触发的el添加相关class
@pop-ref-prefix: h-pop-trigger;
// Input
@input-height : 30px;
// Tag
@tag-font-size : 12px;
// Z-index
@zindex-loading : 8;
@zindex-affix : 10;
@zindex-backtop : 10;
@zindex-select : 1000;
@zindex-dropdown : 1000;
@zindex-modal : 1000;
@zindex-message : 1010;
@zindex-notify : 1010;
@zindex-tooltip : 1060;
@zindex-loading-fullscreen : 2000;
@zindex-loading-bar : 2000;
// Animation
@animation-time : .3s;
@transition-time : .2s;
// // Slider
</codes>

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
