<template>
  <div v-width="300">
    <!-- <p><Button color="green" @click="value=100">Set to 100</Button></p>
    <p><Button color="green" @click="value=200">Set to 200</Button></p> -->
    <p>ordinary:{{value}}</p>
    <NumberInput v-model="value"></NumberInput>
    <p>Precise 2 decimal places:{{value2}}</p>
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
