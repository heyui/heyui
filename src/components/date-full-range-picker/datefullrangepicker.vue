<template>
  <div :class="dateCls">
    <div v-if="noBorder" class="h-datetime-show text-hover">{{ showValue || placeholder }}</div>
    <div v-else class="h-input h-datetime-show">
      <input type="text" class="h-input" :value="showValue" readonly :placeholder="showPlaceholder" />
      <i class="h-icon-calendar"></i>
    </div>
    <div :class="datePickerCls" class="h-date-picker">
      <div class="h-date-container h-date-full-range-container">
        <div v-if="shortcuts.length > 0" class="h-date-shortcut">
          <div v-for="s of shortcuts" :key="s.title" @click="setShortcutValue(s)">{{ s.title }}</div>
        </div>
        <div>
          <Tabs v-model="view" :datas="views" @change="changeView"></Tabs>
        </div>
        <div v-if="view == 'customize'" class="h-date-self-defined">
          <DatePicker
            v-model="nowDate.start"
            :option="{ end: nowDate.end }"
            :type="hasTime ? 'datetime' : 'date'"
            :placeholder="hlang('h.datepicker.startTime')"
            @change="setvalue('start')"
          ></DatePicker>
          -
          <DatePicker
            v-model="nowDate.end"
            placement="bottom-end"
            :option="{ start: nowDate.start }"
            :type="hasTime ? 'datetime' : 'date'"
            :placeholder="hlang('h.datepicker.endTime')"
            @change="setvalue('end')"
          ></DatePicker>
        </div>
        <date-base
          v-else
          ref="datebase"
          :value="nowDate.start"
          :option="option"
          :type="view"
          :start-week="startWeek"
          :now-view="nowView.start"
          format="k"
          @updateView="updateView"
          @updateValue="setvalue"
          @changeView="updateDropdown"
        ></date-base>
      </div>

      <div class="h-date-footer">
        <button type="button" class="h-btn h-btn-text h-btn-s" @click="clear">{{ hlang('h.common.clear') }}</button>
        <button type="button" class="h-btn h-btn-primary h-btn-s" @click="confirm">{{ hlang('h.common.confirm') }}</button>
      </div>
    </div>
  </div>
</template>
<script>
import manba from 'manba';

import config from 'heyui/utils/config';
import utils from 'heyui/utils/utils';
import Dropdown from 'heyui/plugins/dropdown';
import dateBase from 'heyui/components/date-picker/datebase';
import Locale from 'heyui/mixins/locale';

const prefix = 'h-datetime';

export default {
  name: 'HDateFullRangePicker',
  components: {
    dateBase
  },
  emits: ['change', 'update:modelValue', 'confirm', 'clear'],
  mixins: [Locale],
  props: {
    defaultType: {
      type: String,
      default: 'week' // year, month, week
    },
    option: Object,
    placement: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    hasTime: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    modelValue: Object,
    startWeek: {
      type: Number,
      default: () => config.getOption('datepicker.startWeek')
    },
    layout: {
      type: Array,
      default: () => ['year', 'quarter', 'month', 'week', 'date', 'customize']
    }
  },

  data() {
    let format = config.getOption('datepicker.format');
    let defaultType = this.modelValue && this.modelValue.type ? this.modelValue.type : this.defaultType;
    return {
      allviews: {
        year: this.hlang('h.date.year'),
        quarter: this.hlang('h.date.quarter'),
        month: this.hlang('h.date.month'),
        week: this.hlang('h.date.week'),
        date: this.hlang('h.date.day'),
        customize: this.hlang('h.datepicker.customize')
      },
      nowFormat: this.hasTime ? format.datetime : format.date,
      paramName: config.getOption('datepicker.daterangeOptions.paramName'),
      nowDate: {
        start: '',
        end: ''
      },
      nowView: {
        start: manba(),
        end: manba().add(1, manba.MONTH)
      },
      view: defaultType,
      rangeEnd: '',
      isShow: false
    };
  },
  computed: {
    views() {
      let v = {};
      for (let l of this.layout) {
        if (!this.allviews[l]) {
          console.warn(`[HeyUI WARNING] DateFullRangePicker Component: Props ${l} for layout don't exsits.`);
        } else {
          v[l] = this.allviews[l];
        }
      }
      return v;
    },
    showPlaceholder() {
      return this.placeholder || this.hlang('h.datepicker.placeholder');
    },
    showValue() {
      if (!utils.isObject(this.modelValue)) {
        return '';
      }
      if (this.modelValue.type && this.modelValue.start) {
        let date = manba(this.modelValue.start);
        switch (this.modelValue.type) {
          case 'year':
            return date.year();
          case 'month':
            return date.format('YYYY-MM');
          case 'quarter':
            return this.hlang('h.date.show.quarter', {
              year: date.year(),
              quarter: parseInt(date.month() / 3, 10) + 1
            });
          case 'week':
            return this.hlang('h.date.show.week', {
              year: date.year(),
              weeknum: date.getWeekOfYear(this.startWeek),
              daystart: date.format('MM-DD'),
              dayend: manba(date).add(6).format('MM-DD')
            });
        }
      }
      if (!this.modelValue.start && !this.modelValue.end) return '';
      return `${this.modelValue.start || this.hlang('h.datepicker.start')} - ${
        this.modelValue.end ? manba(this.modelValue.end).add(-1).format(this.nowFormat) : this.hlang('h.datepicker.end')
      }`;
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
      };
    },
    datePickerCls() {
      return {
        [`${prefix}-has-shortcut`]: this.shortcuts.length > 0
      };
    },
    startOption() {
      return this.option;
    },
    endOption() {
      return this.option;
    }
  },
  watch: {
    modelValue() {
      this.parse(this.modelValue);
    }
  },
  beforeMount() {
    this.parse(this.modelValue);
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      let el = (this.el = this.$el.querySelector(`.${prefix}>.h-datetime-show`));
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        content,
        placement: this.placement,
        events: {
          show() {
            that.isShow = true;
            that.$nextTick(() => {
              that.initNowView();
            });
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
          if (range == 'end') {
            nowValue = nowValue.add(-1);
          }
          this.nowDate[range] = nowValue.format(this.nowFormat);
          return;
        } catch (evt) {
          console.error(evt);
        }
      }
      this.nowDate[range] = '';
    },
    parse(value) {
      if (this.modelValue && this.modelValue.type) {
        this.view = this.modelValue.type;
      }
      this.parseSingle(value, 'start');
      this.parseSingle(value, 'end');
    },
    initNowView() {
      let start = manba();
      if (this.nowDate.start) {
        start = manba(this.nowDate.start);
      }
      let end = manba();
      if (this.nowDate.end) {
        end = manba(this.nowDate.end);
      }
      this.nowView = {
        start,
        end
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
      if (this.view == 'customize') {
        let value = utils.copy(this.nowDate);
        if (value.end) {
          value.end = manba(value.end).add(1).format(this.nowFormat);
        }
        this.updateValue(value);
        return;
      }
      let value = {};
      let start = manba(string);
      if (this.view == 'week') {
        value = {
          start: start.format(),
          end: start.add(7).format()
        };
      } else if (this.view == 'year') {
        value = {
          start: start.format(),
          end: start.add(1, manba.YEAR).format()
        };
      } else if (this.view == 'month') {
        value = {
          start: start.format(),
          end: start.add(1, manba.MONTH).format()
        };
      } else if (this.view == 'quarter') {
        value = {
          start: start.format(),
          end: start.add(3, manba.MONTH).format()
        };
      } else if (this.view == 'date') {
        value = {
          start: start.format(),
          end: start.add(1, manba.DAY).format()
        };
      }
      if (!value.start) {
        value.start = null;
      }
      if (!value.end) {
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
      };
      this.parse(value);
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdown.update();
    }
  }
};
</script>
