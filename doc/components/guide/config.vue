<template>
  <div class="doc">
    <h2>全局配置</h2>
    <p>全局配置是属于<code>HeyUI</code>最大的一个特性。</p>
    <p>在系统开发过程中，设定完整的字典库，在业务开发中，只需要使用key就能完成调用。</p>
    <p>集中配置autocomplet，tree等复杂组件，具体页面中，我们只需要使用key就能完成调用。</p>

    <h3>全局字典</h3>
    <p>我们的整体设计是从数据驱动交互，而在数据的交互过程中，去除简单的input输入，最多的是字典的选择。</p>
    <h4>配置字典</h4>
    <p>系统中使用的字典，我们有两种方式可以定义字典。</p>
    <ul class="text-ul">
      <li><code>HeyUI.initDict({key: value})</code>: 初始化字典对象</li>
      <li><code>HeyUI.addDict(key, value)</code> 添加字典</li>
    </ul>
    <p>对应的，我们也提供方法获取字典值。</p>
    <ul class="text-ul">
      <li><code>HeyUI.getDict(key)</code>: 获取字典值</li>
    </ul>

    <h4>应用字典</h4>
    <p>在一些展示的数据中，我们需要通过<code>key/keys</code>获取对应的文本。</p>
    <ul class="text-ul">
      <li>通过 filter <code v-html="'{{value | dictMapping(key)}}'"></code>: 展示对应的文本</li>
      <li><code v-html="'HeyUI.dictMapping(value, key, connector)'"></code>: 获取对应的文本</li>
    </ul>

    <h3>组件</h3>
    <p>我们将字典标准化，控件可以通过字典的key驱动，而交互无非是在通过不同的数据量选择不同的交互类型。</p>
    <ul class="text-ul">
      <li>1~5个选择项单选：Radio, 或者Select</li>
      <li>1~5个选择项多选：Checkbox, 或者Select(multiple)</li>
      <li>5~15个选择项单选/多选：Select</li>
      <li>15~40个选择项单选/多选：Select(filterable), 或者AutoComplete</li>
      <li>40个以上或者需要远程模糊查询：AutoComplete</li>
    </ul>

    <h4>示例</h4>
    <example demo="basic/demo2"></example>

    <h3>全局配置组件</h3>
    <p>通过<code>HeyUI</code>可以对一些参数进行全局配置，具体配置项参考：<a href="https://github.com/heyui/heyui/blob/master/src/utils/config.js" target="_blank">config.js</a></p>
    <ul class="text-ul">
      <li><code>HeyUI.config(key, value)</code>: 设置配置，<code>key</code>可以是路径方式，例：<code>tree.default</code></li>
      <li><code>HeyUI.getOption(key)</code>: 获取配置。</li>
    </ul>

    <h4>配置dict结构</h4>
    <p>设定全局字典的<code>key</code>,<code>value</code>的命名。</p>
<codes type="javascript">HeyUI.config('dict.keyName', "key");
HeyUI.config('dict.titleName', "title");</codes>
    <h4>tree</h4>
    <p>设定<code>tree</code>的默认参数，以及定义系统中存在的不同tree的调用。</p>
    <p>系统化的配置请参考demo的<a target="_blank" href="https://github.com/heyui/heyui-admin/blob/master/src/js/config/tree-config.js">tree-config.js</a>。</p>
    <example demo="plugins/tree7"></example>

    <h4>autocomplete</h4>
    <p>设定<code>autocomplete</code>的默认参数，以及定义系统中存在的不同autocomplete的调用。</p>
    <p>系统化的配置请参考demo的<a target="_blank" href="https://github.com/heyui/heyui-admin/blob/master/src/js/config/autocomplete-config.js">autocomplete-config.js</a>。</p>
    <example demo="dataplugins/autocomplete13"></example>

    <h4>uploader, menu, modal, page, datepicker</h4>
    <p>这些组件，我们都提供了一些参数可以进行配置，具体请查看<code><a href="https://github.com/heyui/heyui/blob/master/src/utils/config.js" target="_blank">config.js</a></code>文件</p>
    <p>实际应用中，请参照我们的demo系统配置. 具体请查看<a href="https://github.com/heyui/heyui-admin/tree/master/src/js/config">demo配置</a>。</p>

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
