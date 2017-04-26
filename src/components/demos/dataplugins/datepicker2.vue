<template>
  <div>
    <p><h-switch v-model="disabled" :small="true">禁用</h-switch></p>
    <p><DatePicker v-model="value" placeholder="请选择日期" :disabled="disabled"></DatePicker></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      disabled: true
    }
  }
}
</script>