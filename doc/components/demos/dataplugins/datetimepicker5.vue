<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="datetime" placeholder="请选择日期" :option="param"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      param:{
        minuteStep: 4
      }
    }
  }
}
</script>