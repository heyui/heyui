<template>
  <div class="doc">
    <h2>TimePicker 时间控件</h2>
    <h3>普通选择日期控件</h3>
    <div>
      <DatePicker v-model="value1" placeholder="请选择日期" type="time"></DatePicker>
    </div>
    <h3>日期控件禁用</h3>
    <div>
      <DatePicker v-model="value2" placeholder="请选择日期" :disabled="true" type="time"></DatePicker>
    </div>
    <h3>控件选择范围控制</h3>
    <div>
      <DatePicker v-model="value6" :option="param6" type="time"></DatePicker>
    </div>
  </div>
</template>

<script>

import manba from 'manba';

export default {
  data() {
    return {
      value1: '12:34',
      value2: '',
      value6: '',
      param6: {
        hours(){
          let hours = [];
          for(let i = 9; i <= 20; i++){
            hours.push(i);
          }
          return hours;
        },
        minutes(hour){
          let minutes = [];
          if(hour<12){
            minutes.push(7, 15, 23, 17, 34, 47, 58);
          }else{
            minutes.push(1, 3, 34, 45, 46, 47, 52);
          }
          return minutes;
        }
      },
    }
  }
}
</script>
