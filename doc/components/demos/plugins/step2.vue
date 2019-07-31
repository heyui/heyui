<template>
  <div>
    <p>
      <ButtonGroup size="s">
        <Button icon="h-icon-plus" @click="step>=3||step++"></Button>
        <Button icon="h-icon-minus" @click="step<=0||step--"></Button>
      </ButtonGroup>
    </p>
    <Steps :datas="data" :step="step"></Steps>
    <blockquote>slot，1.24.0+，icon, title, desc</blockquote>
    <Steps :datas="data" :step="step" contentLayout="transverse">
      <template v-slot:icon="{item, index}">
        <h-circle :percent="80" color="#45b984" :stroke-width="4" :size="30"><div v-font="13">3/4</div></h-circle>
      </template>
      <template v-slot:title="{item, index}"><div>{{item.title}}</div><div>{{item.title}}</div></template>
      <template v-slot:desc>
        Description
      </template>
    </Steps>
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
