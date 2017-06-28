<template>
  <div class="doc">
    <h2>Tooltip 气泡提示</h2>
    <h3>普通的提示</h3>
    <example demo="message/tooltip1"></example>

    <h3>不同位置的提示</h3>
    <example demo="message/tooltip2"></example>

    <h3>通过点击触发</h3>
    <example demo="message/tooltip3"></example>

    <h3>自定义内容</h3>
    <example demo="message/tooltip4"></example>

    <h3>Tooltip 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>content</td>
        <td>显示的内容</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>提示的方向</td>
        <td>String</td>
        <td>-</td>
        <td>top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</td>
      </tr>
      <tr>
        <td>theme</td>
        <td>主题</td>
        <td>String</td>
        <td>white</td>
        <td>-</td>
      </tr>
      <tr>
        <td>trigger</td>
        <td>触发事件</td>
        <td>String</td>
        <td>loading, info, warn, success, error</td>
        <td>info</td>
      </tr>
    </table>
  </div>
</template>
