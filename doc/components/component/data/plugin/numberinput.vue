<template>
  <div class="doc">
    <h2>NumberInput 数字输入</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-numberinput</code>。</p>
    <h3>基本</h3>
    <example demo="form/numberinput1"></example>

    <h3>最大值最小值</h3>
    <example demo="form/numberinput2"></example>

    <h3>使用加减控制</h3>
    <example demo="form/numberinput3"></example>

    <h3>step</h3>
    <example demo="form/numberinput5"></example>

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
        <td>最小值</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>max</td>
        <td>最大值</td>
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
      <tr>
        <td>useInt</td>
        <td>控制只能输入整数</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>useOperate</td>
        <td>是否使用加减按钮</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>precision</td>
        <td>保留几位小数</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>


    <h3>NumberInput 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>返回数据</th>
      </tr>
      <tr>
        <td>input</td>
        <td>数据产生改变的时候</td>
        <td>当前绑定的v-model值</td>
      </tr>
      <tr>
        <td>change</td>
        <td>数据产生改变blur的时候</td>
        <td>完整对象</td>
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


