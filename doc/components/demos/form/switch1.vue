<template>
  <div>
    <div>{{check1}}</div>
    <div><h-switch v-model="check1" :trueValue="1" :falseValue="2">1/2</h-switch></div>
    <div>{{check2}}</div>
    <div><h-switch v-model="check2" trueValue="yes" falseValue="no" :small="true">yes/no</h-switch></div>
    <div>{{check3}}</div>
    <div>
      <h-switch v-model="check3">
        <span slot="open">开</span>
        <span slot="close">关</span>
      </h-switch>
    </div>
    <div>{{check4}}</div>
    <div>
      <h-switch v-model="check4">
        <span slot="open" class="h-icon-check"></span>
        <span slot="close" class="h-icon-close"></span>
      </h-switch></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      check1: 2,
      check2: 'no',
      check3: false,
      check4: false
    };
  }
};
</script>
