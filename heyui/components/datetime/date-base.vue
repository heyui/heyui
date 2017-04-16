<template>
  <div class="h-date-content">
    <div class="h-date-header" v-if="type != 'time'">
      <span class="h-date-year-left-picker" @click="updateView('default', -1)"><i class="h-icon-left"></i><i class="h-icon-left"></i></span>
      <span class="h-date-month-left-picker" @click="updateView('month', -1)" v-show="view=='date'"><i class="h-icon-left"></i></span>
      <span class="h-date-header-show" @click="changeView('year')" v-if="view != 'year'">{{nowView.year()}}年</span>
      <span class="h-date-header-show" v-if="view == 'year'">{{nowView.year()-6}}&nbsp;&nbsp;-&nbsp;&nbsp;{{nowView.year()+5}}年</span>
      <span class="h-date-header-show" @click="changeView('month')" v-show="view != 'year' && view != 'month'">{{nowView.month()}}月</span>
      <span class="h-date-header-show" @click="changeView('date')" v-show="view == 'hour' || view == 'minute'">{{nowView.date()}}日</span>
      <span class="h-date-year-right-picker" @click="updateView('default', 1)"><i class="h-icon-right"></i><i class="h-icon-right"></i></span>
      <span class="h-date-month-right-picker" @click="updateView('month', 1)" v-show="view=='date'"><i class="h-icon-right"></i></span>
    </div>
    <div class="h-date-header"  v-show="view=='minute'">
      <span class="h-date-month-left-picker" @click="updateView('hour', -1)"><i class="h-icon-left"></i></span>
      <span class="h-date-header-show" @click="changeView('hour')">{{nowView | hoursString}}</span>
      <span class="h-date-month-right-picker" @click="updateView('hour', 1)"><i class="h-icon-right"></i></span>
    </div>
    <div :class="dateBodyCls">
      <div class="h-date-body-weeks" v-if="view=='date'"><span v-for="w of weeks">{{w}}</span></div>
      <div class="h-date-body-pickers"><span v-for="d of dates" :class="{'h-date-not-now-day': !d.isNowDays, 'h-date-today':d.isToday, 'h-date-selected': isSelected(d), 'h-date-disabled': d.disabled}" @click="chooseDate(d)">{{d.show}}</span></div>
    </div>
  </div>
</template>
<script>
import manba from 'manba';
import config from '../../utils/config';
import utils from '../../utils/utils';
const dateprefix = 'h-date';

const view_type = ['year', 'month', 'date', 'hour', 'minute', 'second'];
const start_view = {
  year: 'year',
  month: 'month',
  date: 'date',
  datetime: 'date',
  datehour: 'date',
  time: 'hour',
};

const end_view = {
  year: 'year',
  month: 'month',
  date: 'date',
  datetime: 'minute',
  datehour: 'hour',
  time: 'minute',
};

const genData = (param) => {
  let {date, type, show, vm, isNowDays} = param;
  let disabled = false;
  if(utils.isObject(vm.option)){
    if(vm.option.start)disabled = date.distance(vm.option.start, type) < 0;
    if(vm.option.end && !disabled)disabled = date.distance(vm.option.end, type) > 0;
    if(vm.option.disabled && !disabled)disabled = vm.option.disabled.call(null,date);
  }
  return {
      date,
      show: show,
      string: date.format(vm.format),
      disabled,
      isToday: date.distance(vm.today, type) == 0,
      isNowDays
    }
}

export default {
  props: {
    type: {
      type: [String],
      default: 'date'  //year, month, week
    },
    option: Object,
    format: String,
    value: String,
    nowView: Object
  },
  data() {
    return {
      options: utils.extend({}, config.datetimeOptions, this.option),
      today: manba(),
      view: start_view[this.type], //month //year
    };
  },
  filters: {
    hoursString(d){
      return utils.padLeft(d.hours(), 2) + ':00';
    }
  },
  methods: {
    changeView(view){
      this.view = view;
      this.$emit('changeView');
    },
    updateView(typeString, num){
      let type = manba.YEAR;
      if(typeString == 'month'){
        type = manba.MONTH;
      }else if(this.view == 'hour'){
        type = manba.DAY;
      }else if(this.view == 'minute'){
        type = manba.HOUR;
      }
      if(this.view == 'year'){
        num = num*12;
      }
      let nowView = this.nowView.add(num, type).time();
      this.$emit('updateView', nowView);
    },
    isSelected(d) {
      return this.value == d.string;
    },
    chooseDate(d) {
      if (this.view == end_view[this.type]) {
        this.setvalue(d.date);
      } else {
        let index = view_type.indexOf(this.view);
        if(index > 1){
          this.setvalue(d.date , false);
        }
        this.view = view_type[index+1];
        this.$emit('updateView', d.date);
      }
    },
    setvalue(date , hide = true) {
      let value = '';
      if (!utils.isNull(date)){
        value = manba(date).format(this.format);
      }
      this.$emit('input', value, hide);
    }
  },
  computed: {
    dateBodyCls(){
      return {
        [`${dateprefix}-body`]: true,
        [`${dateprefix}-body-${this.view}`]: true
      }
    },
    weeks() {
      return config.weeks;
    },
    dates() {
      let nowDate = this.nowView;
      let today = manba();
      if(this.view == 'date'){
        let lastdayofmonth = nowDate.endOf(manba.MONTH);
        let firstdayofmonth = nowDate.startOf(manba.MONTH);
        let startDay = firstdayofmonth.day();
        startDay == 0 ? 6 : startDay--;
        let lastdayoflastmonth = firstdayofmonth.add(-1, manba.DAY);
        let dates = [];
        let lastMonthDays = lastdayoflastmonth.date() - startDay;
        for(let i = lastMonthDays; i <= lastdayoflastmonth.date(); i++){
          dates.push(genData({
            date: manba([lastdayoflastmonth.year(), lastdayoflastmonth.month(), i]),
            type: manba.DAY,
            show: i, 
            vm: this, 
            isNowDays: false
          }));
        }
        for(let i = 1; i <= lastdayofmonth.date(); i++){
          dates.push(genData({
            date: manba([lastdayofmonth.year(), lastdayofmonth.month(), i]),
            type: manba.DAY,
            show: i, 
            vm: this, 
            isNowDays: true
          }));
        }
        let nextMonth = lastdayofmonth.add(1, manba.DAY);
        let nextMonthDays = (7*6 - dates.length);
        for(let i = 1; i <= nextMonthDays; i++){
          dates.push(genData({
            date: manba([nextMonth.year(), nextMonth.month(), i]),
            type: manba.DAY,
            show: i, 
            vm: this, 
            isNowDays: false
          }));
        }
        return dates;
      }else if(this.view == 'month'){
        let dates = [];
        for(let i = 1; i <= 12; i++){
          dates.push(genData({
            date: manba([nowDate.year(), i, 1]),
            type: manba.MONTH,
            show: config.months[i-1], 
            vm: this, 
            isNowDays: true
          }));
        }
        return dates;
      }else if(this.view == 'year'){
        let dates = [];
        let nowYear = nowDate.year();
        for(let i = nowYear-6; i <= nowYear + 5; i++){
          dates.push(genData({
            date: manba([i, 1, 1]),
            type: manba.YEAR,
            show: i, 
            vm: this, 
            isNowDays: true
          }));
        }
        return dates;
      }else if(this.view == 'hour'){
        let dates = [];
        let list = [];
        if(utils.isFunction(this.options.hours)){
          list = this.options.hours.call(null);
        }else{
          list = utils.numList(0, 24, 1);
        }
        for(let i of list){
          dates.push(genData({
            date: manba(nowDate.time()).hours(i).minutes(0),
            type: manba.HOUR,
            show: utils.padLeft(i, 2) + ':00', 
            vm: this, 
            isNowDays: true
          }));
        }
        return dates;
      }else if(this.view == 'minute'){
        let dates = [];
        let hour = nowDate.hours();
        let list = [];
        if(utils.isFunction(this.options.minutes)){
          list = this.options.minutes.call(null, hour);
        }else{
          list = utils.numList(0, 60, this.options.minuteStep);
        }
        for(let i of list){
          dates.push(genData({
            date: manba(nowDate.time()).minutes(i),
            type: manba.MINUTE,
            show: utils.padLeft(hour, 2) + ':' + utils.padLeft(i, 2), 
            vm: this, 
            isNowDays: true
          }));
        }
        return dates;
      }

      return [];
    }
  }
};
</script>