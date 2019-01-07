<template>
  <div class="doc">
    <h2>Layout 布局</h2>
    <p></p>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-layout</code>, <code>h-header</code>, <code>h-footer</code>, <code>h-content</code>, <code>h-sider</code>。</p>
    <h3>基本的页面布局</h3>
    <example demo="basic/layout1"></example>
    <h3>组件排版</h3>
    <example demo="basic/layout2"></example>
    <h3>区块间隔</h3>
    <example demo="basic/layout3"></example>
    <h3>横向，竖向区块间隔</h3>
    <example demo="basic/layout4"></example>
    <h3>Flex布局</h3>
    <example demo="basic/layout5"></example>
    <h3>Layout 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>type</td>
        <td>模式</td>
        <td>string</td>
        <td>flex</td>
        <td>-</td>
      </tr>
      <tr>
        <td>space</td>
        <td>区块间隔</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>space-x</td>
        <td>横向区块间隔</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>space-y</td>
        <td>竖向区块间隔</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>flex布局区块方向</td>
        <td>string</td>
        <td>row, column, row-reverse, column-reverse</td>
        <td>row</td>
      </tr>
      <tr>
        <td>justify</td>
        <td>flex布局区块排列方式</td>
        <td>string</td>
        <td>start, end, center, space-around, space-between</td>
        <td>start</td>
      </tr>
      <tr>
        <td>align</td>
        <td>flex布局区块对齐方式</td>
        <td>string</td>
        <td>top, middle, bottom</td>
        <td>top</td>
      </tr>
    </table>
  </div>
</template>