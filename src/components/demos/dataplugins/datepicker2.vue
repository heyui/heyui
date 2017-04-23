<template>
  <div>
      <DatePicker v-model="value" placeholder="请选择日期" disabled></DatePicker>
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