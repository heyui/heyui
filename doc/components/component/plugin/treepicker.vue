<template>
  <div class="doc">
    <h2>TreePicker 树下拉选择</h2>
  
    <h3>基本调用</h3>
    <example demo="plugins/treepicker1"></example>
  
    <h3>多选</h3>
    <example demo="plugins/treepicker2"></example>

    <h3>全局</h3>
    <blockquote>使用的是treeconfig中的配置项</blockquote>
    <example demo="plugins/treepicker3"></example>


    <h3>TreePicker 参数</h3>
    <blockquote>multiple, option, config, filterable等配置参照Tree的配置</blockquote>
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
        <td>placeholder</td>
        <td>展示默认提示语</td>
        <td>String</td>
        <td>-</td>
        <td>请选择</td>
      </tr>
    </table>
    
  </div>
</template>
<script>
export default {
  data() {
    let list = [
      { id: 1, title: "一级", disabled: true },
      { id: 2, title: "二级" },
      { id: 3, title: "三级" },
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
      value2: [],
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