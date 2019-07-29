<template>
  <div class="doc">
    <h2>Tooltip 气泡提示</h2>

    <blockquote>注意：如果tooltip在页面最右边，并且换行异常，请使用样式给内容设定固定宽度。</blockquote>
    <blockquote>注意：如果使用tooltip做编辑模块，请添加参数 editable ，一般展示的tooltip的z-index属性比编辑的tooltip模块高。</blockquote>

    <h3>普通的提示</h3>
    <example demo="message/tooltip1"></example>

    <h3>不同位置的提示</h3>
    <example demo="message/tooltip2"></example>

    <h3>通过点击触发</h3>
    <example demo="message/tooltip3"></example>

    <h3>自定义内容</h3>
    <example demo="message/tooltip4"></example>

    <h3>自定义样式</h3>
    <example demo="message/tooltip5"></example>

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
        <td>white，或者自定义参数</td>
        <td>-</td>
      </tr>
      <tr>
        <td>className</td>
        <td>tooltip框添加样式</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>trigger</td>
        <td>触发事件</td>
        <td>String</td>
        <td>hover, click, focus, manual</td>
        <td>info</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>editable</td>
        <td>是否为编辑模块, 1.18.0+</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>maxWidth</td>
        <td>设定最大宽度, 1.24.0+</td>
        <td>Number</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <h3>Tooltip 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>show</td>
        <td>tooltip 打开的时候触发</td>
        <td></td>
      </tr>
      <tr>
        <td>hide</td>
        <td>tooltip 关闭的时候触发</td>
        <td></td>
      </tr>
    </table>

    <h3>Tooltip 方法</h3>
    <table class="table">
      <tr>
        <th>方法</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>show</td>
        <td>显示</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>关闭显示</td>
      </tr>
      <tr>
        <td>update</td>
        <td>更新提示框的位置</td>
      </tr>
    </table>
  </div>
</template>
