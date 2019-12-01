<template>
  <div class="doc">
    <h2>Skeleton 加载占位图</h2>
    <blockquote>1.17.0+</blockquote>

    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-skeleton</code>。</p>

    <p>加载占位图就是在页面数据尚未加载前先给用户展示出页面的大致结构，直到请求数据返回后再渲染页面，补充进需要显示的数据内容。</p>

    <h3>基本调用</h3>
    <example demo="other/skeleton1"></example>

    <h3>动画效果</h3>
    <example demo="other/skeleton2"></example>

    <h3>列表</h3>
    <example demo="other/skeleton3"></example>

    <h3>Skeleton 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>loading</td>
        <td>为 true 时，显示占位图，反之直接展示子组件</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>active</td>
        <td>是否展示动画效果</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>title</td>
        <td>是否显示标题占位图</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>paragraph</td>
        <td>是否显示段落占位图</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>titleWidth</td>
        <td>标题宽度</td>
        <td>String</td>
        <td>-</td>
        <td>38%</td>
      </tr>
      <tr>
        <td>rows</td>
        <td>设置段落占位图的行数</td>
        <td>Number</td>
        <td>-</td>
        <td>3</td>
      </tr>
    </table>
  </div>
</template>

<script>
