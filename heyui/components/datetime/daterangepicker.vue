<template>
  <div :class="dateCls">
    <div class="h-input h-datetime-show">
      <input type="text"
             :value="show"
             readonly
             @change="changeEvent"
             :placeholder="placeholder"
             :disabled="disabled" />
      <i class="h-icon-calendar"></i>
    </div>
    <div v-if="!disabled" :class="datePickerCls"
         class="h-date-picker">
      <div class="h-date-container h-date-range-container">
        <div v-if="shortcuts.length>0"
             class="h-date-shortcut">
          <div v-for="s of shortcuts"
               @click="setShortcutValue(s)">{{s.title}}</div>
        </div>
        <date-base ref="start"
                   :value="nowDate"
                   range="start"
                   :option="startOption"
                   :type="type"
                   :now-view="nowView.start"
                   :format="nowFormat"
                   @updateView="updateView"
                   @input="setvalue"
                   @changeView="changeView"
                   :rangeEnd="rangeEnd"
                   :separate="isSeparate"
                   @updateRangeEnd="updateRangeEnd"></date-base>
        <date-base ref="end"
                   :value="nowDate"
                   range="end"
                   :option="endOption"
                   :type="type"
                   :now-view="nowView.end"
                   :format="nowFormat"
                   @updateView="updateView"
                   @input="setvalue"
                   @changeView="changeView"
                   :rangeEnd="rangeEnd"
                   :separate="isSeparate"
                   @updateRangeEnd="updateRangeEnd"></date-base>
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
  datetime:
  manba.MINUTE,
  time: manba.MINUTE,
  datehour: manba.HOUR
}

const options = config.daterangeOptions;
const paramName = options.paramName;

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
    hasSeconds: {
      type: Boolean,
      default: false
    },
    separate: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: Object
  },
  data() {
    let format = this.format || config.format[this.type];
    if (this.type == 'datetime' && this.hasSeconds) {
      format = config.format.datetimesecond;
    }
    return {
      nowDate: {
        start: '',
        end: ''
      },
      separateOption: {
        start: utils.extend({}, this.option),
        end: utils.extend({}, this.option)
      },
      isSeparate: this.type == "datetime" || this.separate,
      nowView: {
        start: manba(),
        end: manba().add(1, manba.MONTH),
      },
      rangeEnd: '',
      nowFormat: format
    };
  },
  beforeMount() {
    this.parse(this.value);
    this.initNowView();
  },
  mounted() {
    let that = this;
    if (!this.disabled) {
      this.$nextTick(() => {
        let el = this.$el.querySelector(`.${prefix}>.h-datetime-show`);
        let content = this.$el.querySelector(`.h-date-picker`);
        this.dropdown = new Dropdown(el, {
          trigger: 'click',
          triggerOnce: true,
          content,
          container: document.body,
          events: {
            show() {
              that.initNowView()
            }
          }
        });
      });
    }
  },
  methods: {
    updateRangeEnd(string) {
      this.rangeEnd = string;
    },
    setShortcutValue(s) {
      let value = s.value.call(null);
      this.parse(value);
      this.updateValue(this.nowDate);
      this.hide();
    },
    updateView(value, rangeType) {
      this.nowView[rangeType] = manba(value);
      if (!this.isSeparate) {
        if (rangeType == 'end') {
          this.nowView.start = manba(value).add(-1, manba.MONTH);
        } else {
          this.nowView.end = manba(value).add(1, manba.MONTH);
        }
      }
      this.dropdown.popperInstance.update();
    },
    changeView() {
      this.dropdown.popperInstance.update();
    },
    changeEvent(event) {
      // let value = event.target.value;
      // this.parse(value);
      // if (utils.isObject(this.option) && this.type != "time") {
      //   let disabled = false;
      //   let type = manbaType[this.type];
      //   if (this.option.start && this.nowView.distance(this.option.start, type) < 0) disabled = this.option.start;
      //   if (this.option.end && !disabled && this.nowView.distance(this.option.end, type) > 0) disabled = this.option.end;
      //   if (this.option.disabled && this.option.disabled.call(null, disabled || this.nowView)) disabled = '';
      //   if (disabled !== false) {
      //     this.parse(disabled);
      //   }
      // }
    },
    parseSingle(value, range) {
      if (utils.isObject(value) && value[paramName[range]]) {
        try {
          let nowValue = manba(value[paramName[range]]);
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
      this.rangeEnd = this.nowDate.end;
    },
    initNowView() {
      let start = manba();
      if (!!this.nowDate.start) {
        start = manba(this.nowDate.start);
      }
      let endRange = this.isSeparate ? 0 : 1;
      this.nowView = {
        start,
        end: manba(start).add(endRange, manba.MONTH),
      };
    },
    hide() {
      this.dropdown.hide();
    },
    clear() {
      this.updateValue({});
      this.separateOption = {
        start: utils.extend({}, this.option),
        end: utils.extend({}, this.option)
      };
      this.initNowView();
    },
    setvalue(string, isEnd = false, range) {
      string = string || '';
      let lastDate = utils.copy(this.nowDate);
      if (this.isSeparate) {
        lastDate[range] = string;
        let other = range == 'start' ? "end" : "start";
        this.separateOption[other][range] = string;
        this.$refs[other].updateView("minute", 0);
      } else {
        if (!lastDate.start) {
          lastDate.start = string;
        } else if (!lastDate.end) {
          lastDate.end = string;
        } else {
          lastDate.start = '';
          lastDate.end = '';
        }
      }
      if (isEnd && lastDate.start && lastDate.end && lastDate.start > lastDate.end) {
        let start = lastDate.start;
        lastDate.start = lastDate.end;
        lastDate.end = start;
      }

      this.updateValue(lastDate);
    },
    updateValue(value) {
      value = {
        [paramName.start]: value.start,
        [paramName.end]: value.end,
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
    show() {
      if (!utils.isObject(this.value)) {
        return '';
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
            shortcuts.push(config.datePickerOptions.shortcuts[s]);
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
        [`${prefix}-range`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-disabled`]: this.disabled
      }
    },
    datePickerCls() {
      return {
        [`${prefix}-has-shortcut`]: this.shortcuts.length > 0
      }
    },
    startOption() {
      return this.isSeparate ? this.separateOption.start : this.option;
    },
    endOption() {
      return this.isSeparate ? this.separateOption.end : this.option;
    }
  },
  components: {
    dateBase
  }
};
</script>