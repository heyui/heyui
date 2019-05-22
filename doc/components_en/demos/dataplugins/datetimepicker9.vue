<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="datetime" format="YYYY/MM/DD HH:mm:ss"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '2019/05/09 02:10:00'
    };
  }
};
</script>
