<template>
  <div class="doc">
    <h2>Steps 步骤条</h2>

    <p>
      <ButtonGroup size="s">
        <Button icon="plus" @click="step>=2||step++"></Button>
        <Button icon="minus" @click="step<=0||step--"></Button>
      </ButtonGroup>
    </p>
    <Steps :datas="data" :step="step"></Steps>

    <p>
      <ButtonGroup size="s">
        <Button icon="plus" @click="step1>=3||step1++"></Button>
        <Button icon="minus" @click="step1<=0||step1--"></Button>
      </ButtonGroup>
    </p>
    <Steps :datas="data1" :step="step1"></Steps>

    <h3>基本调用</h3>

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
        <td>trigger</td>
        <td>触发方式</td>
        <td>String</td>
        <td>click, hover</td>
        <td>click</td>
      </tr>
      <tr>
        <td>toggleIcon</td>
        <td>是否显示展示状态的icon</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>menu显示的位置</td>
        <td>Stirng</td>
        <td>top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</td>
        <td>bottom-start</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: {
        a: '步骤1',
        b: '步骤2',
        c: '步骤3',
      },
      step: 0,
      data1: [
        { key: 'a', title: '步骤1', icon: 'h-icon-home', desc: '步骤1描述' },
        { key: 'b', title: '步骤2', icon: 'h-icon-user', desc: '步骤2描述' },
        { key: 'c', title: '步骤3', icon: 'h-icon-star-on', desc: '步骤3描述' },
        { key: 'd', title: '步骤4', icon: 'h-icon-complete', desc: '步骤4描述' },
      ],
      step1: 0
    }
  },
  methods: {
  },
}
</script>
