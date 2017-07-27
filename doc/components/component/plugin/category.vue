<template>
  <div class="doc">
    <h2>Category 分类选择</h2>
  
    <h3>基本调用</h3>
    <p>在传递的param参数中，定义基本的数据字段：<code>keyName</code>, <code>parentName</code>, <code>titleName</code>。</p>
    <p>设定数据模式：<code>dataMode</code>, 当传递的数据为有key,parent字段的list，则传递<code>list</code>，组件会根据key,parent字段自动计算树模型，如果传递的数据本身就是树模型，则传递<code>tree</code>。</p>
    
    <example demo="plugins/category1"></example> 

    <h3>对象调用</h3>
    <p>在传递的param参数中，定义基本的数据字段：<code>keyName</code>, <code>parentName</code>, <code>titleName</code>。</p>
    <p>设定数据模式：<code>dataMode</code>, 当传递的数据为有key,parent字段的list，则传递<code>list</code>，组件会根据key,parent字段自动计算树模型，如果传递的数据本身就是树模型，则传递<code>tree</code>。</p>
    
    <example demo="plugins/category2"></example> 
  
    <h3>字典配置</h3>
    
    <example demo="plugins/category3"></example> 

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
        <td>all,some</td>
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
        <td>数据的parent对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>tree.default.parentName</code></td>
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
        <td>Array</td>
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
<script>
export default {
  data() {
    let list = [
      { id: 1, title: "一级", checkable: false },
      { id: 2, title: "二级", checkable: false },
      { id: 3, title: "三级", checkable: false },
      { id: 10, title: "一级-0", parent: 1 },
      { id: 11, title: "一级-1", parent: 1 },
      { id: 12, title: "一级-2", parent: 1 },
      { id: 13, title: "一级-3", parent: 1 },
      { id: 14, title: "一级-4", parent: 1 },
      { id: 20, title: "二级-0", parent: 2 },
      { id: 21, title: "二级-1", parent: 2 },
      { id: 22, title: "二级-2", parent: 2 },
      { id: 23, title: "二级-3", parent: 2 },
      { id: 24, title: "二级-4", parent: 2 },
      { id: 30, title: "三级-0", parent: 3 },
      { id: 31, title: "三级-1", parent: 3 },
      { id: 32, title: "三级-2", parent: 3 },
      { id: 33, title: "三级-3", parent: 3 },
      { id: 34, title: "三级-4", parent: 3 }
    ];
    return {
      value: null,
      value2: [{ id: 34, title: "三级-4", parent: 3 }],
      param: {
        title: '测试',
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list
      }
    }
  }
};
</script>