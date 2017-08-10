<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" placeholder="请选择日期" type="week"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  }
}
</script>