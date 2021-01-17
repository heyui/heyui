<template>
  <div>
    <p>
      <ButtonGroup size="s">
        <Button @click="step='a'">step1</Button>
        <Button @click="step='b'">step2</Button>
        <Button @click="step='c'">step3</Button>
        <Button @click="step='d'">step4</Button>
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
