<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="datehour" placeholder="请选择日期"></DatePicker>
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