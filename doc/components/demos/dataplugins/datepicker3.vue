<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" format="YYYY/MM/DD"></DatePicker>
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
