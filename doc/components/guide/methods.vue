<template>
  <div class="doc">
    <h2>全局方法</h2>
    <h3>Directive插件</h3>
    <p><code>v-tooltip</code>: 提示</p>
    <p><code>v-wordcount</code>: 输入统计</p>
    <p><code>v-wordlimit</code>: 限制输入字数</p>
    <p><code>v-autosize</code>: 自适应textarea高度</p>

    <example demo="other/directive"></example>

    <h3>提醒：$Message,$Notice,$Modal,$Confirm</h3>
    <example demo="message/messageMethods"></example>
    <h3>复制文本：$Clipboard</h3>
    <example demo="other/clipboard1"></example>
    <h3>加载进度条：$LoadingBar</h3>
    <example demo="plugins/loadingbar1"></example>
    <h3>加载中：$Loading</h3>
    <example demo="dataview/loading2"></example>
    <h3>滚动至视图内：$ScrollIntoView</h3>
    <example demo="other/scrollintoview1"></example>

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
