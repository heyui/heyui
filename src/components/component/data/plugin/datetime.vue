<template>
  <div class="doc">
    <h2>DateTimePicker 日期时间控件</h2>
    <h3>普通选择日期时间控件</h3>
    <div>
      <DatePicker v-model="value1" placeholder="请选择日期" type="datetime"></DatePicker>
    </div>
    <h3>日期时间控件禁用</h3>
    <div>
      <DatePicker v-model="value1" placeholder="请选择日期" type="datetime" :disabled="true"></DatePicker>
    </div>
    <h3>日期时间控件,可以到秒</h3>
    <div>
      <DatePicker v-model="value2" placeholder="请选择日期" type="datetime" :has-seconds="true"></DatePicker>
    </div>
    <h3>控件范围控制</h3>
    <p><button class="h-btn" @click="changeParam()">修改范围</button></p>
    <div>
      <DatePicker v-model="value4" :option="param" type="datetime"></DatePicker>
    </div>
    <h3>快捷方式</h3>
    <div>
      <DatePicker v-model="value5" :option="param2" type="datetime"></DatePicker>
    </div>
  </div>
</template>

<script>

import manba from 'manba';

export default {
  data() {
    return {
      value1: '2014-03-12',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      param: {
        start: manba().add(-1, manba.DAY),
        end: manba().add(46, manba.DAY),
        disabled: (value) => {
          return value.date()%5 == 0;
        }
      },
      param2: {
        shortcuts:[{
          title: '下一轮面试',
          value(){
            return manba().add(3, manba.DAY);
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
