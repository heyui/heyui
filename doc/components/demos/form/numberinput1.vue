<template>
  <div v-width="300">
    <!-- <p><Button color="green" @click="value=100">设置为100</Button></p>
    <p><Button color="green" @click="value=200">设置为200</Button></p> -->
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
    };
  }
};
</script>
