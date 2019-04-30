<template>
  <div class="doc">
    <h2>Tree 树</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-tree</code>。</p>

    <h3>基本调用</h3>
    <p>在传递的param参数中，定义基本的数据字段：<code>keyName</code>, <code>parentName</code>, <code>titleName</code>。</p>
    <p>设定数据模式：<code>dataMode</code>, 当传递的数据为有key,parent字段的list，则传递<code>list</code>，组件会根据key,parent字段自动计算树模型(parent可以是数组对应)，如果传递的数据本身就是树模型，则传递<code>tree</code>。</p>
    <example demo="plugins/tree1"></example>

    <h3>多选，选择模式为ALL</h3>
    <p><code>chooseMode</code>: all, 只有子集全选的时候，才会选中父级，如果父级选择，返回数据则只返回父级，子集不返回。</p>
    <example demo="plugins/tree2"></example>

    <h3>多选，选择模式为SOME</h3>
    <p><code>chooseMode</code>: some, 只要子集选中，父级即选中，返回数据为所有选中数据。</p>
    <example demo="plugins/tree3"></example>

    <h3>多选，选择模式为INDEPENDENT</h3>
    <p><code>chooseMode</code>: independent, 父级子级的选择不相关，最终中返回已选择的数据。</p>
    <example demo="plugins/tree8"></example>

    <h3>搜索与自定义</h3>
    <example demo="plugins/tree4"></example>

    <h3>全部数据异步加载</h3>
    <p>在传递的param参数中，定义字段：<code>getTotalDatas</code>获取异步返回的数据，这里的数据属于一次性返回。</p>
    <example demo="plugins/tree5"></example>

    <h3>分步异步加载</h3>
    <p>在传递的param参数中，定义字段：<code>getDatas</code>获取异步返回的数据，这里的数据属于每个层级返回。</p>
    <p>分步异步加载不推荐有<code>multiple</code>模式，分步异步加载请尽量使用在单个选择模式下。</p>
    <example demo="plugins/tree6"></example>

    <h3>全局配置调用</h3>
    <example demo="plugins/tree7"></example>

    <h3>Tree 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>chooseMode</td>
        <td>checkbox选择模式</td>
        <td>String</td>
        <td>all, some, independent</td>
        <td>all</td>
      </tr>
      <tr>
        <td>option</td>
        <td>配置项，详细参见下面的option说明</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>multiple</td>
        <td>多选</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>filterable</td>
        <td>是否可以搜索</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>config</td>
        <td>使用全局配置的方法</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>toggleOnSelect</td>
        <td>是否在选中文本的时候折叠内容</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>selectOnClick</td>
        <td>是否点击整行的时候选中，1.17.0+</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>className</td>
        <td>主题，1.17.0+</td>
        <td>String</td>
        <td>h-tree-theme-item-selected, h-tree-theme-row-selected</td>
        <td>h-tree-theme-item-selected</td>
      </tr>
    </table>

    <h3>Tree 方法</h3>
    <table class="table">
      <tr>
        <th>方法</th>
        <th>说明</th>
        <th>参数</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>updateChoose</td>
        <td>更新选中值(多选)</td>
        <td>(keys, updateValue = true)</td>
        <td>无</td>
      </tr>
      <tr>
        <td>getChoose</td>
        <td>获取选中值(多选)</td>
        <td>无</td>
        <td>[TreeItem]</td>
      </tr>
      <tr>
        <td>updateSelect</td>
        <td>更新选中值(单选)</td>
        <td>(keys, updateValue = true)</td>
        <td>无</td>
      </tr>
      <tr>
        <td>getSelect</td>
        <td>获取选中值(单选)</td>
        <td>无</td>
        <td>TreeItem</td>
      </tr>
      <tr>
        <td>getFullChoose</td>
        <td>获取所有选中的值(多选)</td>
        <td>无</td>
        <td>[TreeItem]</td>
      </tr>
      <tr>
        <td>chooseAll</td>
        <td>选中所有值(多选)</td>
        <td>无</td>
        <td>无</td>
      </tr>
      <tr>
        <td>expandAll</td>
        <td>展开所有的节点</td>
        <td>无</td>
        <td>无</td>
      </tr>
      <tr>
        <td>expand</td>
        <td>展开节点，1.18.0+</td>
        <td>([keys])</td>
        <td>无</td>
      </tr>
      <tr>
        <td>foldAll</td>
        <td>收起所有的折叠</td>
        <td>无</td>
        <td>无</td>
      </tr>
      <tr>
        <td>refresh</td>
        <td>刷新数据</td>
        <td>无</td>
        <td>无</td>
      </tr>
      <tr>
        <td>updateTreeItem</td>
        <td>更新TreeItem，1.17.0+</td>
        <td>(key, { title: '' })</td>
        <td>无</td>
      </tr>
      <tr>
        <td>appendTreeItem</td>
        <td>插入TreeItem，1.17.0+</td>
        <td>(parentkey, { id: '', title: '' })</td>
        <td>无</td>
      </tr>
      <tr>
        <td>removeTreeItem</td>
        <td>删除TreeItem，1.17.0+</td>
        <td>(key)</td>
        <td>无</td>
      </tr>
    </table>

    <h3>Tree 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>input</td>
        <td>v-model值变化</td>
      </tr>
      <tr>
        <td>choose</td>
        <td>checkbox选择变化</td>
      </tr>
      <tr>
        <td>select</td>
        <td>tree的select变化</td>
      </tr>
      <tr>
        <td>open</td>
        <td>当tree打开变化</td>
      </tr>
      <tr>
        <td>loadDataSuccess</td>
        <td>当异步数据加载成功的时候触发，应用与有一些数据按照tree加载的数据执行的场景</td>
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
        <td>-</td>
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

    <h3>Slot</h3>
    <table class="table">
      <tr>
        <th>名称</th>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>item</td>
        <td>item：对应的tree数据</td>
        <td>内容的渲染, 1.17.0+</td>
      </tr>
    </table>
  </div>
</template>
