<template>
  <div class="doc">
    <h2>更换主题</h2>
    <p>我们的样式使用的是less语言，我们定义了一些全局使用的变量，您可以通过修改这些变量引用达到变换样式的需求。</p>
    
    <h3>更换方法</h3>
    <p>更换的方法已经在快速上手的文档中有详细的说明，如果有任何疑问，请参考<a href="/guide/quickstart">快速上手</a>文档。</p>

    <h3>全局变量说明</h3>
    <p>我们的原始全局变量文件你可以在<a href="https://github.com/heyui/heyui/blob/master/themes/var.less" target="_blank">github</a>上查看，以下将列出你可以覆盖修改参数，完成系统主题修改的目的。</p>
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
//暗黑的字体颜色
@dark-color: #333333;

//灰色的字体
@gray-color: #808080;
//浅灰色的字体，或者深色的线条
@gray1-color: #d3d3d3;
//浅灰色的字体，或者深色的线条
@gray2-color: #eeeeee;
//一般线条的颜色
@gray3-color: #f3f3f3;
//一般灰色的背景
@gray4-color: #f9f9f9;

//Base
@font-size : 14px;
@font-size-mini : 13px;
@line-height : 1.5;
@line-height-computed : floor((@font-size * @line-height));

@font-family : "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

//border
@border-color: @gray2-color;
@border: 1px solid @gray2-color;

//disabled
@disabled-cursor: not-allowed;
@disabled-color: @gray-color;
@disabled-border-color: @gray1-color;
@disabled-background-color: @gray4-color;

//hover
@hover-background-color: lighten(@primary-color, 37%);

//radiu
@border-radius : 4px;
@btn-border-radius: 4px;

//box-shadow
@box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
@box-shadow-notify: 0 5px 10px rgba(0, 0, 0, 0.1);
@box-shadow-dropdown : 0 5px 10px rgba(0, 0, 0, 0.1);
@box-shadow-tooltip : 1px 1px 0px rgba(0, 0, 0, .2);
@box-shadow-select-dropdown: 0 1px 6px rgba(0, 0, 0, .2);

//dropdown,tooltip触发的el添加相关class
@pop-ref-prefix: h-pop-trigger;
// Input
@input-height : 30px;
// Tag
@tag-font-size : 12px;
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
