<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" format="YYYYMMDD"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '20190501'
    };
  }
};
</script>
