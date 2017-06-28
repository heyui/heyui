<template>
  <div>
    <p>{{value}}</p>
    <NumberInput v-model="value" :disabled="true"></NumberInput>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    }
  }
};
</script>
