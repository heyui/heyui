<template>
  <div>
      <p>value:{{value}}</p>
      <DateRangePicker v-model="value" placeholder="请选择日期"></DateRangePicker>
  </div>
</template>

<script>
// HeyUI.config("datepicker.daterangeOptions.paramName", {
//   start: 'min',
//   end: 'max'
// });
export default {
  data() {
    return {
      value: {}
    }
  }
}
</script>