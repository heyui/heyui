<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="datetime" placeholder="请选择日期" disabled></DatePicker>
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