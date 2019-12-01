<template>
  <div class="doc">
    <h2>Circle 进度环</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-circle</code>，一般使用<code>hCircle</code>。</p>
    <h3>基本调用</h3>
    <example demo="view/circle1"></example>

    <h3>组合形式</h3>
    <example demo="view/circle2"></example>

    <h3>Circle 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>percent</td>
        <td>显示比例</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>color</td>
        <td>显示颜色</td>
        <td>String</td>
        <td>RGB</td>
        <td>primary</td>
      </tr>
      <tr>
        <td>stroke-width</td>
        <td>宽度</td>
        <td>Number</td>
        <td>-</td>
        <td>10</td>
      </tr>
      <tr>
        <td>size</td>
        <td>大小</td>
        <td>Number</td>
        <td>-</td>
        <td>120</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 10
    };
  }
};
</script>
