<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" placeholder="请选择日期" type="season"></DatePicker>
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