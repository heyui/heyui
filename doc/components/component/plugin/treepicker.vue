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
        <td>按照当前模式选中的数据</td>
      </tr>
      <tr>
        <td>getFullChoose</td>
        <td>获取所有checkbox选中的数据</td>
      </tr>
    </table>
  </div>
</template>