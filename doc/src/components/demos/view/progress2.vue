<template>
  <div v-width="600">
    <p><NumberInput v-model="value" :step="10" :min="0" :max="200" useOperate></NumberInput></p>
    <p><Progress :percent="value" :stroke-width="6"><span slot="title">项目1</span><span slot="text">{{value}}%</span></Progress></p>
    <p><Progress :percent="value" :stroke-width="10" color="#ff5500"></Progress></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 10
    };
  }
};
</script>
