<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="datetime"></DatePicker>
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
