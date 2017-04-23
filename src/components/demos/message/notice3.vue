<template>
  <div>
      <p>value:{{value}}</p>
      <DateRangePicker v-model="value" type="datetime" placeholder="请选择日期" :option="param"></DateRangePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: {},
      param: {
        minuteStep: 4
      }
    }
  }
}
</script>