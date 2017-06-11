<template>
  <div class="doc">
    <h2>Steps 步骤条</h2>

    <h3>基本调用</h3>
    <p>
      <ButtonGroup size="s">
        <Button icon="plus" @click="step>=3||step++"></Button>
        <Button icon="minus" @click="step<=0||step--"></Button>
      </ButtonGroup>
    </p>
    <Steps :datas="data" :step="step"></Steps>

    <h3>自定义Icon, 说明</h3>
    <p>
      <ButtonGroup size="s">
        <Button icon="plus" @click="step1>=3||step1++"></Button>
        <Button icon="minus" @click="step1<=0||step1--"></Button>
      </ButtonGroup>
    </p>
    <Steps :datas="data1" :step="step1"></Steps>

    <h3>使用key值识别第几步</h3>
    <p>
      <ButtonGroup size="s">
        <Button @click="step2='a'">步骤1</Button>
        <Button @click="step2='b'">步骤2</Button>
        <Button @click="step2='c'">步骤3</Button>
        <Button @click="step2='d'">步骤4</Button>
      </ButtonGroup>
    </p>

    <Steps :datas="data" :step="step2"></Steps>


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
        d: '步骤4',
      },
      step: 0,
      data1: [
        { key: 'a', title: '步骤1', icon: 'h-icon-home', desc: '步骤1描述' },
        { key: 'b', title: '步骤2', icon: 'h-icon-user', desc: '步骤2描述' },
        { key: 'c', title: '步骤3', icon: 'h-icon-star-on', desc: '步骤3描述' },
        { key: 'd', title: '步骤4', icon: 'h-icon-complete', desc: '步骤4描述' },
      ],
      step1: 0,
      step2: 'a'
    }
  },
  methods: {
  },
}
</script>
