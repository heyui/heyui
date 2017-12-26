<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="datetime" placeholder="请选择日期" format="YYYY/MM/DD HH:mm:ss"></DatePicker>
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