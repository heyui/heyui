<template>
  <div v-width="300">
    <p>{{value}}</p>
    <NumberInput v-model="value" :max="10" :min="-1"></NumberInput>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    };
  }
};
</script>
