<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="month"></DatePicker>
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
