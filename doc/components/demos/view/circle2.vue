<template>
  <div v-width="600">
    <p><NumberInput v-model="value" :step="10" :min="0" :max="100" useOperate></NumberInput></p>
    <p>
      <h-circle :percent="value" :stroke-width="18" :size="200">
        <p class="gray-color" v-font="28">122,332,98</p>
        <div v-height="5"></div>
        <p class="dark-color" v-font="13">目前达成比例</p>
        <p class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*value/100)}}</span>/<span>123</span></p>
      </h-circle>
      <h-circle :percent="value" :stroke-width="8" :size="80"><span v-font="12">占比: {{value}}%</span></h-circle>
    </p>
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
