<template>
  <div>
      <p>value:{{value}}</p>
      <DateRangePicker v-model="value" placeholder="请选择日期" :separate="true"></DateRangePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: {}
    }
  }
}
</script>