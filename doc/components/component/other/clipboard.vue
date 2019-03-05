<template>
  <div class="doc">
    <h2>Clipboard 复制剪切板</h2>
    <blockquote>1.13.0+</blockquote>

    <h3>基本调用</h3>
    <example demo="other/clipboard1"></example>

    <h3>Clipboard 参数</h3>
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
        <td>复制的文本</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>showSuccessTip</td>
        <td>设置复制成功文案</td>
        <td></td>
        <td>String</td>
        <td>复制成功</td>
      </tr>
      <tr>
        <td>showFailureTip</td>
        <td>设置复制失败文案</td>
        <td></td>
        <td>String</td>
        <td>复制失败</td>
      </tr>
      <tr>
        <td>successCallback</td>
        <td>执行成功后调用</td>
        <td></td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>failureCallback</td>
        <td>执行失败后调用</td>
        <td></td>
        <td>-</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
