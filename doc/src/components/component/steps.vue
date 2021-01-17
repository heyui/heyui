<template>
  <div class="doc">
    <h2>Steps 步骤条</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-steps</code>。</p>

    <h3>基本调用</h3>
    <example demo="plugins/step1"></example>

    <h3>自定义Icon, 说明</h3>
    <example demo="plugins/step2"></example>

    <h3>使用key值识别第几步</h3>
    <example demo="plugins/step3"></example>

    <h3>Steps 参数</h3>
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
        <td>选择的数据</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>调用全局定义的字典</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>step</td>
        <td>当前第几步，可以是key</td>
        <td>Number,String</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>自定义数据的key字段名</td>
        <td>String</td>
        <td>-</td>
        <td>全局config <code>dict.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>自定义数据的title字段名</td>
        <td>String</td>
        <td>-</td>
        <td>全局config <code>dict.titleName</code></td>
      </tr>
      <tr>
        <td>contentLayout</td>
        <td>内容排列方式, 1.24.0+</td>
        <td>String</td>
        <td>vertical</td>
        <td>vertical, transverse</td>
      </tr>
    </table>
  </div>
</template>
