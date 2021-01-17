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
      data: [
        { key: 'a', title: 'step1', icon: 'h-icon-home', desc: 'step1 Description' },
        { key: 'b', title: 'step2', icon: 'h-icon-user', desc: 'step2 Description' },
        { key: 'c', title: 'step3', icon: 'h-icon-star-on', desc: 'step3 Description' },
        { key: 'd', title: 'step4', icon: 'h-icon-complete', desc: 'step4 Description' }
      ],
      step: 0
    };
  }
};
</script>
