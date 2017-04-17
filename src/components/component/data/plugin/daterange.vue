<template>
  <div class="doc">
    <h2>DateTimePicker 日期范围控件</h2>
    <h3>普通选择日期范围控件</h3>
    <div>
      <p>值：{{value1}}</p>
      <DateRangePicker v-model="value1" placeholder="请选择日期" format="YYYY/MM/DD"></DateRangePicker>
    </div>
    <h3>日期控件单独选择开始结束</h3>
    <div>
      <p>值：{{value8}}</p>
      <DateRangePicker v-model="value8" placeholder="请选择日期" type="date" :separate="true"></DateRangePicker>
    </div>
    <h3>选择日期时间范围控件</h3>
    <div>
      <p>值：{{value8}}</p>
      <DateRangePicker v-model="value7" placeholder="请选择日期" type="datetime"></DateRangePicker>
    </div>
    <h3>日期时间范围禁用</h3>
    <div>
      <DateRangePicker v-model="value1" placeholder="请选择日期" :disabled="true"></DateRangePicker>
    </div>
    <h3>控件开始结束范围控制</h3>
    <div>
      <p>值：{{value3}}</p>
      <DateRangePicker v-model="value3" :option="param3"></DateRangePicker>
    </div>
    <h3>快捷方式</h3>
    <div>
      <p>值：{{value5}}</p>
      <DateRangePicker v-model="value5" :option="param2"></DateRangePicker>
    </div>
  </div>
</template>

<script>

import manba from 'manba';

export default {
  data() {
    return {
      value1: {},
      value2: {},
      value3: {},
      value4: {},
      value7: {},
      value8: {},
      param7: {
        minuteStep: 4
      },
      value6: {},
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
      value5: {},
      param2: {
        paramName:{
          start: 'min',
          end: 'max'
        }
      },
      param3: {
        start: manba().add(-1, manba.DAY),
        end: manba().add(46, manba.DAY)
      },
      param2: {
        shortcuts:[{
          title: '近三天',
          value(){
            return {
              start: manba().add(-3, manba.DAY),
              end: manba(),
            };
          }
        }]
      }
    }
  },
  methods:{
    changeParam(){
      this.param.start = "2017-02-01 12:34"; 
      this.param.end = "2017-06-03 12:34"; 
    }
  }
}
</script>
