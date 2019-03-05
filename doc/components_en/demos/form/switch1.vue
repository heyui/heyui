<template>
  <div>
    <div>{{check1}}</div>
    <div><h-switch v-model="check1" :trueValue="1" :falseValue="2">1/2</h-switch></div>
    <div>{{check2}}</div>
    <div><h-switch v-model="check2" trueValue="yes" falseValue="no" :small="true">yes/no</h-switch></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      check1: 2,
      check2: 'no'
    };
  }
};
</script>
