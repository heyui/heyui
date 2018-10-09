<template>
  <div class="doc">
    <h2>Badge 徽标数</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-badge</code>。</p>
    <h3>基本应用</h3>
    <p>一般<code>count</code>为0的时候不展示</p>
    <example demo="view/badge1"></example>

    <h3>最大显示数</h3>
    <example demo="view/badge2"></example>

    <h3>数字为0的时候也展示</h3>
    <example demo="view/badge3"></example>

    <h3>提示小红点</h3>
    <example demo="view/badge4"></example>

    <h3>不同展示方式</h3>
    <example demo="view/badge5"></example>

    <h3>Badge 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>count</td>
        <td>显示的值</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>maxCount</td>
        <td>最大显示的值</td>
        <td>Number</td>
        <td>-</td>
        <td>99</td>
      </tr>
      <tr>
        <td>showZero</td>
        <td>当值为0的时候也显示</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>position</td>
        <td>显示在parent的右侧</td>
        <td>String</td>
        <td>right</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
