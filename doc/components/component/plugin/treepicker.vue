<template>
  <div class="doc">
    <h2>TreePicker 树下拉选择</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-treepicker</code>。</p>

    <h3>基本调用</h3>
    <example demo="plugins/treepicker1"></example>

    <h3>多选</h3>
    <example demo="plugins/treepicker2"></example>

    <h3>自定义样式</h3>
    <example demo="plugins/treepicker4"></example>

    <h3>全局</h3>
    <blockquote>使用的是treeconfig中的配置项</blockquote>
    <example demo="plugins/treepicker3"></example>

    <h3>TreePicker 参数</h3>
    <blockquote>multiple, option, config, filterable, disabled等配置参照Tree的配置</blockquote>
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
        <td>model的类型，注意：key模式不支持初始化传入数据，因为对应的title展示不出来</td>
        <td>key, object</td>
        <td>-</td>
        <td>key</td>
      </tr>
      <tr>
        <td>chooseMode</td>
        <td>choose的类型，具体请参考tree的文档</td>
        <td>all, some</td>
        <td>-</td>
        <td>all</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>展示默认提示语</td>
        <td>String</td>
        <td>-</td>
        <td>请选择</td>
      </tr>
      <tr>
        <td>toggleOnSelect</td>
        <td>是否在选中文本的时候折叠内容</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>className</td>
        <td>自定义className</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
    </table>

    <h3>TreePicker 方法</h3>
    <table class="table">
      <tr>
        <th>方法名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>updateShow</td>
        <td>由于tree大多数是异步加载数据，所以可以用于更新展示的文本</td>
      </tr>
      <tr>
        <td>getChoose</td>
        <td>获取选中值(多选)</td>
      </tr>
      <tr>
        <td>getSelect</td>
        <td>获取选中值(单选)</td>
      </tr>
      <tr>
        <td>getFullChoose</td>
        <td>获取所有选中的值(多选)</td>
      </tr>
      <tr>
        <td>chooseAll</td>
        <td>选中所有值(多选)</td>
        <td></td>
      </tr>
      <tr>
        <td>refresh</td>
        <td>刷新数据</td>
        <td></td>
      </tr>
    </table>

    <h3>TreePicker 事件</h3>
    <table class="table">
      <tr>
        <th>事件名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>input</td>
        <td>当v-model数据产生变化的时候</td>
      </tr>
      <tr>
        <td>select</td>
        <td>当单选的时候</td>
      </tr>
      <tr>
        <td>choose</td>
        <td>当多选的时候</td>
      </tr>
      <tr>
        <td>loadDataSuccess</td>
        <td>当异步数据请求加载成功的时候</td>
      </tr>
    </table>

    <h3>option 配置</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>keyName</td>
        <td>数据的key对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>tree.default.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>数据的title对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>tree.default.titleName</code></td>
      </tr>
      <tr>
        <td>parentName</td>
        <td>数据的parent对应字段，配合数据类型为list的数据</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>tree.default.parentName</code></td>
      </tr>
      <tr>
        <td>childrenName</td>
        <td>数据的children对应字段，配合数据类型为tree的数据</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>tree.default.childrenName</code></td>
      </tr>
      <tr>
        <td>dataMode</td>
        <td>提供的数据类型，是平铺需要解析的列表，还是已经生成好的tree数据</td>
        <td>String</td>
        <td>list, tree</td>
        <td>list</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>用于tree展示的数据</td>
        <td>Array, Function</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>getTotalDatas</td>
        <td>异步获取用于tree展示的数据，一次性全部加载</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>getDatas</td>
        <td>异步获取用于tree展示的数据，每一次单击获取子集</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
