<template>
  <div>
    <div><h-switch v-model="check1" :disabled="true">测试</h-switch></div>
    <br>
    <div><h-switch v-model="check2" :small="true" :disabled="true">测试</h-switch></div>
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
