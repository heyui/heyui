<template>
  <div>
    <p>{{value}}</p>
    <NumberInput v-model="value"></NumberInput>
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
