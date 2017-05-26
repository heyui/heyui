<template>
  <div class="doc">
    <h2>NumberInput 数字输入</h2>
    <h3>基本</h3>
    <p>{{value1}}</p>
    <NumberInput v-model="value1"></NumberInput>

    <h3>最大值最小值</h3>
    <p>{{value2}}</p>
    <NumberInput v-model="value2" :max="10" :min="1"></NumberInput>

    <h3>step</h3>
    <p>{{value3}}</p>
    <NumberInput v-model="value3" :step="5"></NumberInput>

    <h3>disabled</h3>
    <p>{{value3}}</p>
    <NumberInput v-model="value3" :disabled="true"></NumberInput>
  
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
        <td>readonly</td>
        <td>是否只读</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value1: 12,
      value2: 1,
      value3: 1
    }
  }
}
</script>


