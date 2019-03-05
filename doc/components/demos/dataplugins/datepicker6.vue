<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" :option="param"></DatePicker>
  </div>
</template>

<script>
import manba from 'manba';

export default {
  data() {
    return {
      value: '',
      param: {
        // 具体配置在"config.datepicker.shortcuts"中
        shortcuts: [{
          title: '下一轮面试',
          value() {
            return manba().add(3, manba.DAY);
          }
        }]
      }
    };
  }
};
</script>
