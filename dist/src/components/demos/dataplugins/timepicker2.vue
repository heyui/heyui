<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="time" placeholder="请选择日期" :disabled="true"></DatePicker>
  </div>
</template>

<script>
import manba from 'manba';
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>