<template>
  <div class="doc">
    <h2>Select 下拉选择</h2>
    <h3>普通下拉选择</h3>
    <p>对于对象数组的解析，系统默认使用<code>key</code>, <code>title</code>两个参数进行识别。可以通过全局配置修改两个参数名称，详情请参考<router-link to="/guide/config">全局配置</router-link></p>
    <example demo="dataplugins/select1"></example>
    
    <h3>没有默认“请选择”选项</h3>
    <example demo="dataplugins/select2"></example>

    <h3>多选</h3>
    <example demo="dataplugins/select3"></example>

    <h3>选择对象值</h3>
    <example demo="dataplugins/select4"></example>

    <h3>多选对象值</h3>
    <example demo="dataplugins/select5"></example>

    <h3>限制数量</h3>
    <p>最多选中2个</p>
    <example demo="dataplugins/select6"></example>

    <h3>自定义</h3>
    <example demo="dataplugins/select7"></example>

    <h3>使用全局Dict</h3>
    <p>Hey UI将提供数据字典的调用方式模型，并内置<code>dictMapping</code>方法做展示。详情请至<router-link to="/guide/config">全局配置</router-link>。</p>
    <example demo="dataplugins/select8"></example>

    <h3>文本类型的下拉</h3>
    <example demo="dataplugins/select9"></example>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {}
}
</script>
