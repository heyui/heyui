<template>
  <div>
      <DateRangePicker v-model="value" placeholder="请选择日期" :disabled="true"></DateRangePicker>
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