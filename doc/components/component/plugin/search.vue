<template>
  <div class="doc">
    <h2>Search 搜索框</h2>

    <h3>基本调用</h3>
    <p>为很多地方提供简单的search组件封装</p>
    <example demo="plugins/search1"></example>

    <h3>前置Search Icon</h3>
    <example demo="plugins/search2"></example>

    <h3>Search 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>position</td>
        <td>Search Icon显示的位置</td>
        <td>String</td>
        <td>-</td>
        <td>end</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>String</td>
        <td>-</td>
        <td>请输入关键词查询</td>
      </tr>
      <tr>
        <td>block</td>
        <td>是否整宽</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>triggerType</td>
        <td>查询触发类型</td>
        <td>String</td>
        <td>enter, input</td>
        <td>enter</td>
      </tr>
    </table>
  </div>
</template>
