<template>
  <div>
    <p>
      <SwitchList v-model="contentLayout" :datas="['vertical', 'transverse']"></SwitchList>
      <ButtonGroup size="s">
        <Button icon="h-icon-plus" @click="step>=3||step++"></Button>
        <Button icon="h-icon-minus" @click="step<=0||step--"></Button>
      </ButtonGroup>
    </p>
    <Steps :datas="data" :step="step" :contentLayout="contentLayout"></Steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contentLayout: 'vertical',
      data: [
        { key: 'a', title: 'step1', desc: 'step1 Description' },
        { key: 'b', title: 'step2', desc: 'step2 Description' },
        { key: 'c', title: 'step3', desc: 'step3 Description' },
        { key: 'd', title: 'step4', desc: 'step4 Description' }
      ],
      step: 0
    };
  }
};
</script>
