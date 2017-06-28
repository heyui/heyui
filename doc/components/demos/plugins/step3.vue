<template>
  <div>
    <p>
      <ButtonGroup size="s">
        <Button @click="step='a'">步骤1</Button>
        <Button @click="step='b'">步骤2</Button>
        <Button @click="step='c'">步骤3</Button>
        <Button @click="step='d'">步骤4</Button>
      </ButtonGroup>
    </p>
    <Steps :datas="data" :step="step"></Steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { key: 'a', title: '步骤1', icon: 'h-icon-home', desc: '步骤1描述' },
        { key: 'b', title: '步骤2', icon: 'h-icon-user', desc: '步骤2描述' },
        { key: 'c', title: '步骤3', icon: 'h-icon-star-on', desc: '步骤3描述' },
        { key: 'd', title: '步骤4', icon: 'h-icon-complete', desc: '步骤4描述' },
      ],
      step: 0,
    }
  }
};
</script>
