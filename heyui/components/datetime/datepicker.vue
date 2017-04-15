<template>
  <div :class="dateCls">
    <input type="text" v-model="nowDate" @change="changeEvent" :placeholder="placeholder" :disabled="disabled"/>
    <i class="h-icon-calendar"></i>
    <div :class="datePickerCls" class="h-date-picker">
    <div class="h-date-container">
      <div v-if="shortcuts.length>0" class="h-date-shortcut">
        <div v-for="s of shortcuts" @click="setShortcutValue(s)">{{s.title}}</div>
      </div>
      <div class="h-date-content">
        <div class="h-date-header">
          <span class="h-date-year-left-picker" @click="updateView('year', -1)"><i class="h-icon-left"></i><i class="h-icon-left"></i></span>
          <span class="h-date-month-left-picker" @click="updateView('month', -1)" v-show="view=='date'"><i class="h-icon-left"></i></span>
          <span class="h-date-header-show" @click="changeView('year')" v-if="view != 'year'">{{nowView.year()}}年</span>
          <span class="h-date-header-show" v-if="view == 'year'">{{nowView.year()-6}}&nbsp;&nbsp;-&nbsp;&nbsp;{{nowView.year()+5}}年</span>
          <span class="h-date-header-show" @click="changeView('month')" v-show="view=='date'">{{nowView.month()}}月</span>
          <span class="h-date-year-right-picker" @click="updateView('year', 1)"><i class="h-icon-right"></i><i class="h-icon-right"></i></span>
          <span class="h-date-month-right-picker" @click="updateView('month', 1)" v-show="view=='date'"><i class="h-icon-right"></i></span>
        </div>
        <div :class="dateBodyCls">
          <div class="h-date-body-weeks" v-if="view=='date'"><span v-for="w of weeks">{{w}}</span></div>
          <div class="h-date-body-pickers"><span v-for="d of dates" :class="{'h-date-not-now-day': !d.isNowDays, 'h-date-today':d.isToday, 'h-date-selected': isSelected(d), 'h-date-disabled': d.disabled}" @click="chooseDate(d)">{{d.show}}</span></div>
        </div>
      </div>
    </div>
      
    </div>
  </div>
</template>
<script>
import manba from 'manba';

import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

const prefix = 'h-datetime';
const dateprefix = 'h-date';

const view_type = ['year', 'month', 'date'];

const genData = (param) => {
  let {date, type, show, vm, isNowDays} = param;
  let disabled = false;
  if(utils.isObject(vm.option)){
    if(vm.option.start)disabled = date.distance(vm.option.start, type) < 0;
    if(vm.option.end && !disabled)disabled = date.distance(vm.option.end, type) > 0;
    if(vm.option.disabled && !disabled)disabled = vm.option.disabled.call(null,date);
  }
  return {
      show: show,
      string: date.format(vm.nowFormat),
      disabled,
      isToday: date.distance(vm.today, type) == 0,
      isNowDays
    }
}

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'date'  //year, month, week
    },
    option: Object,
    format: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: String
  },
  data() {
    return {
      nowDate: '',
      nowView: manba(),
      nowFormat: this.format || config.format[this.type],
      today: manba(),
      view: this.type =='week'?'date':this.type, //month //year
    };
  },
  watch: {
    value() {
      this.parse(this.value);
    }
  },
  beforeMount() {
    this.parse(this.value);
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el.querySelector(`.${prefix}>input`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        triggerOnce: true,
        content,
        container: document.body
      });
    });
  },
  methods: {
    setShortcutValue(s){
      let value = s.value.call(null);
      this.parse(value);
      this.setvalue(this.nowDate);
    },
    changeView(view){
      this.view = view;
    },
    updateView(typeString, num){
      let type = typeString == 'month'? manba.MONTH : manba.YEAR;
      if(this.view == 'year'){
        num = num*12;
      }
      this.nowView = manba(this.nowView.add(num, type).time());
    },
    changeEvent(event){
      let value = event.target.value;
      // log(value);
      this.parse(value);
      this.setvalue(this.nowDate);
    },
    isSelected(d) {
      return this.nowDate == d.string;
    },
    parse(value) {
      try{
        this.nowView = manba(value);
        this.nowDate = this.nowView.format(this.nowFormat);
      }catch(err){
        // log.error(err);
        this.nowView = manba();
        this.nowDate = '';
      }
    },
    chooseDate(d) {
      if (this.view == this.type) {
        this.setvalue(d.string);
      } else {
        this.nowView = manba(d.string);
        this.view = view_type[view_type.indexOf(this.view)+1];
      }
    },
    setvalue(string) {
      let value = '';
      if (string != ''){
        value = manba(string).format(this.nowFormat);
      }
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      // if (this.mutiple) {
      //   this.dropdown.popperInstance.update();
      // } else {
      this.dropdown.hide();
      // }
    }
  },
  filters: {
    showText(key, value) {
      return value.includes(key);
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
    shortcuts() {
      let shortcuts = [];
      let shortcutsConfig = null;
      if(this.option && this.option.shortcuts){
        shortcutsConfig = this.option.shortcuts;
      }
      if(utils.isArray(shortcutsConfig)){
        for(let s of shortcutsConfig){
          if(utils.isString(s)){
            shortcuts.push(config.datePickerOptions.shortcuts[s]);
          }else if(utils.isObject(s)){
            shortcuts.push(s);
          }
        }
      }
      return shortcuts;
    },
    dates() {
      let nowDate = this.nowView;
      let today = manba();
      log(1);
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
      }
    },
    dateCls() {
      return {
        'h-input': true,
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-disabled`]: this.disabled
      }
    },
    datePickerCls() {
      return {
        [`${prefix}-has-shortcut`]: this.shortcuts.length>0
      }
    }
  }
};
</script>