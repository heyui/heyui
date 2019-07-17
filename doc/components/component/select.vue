<template>
  <div class="doc">
    <h2>Select 下拉选择</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-select</code>。</p>

    <h3>普通下拉选择</h3>
    <p>对于对象数组的解析，系统默认使用<code>key</code>, <code>title</code>两个参数进行识别。可以通过全局配置修改两个参数名称，详情请参考<router-link to="/component/config">全局配置</router-link></p>
    <blockquote>注意：如果datas传入的是<code>{ 1:'a', 2:'b' }</code>这种数字key，选中的key值将全部转换为String, 建议使用<code>[{ key: 1, title: 'a' }]</code>对象数据模式。</blockquote>
    <example demo="dataplugins/select1"></example>

    <h3>自定义样式</h3>
    <p>通过自定义<code>className</code>参数，自己定义特殊的样式。</p>
    <example demo="dataplugins/select13"></example>

    <h3>特殊的选择项</h3>
    <example demo="dataplugins/select15"></example>

    <h3>分组</h3>
    <example demo="dataplugins/select14"></example>

    <h3>自定义内容</h3>
    <example demo="dataplugins/select7"></example>

    <h3>禁用</h3>
    <example demo="dataplugins/select10"></example>

    <h3>是否可以清空</h3>
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

    <h3>可筛选</h3>
    <example demo="dataplugins/select11"></example>

    <h3>可筛选多选</h3>
    <example demo="dataplugins/select12"></example>

    <h3>使用全局Dict</h3>
    <p>Hey UI将提供数据字典的调用方式模型，并内置<code>dictMapping</code>方法做展示。详情请至<router-link to="/component/config">全局配置</router-link>。</p>
    <example demo="dataplugins/select8"></example>

    <h3>文本类型的下拉</h3>
    <example demo="dataplugins/select9"></example>

    <h3>Select 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>multiple</td>
        <td>是否多选</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>type</td>
        <td>数据的格式</td>
        <td>String</td>
        <td>key, object</td>
        <td>key</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>选择的数据</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>调用全局定义的字典</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>limit</td>
        <td>限制只能选择多少个</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>deletable, 1.23.3+</td>
        <td>是否可删除</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>nullOption <span class="red-color">deprecated</span></td>
        <td>是否有“请选择”选项</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>nullOptionText</td>
        <td>“请选择”文本选项</td>
        <td>String</td>
        <td>-</td>
        <td>请选择</td>
      </tr>
      <tr>
        <td>filterable</td>
        <td>是否有搜索框</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>autosize</td>
        <td>是否根据文字自适应宽度，默认为100%宽度</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>optionRender</td>
        <td>下拉菜单的展示自定义</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>展示默认提示语</td>
        <td>String</td>
        <td>-</td>
        <td>请选择</td>
      </tr>
      <tr>
        <td>equalWidth</td>
        <td>下拉的宽度是否和输入框一致</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>className</td>
        <td>自定义className</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>emptyContent</td>
        <td>没有搜索到值的提示语</td>
        <td>String</td>
        <td>-</td>
        <td>未搜索到相关数据</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>自定义数据的key字段名</td>
        <td>String</td>
        <td>-</td>
        <td>全局config <code>dict.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>自定义数据的title字段名</td>
        <td>String</td>
        <td>-</td>
        <td>全局config <code>dict.titleName</code></td>
      </tr>
    </table>

    <h3>Select 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>返回数据</th>
      </tr>
      <tr>
        <td>change</td>
        <td>当数据产生变动的时候触发</td>
        <td>完整对象</td>
      </tr>
      <tr>
        <td>input</td>
        <td>当数据产生变动的时候触发</td>
        <td>当前绑定的v-model值</td>
      </tr>
    </table>

    <h3>Select slot</h3>
    <table class="table">
      <tr>
        <th>name</th>
        <th>说明</th>
        <th>传递值</th>
      </tr>
      <tr>
        <td>show</td>
        <td>自定义值的展示, 1.20.0+</td>
        <td>{ value }</td>
      </tr>
      <tr>
        <td>top</td>
        <td>自定义头部</td>
        <td></td>
      </tr>
      <tr>
        <td>bottom</td>
        <td>自定义尾部</td>
        <td></td>
      </tr>
      <tr>
        <td>item</td>
        <td>自定义列表</td>
        <td>{ item }</td>
      </tr>
    </table>
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
  components: {}
};
</script>
