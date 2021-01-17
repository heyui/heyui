<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="datetime" :has-seconds="true"></DatePicker>
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
