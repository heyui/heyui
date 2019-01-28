<template>
  <div class="doc">
    <h2>DateFullRangePicker</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-datefullpicker</code>. </p>
    
    <h4>Super date picker</h4>
    <example demo="dataplugins/daterangepicker8"></example>

    
    <h3>DateFullRangePicker Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>defaultType</td>
        <td>Default view</td>
        <td>String</td>
        <td>year, month, week, date</td>
        <td>week</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>option</td>
        <td>Configuration items, see the options below for details</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>noBorder</td>
        <td>Whether there is a border, suitable for the drop-down selection of text</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>Show the default prompt</td>
        <td>String</td>
        <td>-</td>
        <td>please select</td>
      </tr>
      <tr>
        <td>startWeek</td>
        <td>When choosing a week, set the starting day of the week</td>
        <td>Number</td>
        <td>1, 2, 3, 4, 5, 6, 7</td>
        <td>Global Configuration <code>datepicker.startWeek</code>, For details, please go to <router-link to="/en/component/config">Global Configuration</router-link></td>
      </tr>
    </table>


    <h3>DateRangePicker Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>input</td>
        <td>Data changes</td>
      </tr>
      <tr>
        <td>change</td>
        <td>Data changes</td>
      </tr>
      <tr>
        <td>confirm</td>
        <td>Click OK button</td>
      </tr>
      <tr>
        <td>clear</td>
        <td>Click on the clear button</td>
      </tr>
    </table>
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
