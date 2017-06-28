<template>
  <div class="doc">
    <h2>NumberInput 数字输入</h2>
    <h3>基本</h3>
    <example demo="form/numberinput1"></example>

    <h3>最大值最小值</h3>
    <example demo="form/numberinput2"></example>

    <h3>step</h3>
    <example demo="form/numberinput3"></example>

    <h3>disabled</h3>
    <example demo="form/numberinput4"></example>
  
    <h3>NumberInput 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>min</td>
        <td>最大值</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>max</td>
        <td>最小值</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>step</td>
        <td>每次点击增加或减少的数值</td>
        <td>Number</td>
        <td>-</td>
        <td>1</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>


