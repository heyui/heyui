<template>
  <div class="h-date-content">
    <div class="h-date-header"
         v-if="type != 'time'">
      <span class="h-date-year-left-picker"
            @click="updateView('default', -1)"><i class="h-icon-left"></i><i class="h-icon-left"></i></span>
      <span class="h-date-month-left-picker"
            @click="updateView('month', -1)"
            v-show="view=='date'||view=='week'"><i class="h-icon-left"></i></span>
      <span class="h-date-header-show"
            @click="changeView('year')"
            v-if="view != 'year'">{{nowView.year()}}年</span>
      <span class="h-date-header-show"
            v-if="view == 'year'">{{nowView.year()-6}}&nbsp;&nbsp;-&nbsp;&nbsp;{{nowView.year()+5}}年</span>
      <span class="h-date-header-show"
            @click="changeView('month')"
            v-show="view != 'year' && view != 'month'">{{nowView.month()}}月</span>
      <span class="h-date-header-show"
            @click="changeView('date')"
            v-show="view == 'hour' || view == 'minute'">{{nowView.date()}}日</span>
      <span class="h-date-year-right-picker"
            @click="updateView('default', 1)"><i class="h-icon-right"></i><i class="h-icon-right"></i></span>
      <span class="h-date-month-right-picker"
            @click="updateView('month', 1)"
            v-show="view=='date'||view=='week'"><i class="h-icon-right"></i></span>
    </div>
    <div class="h-date-header"
         v-show="view=='minute'">
      <span class="h-date-month-left-picker"
            @click="updateView('hour', -1)"><i class="h-icon-left"></i></span>
      <span class="h-date-header-show"
            @click="changeView('hour')">{{nowView | hoursString}}</span>
      <span class="h-date-month-right-picker"
            @click="updateView('hour', 1)"><i class="h-icon-right"></i></span>
    </div>
    <div :class="dateBodyCls">
      <div class="h-date-body-weeks"
           v-if="view=='date'"><span v-for="w of weeks" :key="w">{{w}}</span></div>
      <div class="h-date-body-pickers">
        <span v-for="d of dates" :key="d"
              :string="d.string"
              :class="{'h-date-not-now-day': !d.isNowDays, 'h-date-today':d.isToday, 'h-date-selected': isSelected(d), 'h-date-range-selected': isRangeSelected(d), 'h-date-disabled': d.disabled}"
              @click="chooseDate(d)">{{d.show}}</span></div>
    </div>
  </div>
</template>
<script>
import manba from 'manba';
import config from '../../utils/config';
import utils from '../../utils/utils';

const dateprefix = 'h-date';

const viewType = ['year', 'month', 'date', 'hour', 'minute', 'second'];
const weekViewType = ['year', 'month', 'week'];

const options = config.getOption('datepicker');

const startView = {
  year: 'year',
  month: 'month',
  date: 'date',
  week: 'week',
  datetime: 'date',
  datehour: 'date',
  time: 'hour',
};

const endView = {
  year: 'year',
  month: 'month',
  date: 'date',
  week: 'week',
  datetime: 'minute',
  datehour: 'hour',
  time: 'minute',
};

const DateFormatLength = {
  year: 4,
  month: 7,
  date: 10,
  week: 10,
  hour: 13,
  minute: 16
};

const genData = (param) => {
  let { date, type, show, vm, isNowDays } = param;
  let disabled = false;
  if (utils.isObject(vm.option)) {
    if (vm.option.start) disabled = date.distance(vm.option.start, type) < 0;
    if (vm.option.end && !disabled) disabled = date.distance(vm.option.end, type) > 0;
    if (vm.option.disabled && !disabled) disabled = vm.option.disabled.call(null, date);
  }
  return {
    date,
    show,
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
    value: [Object, String],
    nowView: Object,
    range: String,
    rangeEnd: String,
  },
  data() {
    return {
      options: utils.extend({}, options.datetimeOptions, this.option),
      today: manba(),
      view: startView[this.type], //month //year
    };
  },
  filters: {
    hoursString(d) {
      return `${utils.padLeft(d.hours(), 2)}:00`;
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.range) {
        this.$el.addEventListener("mouseenter", (event) => {
          if (this.view == 'date' && !!this.value.start && !this.value.end) {
            let target = event.target;
            if (target.tagName == 'SPAN') {
              let string = target.getAttribute('string');
              if (string) this.$emit('updateRangeEnd', string);
            }
          }
        }, true);
        this.$el.addEventListener("mouseout", () => {
          if (this.view == 'date' && !!this.value.start && !this.value.end) {
            this.$emit('updateRangeEnd', '');
          }
        }, true);
      }
    });
  },
  methods: {
    changeView(view) {
      this.view = view;
      this.$emit('changeView');
    },
    resetView(){
      this.view = startView[this.type];
    },
    updateView(typeString, num) {
      let type = manba.DAY;
      if (typeString == 'month') {
        type = manba.MONTH;
      } else if (typeString == 'hour') {
        type = manba.HOUR;
      } else {
        type = manba.YEAR;
        if (this.view == 'hour') {
          type = manba.DAY;
        } else if (this.view == 'minute') {
          type = manba.DAY;
        } else if (this.view == 'year') {
          num = num * 12;
          type = manba.YEAR;
        }
      }
      let nowView = manba(this.nowView).add(num, type);
      this.$emit('updateView', nowView.time(), this.range);
    },
    isSelected(d) {
      let length = DateFormatLength[this.view];
      if (utils.isObject(this.value)) {
        return this.value.start == d.string || this.value.end == d.string;
      }
      return this.value.substring(0, length) == d.string.substring(0, length)
    },
    isRangeSelected(d) {
      if (this.range && utils.isObject(this.value) && !!this.value.start && !!this.rangeEnd) {
        return (this.value.start < d.string && this.rangeEnd > d.string) || (this.value.start > d.string && this.rangeEnd < d.string);
      }
      return false;
    },
    chooseDate(d) {
      if (this.view == endView[this.type]) {
        this.setvalue(d.date, true);
      } else {

        let date = d.date;
        //除了month和year点击，其他都直接完成赋值
        if (!(this.options.start || this.options.end || this.options.disabled)) {
          if(this.value){
            date = manba(this.value);
            switch(this.view){
              case 'year': 
                date.year(d.date.year());
                break;
              case 'month': 
                date.month(d.date.month());
                if(date.month() > d.date.month()){
                  date.date(1);
                  date = date.add(-1, manba.DAY);
                }
                break;
              case 'date': 
                date.date(d.date.date());
                break;
              case 'hour': 
                date.hours(d.date.hours());
                break;
              case 'minutes': 
                date.minutes(d.date.minutes());
                break;
            }
          }
          
          
          this.setvalue(date, false);
        }
        // if(this.type == 'week' && this.view == 'year'){
        //   this.view = 'week';
        // } else {
          
        // }
        let viewTypes = viewType;
        if(this.type == 'week'){
          viewTypes = weekViewType;
        }
        let index = viewTypes.indexOf(this.view);
        this.view = viewTypes[index + 1];
        this.$emit('updateView', date.time(), this.range);
      }
    },
    setvalue(date, isEnd = false) {
      let value = '';
      if (!utils.isNull(date)) {
        value = manba(date).format(this.format);
      }
      this.$emit('input', value, isEnd, this.range);
    }
  },
  computed: {
    dateBodyCls() {
      return {
        [`${dateprefix}-body`]: true,
        [`${dateprefix}-body-${this.view}`]: true
      }
    },
    weeks() {
      return options.weeks;
    },
    dates() {
      let nowDate = this.nowView;
      if (this.view == 'date') {
        let lastdayofmonth = nowDate.endOf(manba.MONTH);
        let firstdayofmonth = nowDate.startOf(manba.MONTH);
        let startDay = firstdayofmonth.day();
        startDay == 0 ? 6 : startDay--;
        let lastdayoflastmonth = firstdayofmonth.add(-1, manba.DAY);
        let dates = [];
        let lastMonthDays = lastdayoflastmonth.date() - startDay;
        for (let i = lastMonthDays; i <= lastdayoflastmonth.date(); i++) {
          dates.push(genData({
            date: manba([lastdayoflastmonth.year(), lastdayoflastmonth.month(), i]),
            type: manba.DAY,
            show: i,
            vm: this,
            isNowDays: false
          }));
        }
        for (let i = 1; i <= lastdayofmonth.date(); i++) {
          dates.push(genData({
            date: manba([lastdayofmonth.year(), lastdayofmonth.month(), i]),
            type: manba.DAY,
            show: i,
            vm: this,
            isNowDays: true
          }));
        }
        let nextMonth = lastdayofmonth.add(1, manba.DAY);
        let nextMonthDays = (7 * 6 - dates.length);
        for (let i = 1; i <= nextMonthDays; i++) {
          dates.push(genData({
            date: manba([nextMonth.year(), nextMonth.month(), i]),
            type: manba.DAY,
            show: i,
            vm: this,
            isNowDays: false
          }));
        }
        return dates;
      } else if (this.view == 'month') {
        let dates = [];
        for (let i = 1; i <= 12; i++) {
          dates.push(genData({
            date: manba([nowDate.year(), i, 1]),
            type: manba.MONTH,
            show: options.months[i - 1],
            vm: this,
            isNowDays: true
          }));
        }
        return dates;
      } else if (this.view == 'year') {
        let dates = [];
        let nowYear = nowDate.year();
        for (let i = nowYear - 6; i <= nowYear + 5; i++) {
          dates.push(genData({
            date: manba([i, 1, 1]),
            type: manba.YEAR,
            show: i,
            vm: this,
            isNowDays: true
          }));
        }
        return dates;
      } else if (this.view == 'hour') {
        let dates = [];
        let list = [];
        if (utils.isFunction(this.options.hours)) {
          list = this.options.hours.call(null);
        } else {
          list = utils.numList(0, 24, 1);
        }
        for (let i of list) {
          dates.push(genData({
            date: manba(nowDate.time()).hours(i).minutes(0),
            type: manba.HOUR,
            show: utils.padLeft(i, 2) + ':00',
            vm: this,
            isNowDays: true
          }));
        }
        return dates;
      } else if (this.view == 'minute') {
        let dates = [];
        let hour = nowDate.hours();
        let list = [];
        if (utils.isFunction(this.options.minutes)) {
          list = this.options.minutes.call(null, hour);
        } else {
          list = utils.numList(0, 60, this.options.minuteStep);
        }
        for (let i of list) {
          dates.push(genData({
            date: manba(nowDate.time()).minutes(i),
            type: manba.MINUTE,
            show: utils.padLeft(hour, 2) + ':' + utils.padLeft(i, 2),
            vm: this,
            isNowDays: true
          }));
        }
        return dates;
      } else if (this.view == 'week') {
        let dates = [];
        let hour = nowDate.hours();
        let date = nowDate.startOf(manba.MONTH).endOf(manba.WEEK, manba.MONDAY);
        if (date.date() == 7) {
          date = date.startOf(manba.WEEK);
        } else {
          date = date.add(1);
        }
        let month = date.month();
        let index = date.getWeekOfYear(manba.MONDAY);
        while (date.month() == month) {
          dates.push(
            genData({
              date: manba(date.time()),
              type: manba.DAY,
              show: `第${index}周 ${date.format('MM-DD')} 至 ${manba(date).add(6).format('MM-DD')}`,
              vm: this,
              isNowDays: true
          }));
          date = date.add(7);
          index += 1;
        }
        return dates;
      }

      return [];
    }
  }
};
</script>