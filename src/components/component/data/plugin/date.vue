<template>
  <div class="doc">
    <h2>DatePicker 日期控件</h2>
    <h3>普通选择日期控件</h3>
    <div>
      <DatePicker v-model="value1" format="YYYY/MM/DD" placeholder="请选择日期"></DatePicker>
    </div>
    <h3>日期控件禁用</h3>
    <div>
      <DatePicker v-model="value1" format="YYYY/MM/DD" placeholder="请选择日期" :disabled="true"></DatePicker>
    </div>
    <h3>控件范围控制</h3>
    <p><button class="h-btn" @click="changeParam()">修改范围</button></p>
    <div>
      <DatePicker v-model="value4" :option="param"></DatePicker>
    </div>
    <h3>选择年月控件</h3>
    <div>
      <DatePicker v-model="value2" type="month"></DatePicker>
    </div>
    <h3>选择年控件</h3>
    <div>
      <DatePicker v-model="value3" type="year"></DatePicker>
    </div>
    <div></div>
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
      param: {
        start: manba().add(-1, manba.DAY),
        end: manba().add(46, manba.DAY),
        disabled: (value) => {
          return value.date()%5 == 0;
        }
      }
    }
  },
  methods:{
    changeParam(){
      this.param.start = "2017-02-01"; 
      this.param.end = "2017-06-03"; 
    }
  }
}
</script>
