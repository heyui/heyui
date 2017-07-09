<template>
  <div class="doc">
    <h2>全局配置</h2>
    <p>全局配置是属于<code>HeyUI</code>最大的一个特性。</p>
    <p>在系统开发过程中，设定完整的字典库，以及集中autocomplete配置，tree配置，具体页面中，我们只使用调用。</p>
    
    <h3>全局字典</h3>
    <p>我们的整体设计是从数据驱动交互，而在数据的交互过程中，去除简单的input输入，最多的是字典的选择。</p>
    <h4>字典定义</h4>
    <p>系统中使用的字典，我们有两种方式可以定义字典。</p>
    <ul class="text-ul">
      <li><code>HeyUI.initDict({key: value})</code>: 初始化字典对象</li>
      <li><code>HeyUI.addDict(key, value)</code> 添加字典</li>
    </ul>
    
    <h4>字典应用-组件</h4>
    <p>我们将字典标准化，控件可以通过字典的key驱动，而交互无非是在通过不同的数据量选择不同的交互类型。</p>
    <ul class="text-ul">
      <li>1~5个选择项单选：Radio, 或者Select</li>
      <li>1~5个选择项多选：Checkbox, 或者Select(multiple)</li>
      <li>5~15个选择项单选/多选：Select</li>
      <li>15~40个选择项单选/多选：Select(filterable), 或者AutoComplete</li>
      <li>40个以上或者需要远程模糊查询：AutoComplete</li>
    </ul>

    <h4>字典应用-展示</h4>    
    <p>在一些展示的数据中，我们需要通过<code>key/keys</code>获取对应的文本。</p>
    <ul class="text-ul">
      <li><code v-html="'{{value | dictMapping(key)}}'"></code>: 展示对应的文本</li>
    </ul>
    
    <h4>字典应用-获取</h4>
    <p>有时，我们在代码中需要获取一些字典，我们也提供了方法：</p>
    <ul class="text-ul">
      <li><code>HeyUI.getDict(key)</code>: 获取字典值</li>
    </ul>

    <h4>示例</h4>
    <example demo="basic/demo2"></example>

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
