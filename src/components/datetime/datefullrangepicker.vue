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
               @click="setShortcutValue(s)" :key="s">{{s.title}}</div>
        </div>
        <div><Tabs :datas="views" v-model="view" @change="changeView"></Tabs></div>
        <div v-if="view == 'date'" class="h-date-self-defined">
          <DatePicker type="text" v-model="nowDate.start" @input="setvalue('start')" :option="{end: nowDate.end}" :type="hasTime?'datetime':'date'" placeholder="请选择开始时间"></DatePicker>
          -
          <DatePicker type="text" v-model="nowDate.end" @input="setvalue('end')" :option="{start: nowDate.start}" :type="hasTime?'datetime':'date'" placeholder="请选择结束时间"></DatePicker>
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
                @click="hide">确定</button>
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
      default: "请选择"
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
        month: '月',
        season: '季度',
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
  mounted() {
    let that = this;
    this.$nextTick(() => {
      let el = this.$el.querySelector(`.${prefix}>.h-datetime-show`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        content,
        container: document.body,
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
      this.updateView;
    },
    updateView(value) {
      this.nowView.start = manba(value);
      this.dropdown.popperInstance.update();
    },
    updateDropdown() {
      if(this.dropdown.popperInstance)this.dropdown.popperInstance.update();
    },
    parseSingle(value, range) {
      if (utils.isObject(value) && value[this.paramName[range]]) {
        try {
          let nowValue = manba(value[this.paramName[range]]);
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
    clear() {
      this.updateValue({});
      this.initNowView();
    },
    setvalue(string) {
      string = string || '';
      if( this.view == 'date' ){
        value = utils.copy(this.nowDate);
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
      } else if (this.view == 'season') {
        value = {
          start: start.format(),
          end: start.add(3, manba.MONTH).format(),
        }
      }
      this.updateValue(value);
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
      this.dropdown.popperInstance.update();
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
          case 'season': 
            return `${date.year()}年 第${parseInt(date.month()/3, 10)}季度`;
          case 'week': 
            return `${date.year()}年 第${date.getWeekOfYear(manba.MONDAY)}周`;
        }
      }
      return `${this.value.start || '不限'} - ${this.value.end || '不限'}`;
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