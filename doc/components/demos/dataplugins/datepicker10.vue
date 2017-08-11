<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" placeholder="请选择日期" type="week"></DatePicker>

      <p>以周日为星期的开始，默认周一。{{value2}}</p>
      <DatePicker v-model="value2" placeholder="请选择日期" type="week" :start-week="7"></DatePicker>
      
  </div>
</template>

<script>
import manba from 'manba';
export default {
  data() {
    return {
      value: manba().format(),
      value2: null,
    }
  }
}
</script>