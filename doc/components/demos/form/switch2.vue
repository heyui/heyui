<template>
  <div>
    <div>{{check1}}</div>
    <div><h-switch v-model="check1">测试</h-switch></div>
    <div>{{check2}}</div>
    <div><h-switch v-model="check2" :small="true">测试</h-switch></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      check1: false,
      check2: false
    };
  }
};
</script>
