<template>
  <div :class="dateCls">
    <div v-if="noBorder" class="h-datetime-show text-hover">{{showDate||showPlaceholder}}</div>
    <div v-else class="h-input h-datetime-show">
      <input type="text"
        class="h-input"
        :value="show"
        readonly
        :placeholder="showPlaceholder"
        :disabled="disabled" />
      <i class="h-icon-calendar"></i>
    </div>
    <div :class="datePickerCls"
         class="h-date-picker">
      <div class="h-date-container h-date-range-container" v-if="isShow">
        <div v-if="shortcuts.length>0"
             class="h-date-shortcut">
          <div v-for="s of shortcuts"
               @click="setShortcutValue(s)" :key="s.title">{{s.title}}</div>
        </div>
        <date-base ref="start"
                   :value="nowDate"
                   range="start"
                   :option="startOption"
                   :type="type"
                   :now-view="nowView.start"
                   :format="nowFormat"
                   :startWeek = "startWeek"
                   @updateView="updateView"
                   @input="setvalue"
                   @changeView="changeView"
                   :rangeEnd="rangeEnd"
                   @updateRangeEnd="updateRangeEnd"></date-base>
        <date-base ref="end"
                   :value="nowDate"
                   range="end"
                   :option="endOption"
                   :type="type"
                   :now-view="nowView.end"
                   :format="nowFormat"
                   :startWeek = "startWeek"
                   @updateView="updateView"
                   @input="setvalue"
                   @changeView="changeView"
                   :rangeEnd="rangeEnd"
                   @updateRangeEnd="updateRangeEnd"></date-base>
      </div>

      <div class="h-date-footer">
        <button type="button" class="h-btn h-btn-text h-btn-s"
                @click="clear">{{'h.common.clear' | hlang}}</button>
        <button type="button" class="h-btn h-btn-primary h-btn-s"
                @click="confirm">{{'h.common.confirm' | hlang}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import manba from 'manba';

import config from 'heyui/src/utils/config';
import utils from 'heyui/src/utils/utils';
import Dropdown from 'heyui/src/plugins/dropdown';
import dateBase from 'heyui/src/components/date-picker/datebase';
import Locale from 'heyui/src/mixins/locale';

const prefix = 'h-datetime';

export default {
  name: 'hDateRangePicker',
  mixins: [Locale],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    placement: String,
    type: {
      type: [String],
      default: 'date' // year, month, week
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
    placeholder: {
      type: String
    },
    value: Object,
    startWeek: {
      type: Number,
      default: () => config.getOption('datepicker.startWeek')
    }
  },
  watch: {
    value() {
      this.parse(this.value);
    },
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  data() {
    return {
      paramName: config.getOption('datepicker.daterangeOptions.paramName'),
      nowDate: {
        start: '',
        end: ''
      },
      nowView: {
        start: manba(),
        end: manba().add(1, manba.MONTH)
      },
      rangeEnd: '',
      isShow: false
    };
  },
  beforeMount() {
    this.parse(this.value);
  },
  beforeDestroy() {
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
      let el = this.el = this.$el.querySelector(`.${prefix}>.h-datetime-show`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        content,
        placement: this.placement,
        disabled: this.disabled,
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
      this.nowView[rangeType] = manba(value, this.nowFormat);
      if (this.nowView.start.time() >= this.nowView.end.time()) {
        if (rangeType == 'end') {
          this.nowView.start = manba(value, this.nowFormat).add(-1, manba.MONTH);
        } else {
          this.nowView.end = manba(value, this.nowFormat).add(1, manba.MONTH);
        }
      }
      this.dropdown.update();
    },
    changeView() {
      this.dropdown.update();
    },
    parseSingle(value, range) {
      if (utils.isObject(value) && value[this.paramName[range]]) {
        try {
          let nowValue = manba(value[this.paramName[range]], this.nowFormat);
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
      if (this.nowDate.start) {
        start = manba(this.nowDate.start, this.nowFormat);
      }
      let endRange = 1;
      this.nowView = {
        start,
        end: manba(start, this.nowFormat).add(endRange, manba.MONTH)
      };
      this.$refs.start.resetView();
      this.$refs.end.resetView();
    },
    confirm() {
      this.$emit('confirm');
      this.hide();
    },
    hide() {
      this.dropdown.hide();
    },
    clear() {
      this.$emit('clear');
      this.updateValue({});
      this.initNowView();
      this.hide();
    },
    setvalue(string, isEnd = false, range) {
      string = string || '';
      let lastDate = utils.copy(this.nowDate);
      if (!isEnd) {
        if (range == 'start') {
          lastDate.start = string;
        } else if (range == 'end') {
          lastDate.end = string;
        }
      } else {
        if (!lastDate.start) {
          lastDate.start = string;
        } else if (!lastDate.end) {
          lastDate.end = string;
        } else {
          lastDate.start = string;
          lastDate.end = '';
        }
      }
      if (isEnd && lastDate.start && lastDate.end && manba(lastDate.start, this.nowFormat).time() > manba(lastDate.end, this.nowFormat).time()) {
        let start = lastDate.start;
        lastDate.start = lastDate.end;
        lastDate.end = start;
      }

      this.updateValue(lastDate);
    },
    updateValue(value) {
      value = {
        [this.paramName.start]: value.start,
        [this.paramName.end]: value.end
      };
      this.parse(value);
      this.$emit('input', value);
      this.$emit('change', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdown.update();
    }
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.t('h.datepicker.placeholder');
    },
    nowFormat() {
      let format = this.format || config.getOption('datepicker.format')[this.type];
      if (this.type == 'datetime' && this.hasSeconds) {
        format = config.getOption('datepicker.format.datetimesecond');
      }
      return format;
    },
    show() {
      if (!utils.isObject(this.value)) {
        return '';
      }
      return `${this.value.start || this.t('h.datepicker.start')} - ${this.value.end || this.t('h.datepicker.end')}`;
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
        [`${prefix}-range`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-disabled`]: this.disabled
      };
    },
    datePickerCls() {
      return {
        [`${prefix}-range-picker`]: true,
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
  components: {
    dateBase
  }
};
</script>
