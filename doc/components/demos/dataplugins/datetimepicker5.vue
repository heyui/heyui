<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="datetime" :option="param"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      param: {
        minuteStep: 4
      }
    };
  }
};
</script>
