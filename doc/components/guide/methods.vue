<template>
  <div class="doc">
    <h2>全局方法</h2>

    <h3>Directive插件</h3>
    <ul class="text-ul">
      <li><code>v-tooltip</code>: 提示</li>
      <li><code>v-wordcount</code>: 输入统计</li>
      <li><code>v-wordlimit</code>: 限制输入字数</li>
      <li><code>v-autosize</code>: 自适应textarea高度</li>
    </ul>

    <example demo="other/directive"></example>

    <h3>提醒：$Message,$Notice,$Modal,$Confirm</h3>
    <example demo="message/messageMethods"></example>
    <h3>复制文本：$Clipboard</h3>
    <example demo="other/clipboard1"></example>
    <h3>图片预览：$ImagePreview</h3>
    <example demo="imagepreview/imagepreview1"></example>
    <h3>加载进度条：$LoadingBar</h3>
    <example demo="plugins/loadingbar1"></example>
    <h3>加载中：$Loading</h3>
    <example demo="dataview/loading2"></example>
    <h3>滚动至视图内：$ScrollIntoView</h3>
    <example demo="other/scrollintoview1"></example>

    <h3>全局配置</h3>
    <p>通过<code>HeyUI</code>可以对一些参数进行全局配置，具体配置项参考：<a href="https://github.com/heyui/heyui/blob/master/src/utils/config.js" target="_blank">config.js</a></p>
    <ul class="text-ul">
      <li><code>HeyUI.config(key, value)</code>: 设置配置，<code>key</code>可以是路径方式，例：<code>tree.default</code></li>
      <li><code>HeyUI.getOption(key)</code>: 获取配置。</li>
    </ul>

    <h4>配置字典</h4>
    <p>系统中使用的字典，我们有两种方式可以定义字典。</p>
    <ul class="text-ul">
      <li><code>HeyUI.initDict({key: value})</code>: 初始化字典对象</li>
      <li><code>HeyUI.addDict(key, value)</code> 添加字典</li>
    </ul>

    <h4>应用字典</h4>
    <p>在一些展示的数据中，我们需要通过<code>key/keys</code>获取对应的文本。</p>
    <ul class="text-ul">
      <li>通过 filter <code v-html="'{{value | dictMapping(key)}}'"></code>: 展示对应的文本</li>
      <li><code v-html="'HeyUI.dictMapping(value, key, connector)'"></code>: 获取对应的文本</li>
    </ul>

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
