<template>
  <div class="doc">
    <h2>DateTimePicker 日期范围控件</h2>
    <h3>普通选择日期范围控件</h3>
    <p>数据默认使用{start,end}的对象，同时也可以自定义参数。详情请参考<router-link to="/guide/config">全局配置</router-link></p>
    <div>
      <example demo="dataplugins/daterangepicker1"></example>
    </div>
    <h3>日期控件单独选择开始结束</h3>
    <p>针对一些可选开始或者结束日期的需求，这里可以选择添加<code>separate</code>属性控制可以单独选择。</p>
    <div>
      <example demo="dataplugins/daterangepicker2"></example>
    </div>
    <h3>选择日期时间范围控件</h3>
    <p>由于日期时间控件的点击比较深，所以默认这里使用了<code>separate</code>属性。如果有更合适的方案，希望在github上为我们<a href="https://github.com/heyui/heyui/issues/new" target="_blank">提建议</a>。</p>
    <p>此外，<code>datetime</code>选择器的配置同样适用于范围选择控件。</p>
    <div>
      <example demo="dataplugins/daterangepicker3"></example>
    </div>
    <h3>日期时间范围禁用</h3>
    <div>
      <example demo="dataplugins/daterangepicker4"></example>
    </div>
    <h3>控件开始结束范围控制</h3>
    <div>
      <example demo="dataplugins/daterangepicker5"></example>
    </div>
    <h3>快捷方式</h3>
    <p>快捷方式定义与日期控件一致，同时也可以使用全局配置的方式使用。</p>
    <div>
      <example demo="dataplugins/daterangepicker6"></example>
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
