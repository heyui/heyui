<template>
  <div class="doc">
    <h2>Loading 加载中</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-loading</code>。</p>

    <h3>模块加载效果</h3>
    <example demo="dataview/loading1"></example>

    <h3>全局加载效果</h3>
    <blockquote><code>$Loading</code>打开的全局加载dom始终都只有一个，重复执行也是同一个dom对象。</blockquote>
    <example demo="dataview/loading2"></example>

    <h3>Loading 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>text</td>
        <td>加载文本说明</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>loading状态</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>
