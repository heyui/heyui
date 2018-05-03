<template>
  <div v-width="300">
    <p>普通：{{value}}</p>
    <NumberInput v-model="value"></NumberInput>
    <p>精确2位小数点：{{value2}}</p>
    <NumberInput v-model="value2" :precision="2"></NumberInput>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      value2: 0
    }
  }
};
</script>
