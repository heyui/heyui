<template>
  <div :class="dateCls">
    <div v-if="noBorder" class="h-datetime-show text-hover">{{showValue||placeholder}}</div>
    <div v-else class="h-input h-datetime-show">
      <input type="text"
             :value="showValue"
             readonly
             :placeholder="placeholder"
             />
      <i class="h-icon-calendar"></i>
    </div>
    <div :class="datePickerCls"
         class="h-date-picker">
      <div class="h-date-container h-date-full-range-container">
        <div v-if="shortcuts.length>0"
             class="h-date-shortcut">
          <div v-for="s of shortcuts"
               @click="setShortcutValue(s)" :key="s.title">{{s.title}}</div>
        </div>
        <div><Tabs :datas="views" v-model="view" @change="changeView"></Tabs></div>
        <div v-if="view == 'date'" class="h-date-self-defined">
          <DatePicker type="text" v-model="nowDate.start" @input="setvalue('start')" :option="{end: nowDate.end}" :type="hasTime?'datetime':'date'" placeholder="开始时间"></DatePicker>
          -
          <DatePicker placement="bottom-end" type="text" v-model="nowDate.end" @input="setvalue('end')" :option="{start: nowDate.start}" :type="hasTime?'datetime':'date'" placeholder="结束时间"></DatePicker>
        </div>
        <date-base v-else ref="datebase"
                   :value="nowDate.start"
                   :option="option"
                   :type="view"
                   :startWeek = "startWeek"
                   :now-view="nowView.start"
                   format="k"
                   @updateView="updateView"
                   @input="setvalue"
                   @changeView="updateDropdown"></date-base>
      </div>
  
      <div class="h-date-footer">
        <button class="h-btn h-btn-text h-btn-s"
                @click="clear">清除</button>
        <button class="h-btn h-btn-primary h-btn-s"
                @click="confirm">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import manba from 'manba';

import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';
import dateBase from './date-base';

const prefix = 'h-datetime';

const manbaType = {
  year: manba.YEAR,
  month: manba.MONTH,
  date: manba.DAY,
  datetime: manba.MINUTE,
  time: manba.MINUTE,
  datehour: manba.HOUR
}

export default {
  name: 'DateFullRangePicker',
  props: {
    defaultType: {
      type: [String],
      default: 'week'  //year, month, week
    },
    option: Object,
    noBorder: {
      type: Boolean,
      default: false
    },
    hasTime: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择日期"
    },
    value: Object,
    startWeek: {
      type: Number,
      default: manba.MONDAY
    }
  },
  watch: {
    value() {
      this.parse(this.value);
    }
  },
  data() {
    let format = config.getOption('datepicker.format');
    return {
      nowFormat: this.hasTime? format.datetime : format.date,
      paramName: config.getOption('datepicker.daterangeOptions.paramName'),
      nowDate: {
        start: '',
        end: ''
      },
      nowView: {
        start: manba(),
        end: manba().add(1, manba.MONTH),
      },
      views: {
        year: '年',
        quarter: '季度',
        month: '月',
        week: '周',
        date: '自定义'
      },
      view: this.defaultType || 'year',
      rangeEnd: '',
      isShow: false
    };
  },
  beforeMount() {
    this.parse(this.value);
  },
  beforeDestroy() {
    let el = this.el;
    if(el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
    }
    if(this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      let el = this.el = this.$el.querySelector(`.${prefix}>.h-datetime-show`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        content,
        events: {
          show() {
            that.isShow = true;
            that.$nextTick(()=>{
              that.initNowView()
            })
          }
        }
      });
    });
  },
  methods: {
    setShortcutValue(s) {
      let value = s.value.call(null);
      this.parse(value);
      this.updateValue(this.nowDate);
      this.hide();
    },
    changeView() {
      this.initNowView();
      this.updateDropdown();
    },
    updateView(value) {
      this.nowView.start = manba(value);
      this.dropdown.update();
    },
    updateDropdown() {
      this.dropdown.update();
    },
    parseSingle(value, range) {
      if (utils.isObject(value) && value[this.paramName[range]]) {
        try {
          let nowValue = manba(value[this.paramName[range]]);
          if(range == 'end'){
            nowValue = nowValue.add(-1);
          }
          this.nowDate[range] = nowValue.format(this.nowFormat);
          return;
        } catch (evt) {
        }
      }
      this.nowDate[range] = '';
    },
    parse(value) {
      this.parseSingle(value, 'start');
      this.parseSingle(value, 'end');
    },
    initNowView() {
      let start = manba();
      if (!!this.nowDate.start) {
        start = manba(this.nowDate.start);
      }
      let end = manba();
      if (!!this.nowDate.end) {
        end = manba(this.nowDate.end);
      }
      let endRange = 1;
      this.nowView = {
        start,
        end,
      };
    },
    hide() {
      this.dropdown.hide();
    },
    confirm() {
      this.$emit('confirm');
      this.hide();
    },
    clear() {
      this.$emit('clear');
      this.updateValue({});
      this.initNowView();
      this.hide();
    },
    setvalue(string, isEnd = false) {
      string = string || '';
      if( this.view == 'date' ){
        value = utils.copy(this.nowDate);
        if(value.end){
          value.end = manba(value.end).add(1).format(this.nowFormat);
        }
        this.updateValue(value);
        return;
      }
      let value = {};
      let start = manba(string);
      if (this.view == 'week'){
        value = {
          start: start.format(),
          end: start.add(7).format(),
        }
      } else if (this.view == 'year') {
        value = {
          start: start.format(),
          end: start.add(1, manba.YEAR).format(),
        }
      } else if (this.view == 'month') {
        value = {
          start: start.format(),
          end: start.add(1, manba.MONTH).format(),
        }
      } else if (this.view == 'quarter') {
        value = {
          start: start.format(),
          end: start.add(3, manba.MONTH).format(),
        }
      }
      if(!value.start){
        value.start = null;
      }
      if(!value.end){
        value.end = null;
      }
      this.updateValue(value);
      if (isEnd) {
        this.hide();
      }
    },
    updateValue(value) {
      value = {
        [this.paramName.start]: value.start,
        [this.paramName.end]: value.end,
        type: this.view
      }
      this.parse(value);
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdown.update();
    }
  },
  computed: {
    showValue() {
      if (!utils.isObject(this.value)) {
        return '';
      }
      if (this.value.type && this.value.start) {
        let date = manba(this.value.start);
        switch(this.value.type) {
          case 'year': 
            return date.year();
          case 'month': 
            return date.format('YYYY-MM');
          case 'quarter': 
            return `${date.year()}年 第${parseInt(date.month()/3, 10)+1}季度`;
          case 'week': 
            return `${date.year()}年 第${date.getWeekOfYear(manba.MONDAY)}周 ${date.format('MM-DD')} 至 ${manba(date).add(6).format('MM-DD')}`;
        }
      }
      if(!this.value.start && !this.value.end) return '';
      return `${this.value.start || '不限'} - ${this.value.end?manba(this.value.end).add(-1).format(this.nowFormat):'不限'}`;
    },
    shortcuts() {
      let shortcuts = [];
      let shortcutsConfig = null;
      if (this.option && this.option.shortcuts) {
        shortcutsConfig = this.option.shortcuts;
      }
      if (utils.isArray(shortcutsConfig)) {
        for (let s of shortcutsConfig) {
          if (utils.isString(s)) {
            shortcuts.push(config.getOption('datepicker.shortcuts')[s]);
          } else if (utils.isObject(s)) {
            shortcuts.push(s);
          }
        }
      }
      return shortcuts;
    },
    dateCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-full-range`]: true,
        [`${prefix}-input-border`]: !this.noBorder
      }
    },
    datePickerCls() {
      return {
        [`${prefix}-has-shortcut`]: this.shortcuts.length > 0
      }
    },
    startOption() {
      return this.option;
    },
    endOption() {
      return this.option;
    }
  },
  components: {
    dateBase
  }
};
</script>