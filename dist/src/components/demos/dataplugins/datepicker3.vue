<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" placeholder="请选择日期" format="YYYY/MM/DD"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>