<template>
  <div class="doc">
    <h2>Radio 单选框</h2>
    <h3>基本</h3>
    <p>Hey UI将统一所有的radio样式。</p>
    <example demo="radio1"></example>

    <h3>禁用</h3>
    <example demo="radio2"></example>

    <h3>组件式调用</h3>
    <p>支持组件式调用，推荐使用数据模式的radio选择器。使用 <code>v-model</code> 以及 <code>datas</code>参数完成整体的调用。</p>
    <blockquote>Hey UI将提供数据字典的调用方式模型，具体请等待。</blockquote>
    <example demo="radio3"></example>

    <h3>Radio 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>datas</td>
        <td>数据字典</td>
        <td>Array,Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>