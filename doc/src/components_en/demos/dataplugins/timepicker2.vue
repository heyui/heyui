<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="time" :disabled="true"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    };
  }
};
</script>
