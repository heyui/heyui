<template>
  <div>
    <p>
      <ButtonGroup size="s">
        <Button icon="h-icon-plus" @click="step>=3||step++"></Button>
        <Button icon="h-icon-minus" @click="step<=0||step--"></Button>
      </ButtonGroup>
    </p>
    <Steps :datas="data" :step="step"></Steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        a: 'step1',
        b: 'step2',
        c: 'step3',
        d: 'step4'
      },
      step: 0
    };
  }
};
</script>
