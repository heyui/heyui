<template>
  <div class="doc">
    <h2>Poptip 确认提示</h2>
    <h3>普通的提示</h3>
    <example demo="message/poptip1"></example>

    <h3>Poptip 参数</h3>
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
        <td>disabled</td>
        <td>是否禁用, 1.25.0+</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
    </table>

    <h3>Poptip 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>confirm</td>
        <td>点击“确认”触发事件</td>
      </tr>
    </table>
  </div>
</template>
