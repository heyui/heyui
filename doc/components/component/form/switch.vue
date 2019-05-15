<template>
  <div class="doc">
    <h2>HSwitch 开关</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-switch</code>，一般使用  <code>HSwitch</code>。</p>
    <h3>基本</h3>
    <example demo="form/switch2"></example>

    <h3>自定义true与false的值</h3>
    <example demo="form/switch1"></example>

    <h3>禁用</h3>
    <example demo="form/switch3"></example>

    <h3>HSwitch 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>small</td>
        <td>尺寸更小</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>trueValue</td>
        <td>选中的值，使用 === 比较</td>
        <td>-</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>falseValue</td>
        <td>未选中的值，使用 === 比较</td>
        <td>-</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>HSwitch 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>返回数据</th>
      </tr>
      <tr>
        <td>change</td>
        <td>当数据产生变动的时候触发</td>
        <td>完整对象</td>
      </tr>
      <tr>
        <td>input</td>
        <td>当数据产生变动的时候触发</td>
        <td>当前绑定的v-model值</td>
      </tr>
    </table>
  </div>
</template>
