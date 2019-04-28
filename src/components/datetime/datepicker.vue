<template>
  <div :class="dateCls">
    <template v-if="!inline">
      <div v-if="noBorder" class="h-datetime-show text-hover">{{showDate||showPlaceholder}}</div>
      <div v-else class="h-input h-datetime-show">
        <input
          type="text"
          @change="changeEvent"
          @keydown.enter="changeEvent"
          v-model="showDate"
          :disabled="disabled"
          :readonly="readonly || type == 'week' || type == 'quarter'"
          :placeholder="showPlaceholder"
        >
        <i class="h-icon-calendar" v-if="!showDate||disabled||!clearable"></i>
        <i class="h-icon-close text-hover" v-else @click.stop="clear"></i>
      </div>
    </template>
    <div :class="datePickerCls" class="h-date-picker">
      <div class="h-date-container" v-if="isShow">
        <div v-if="shortcuts.length>0" class="h-date-shortcut">
          <div v-for="s of shortcuts" @click="setShortcutValue(s)" :key="s.title">{{s.title}}</div>
        </div>
        <date-base
          ref="datebase"
          :value="nowDate"
          :option="option"
          :type="type"
          :startWeek="startWeek"
          :now-view="nowView"
          format="k"
          @updateView="updateView"
          @input="setvalue"
          @changeView="updateDropdown"
        ></date-base>
      </div>

      <div class="h-date-footer" v-if="hasConfirm & !inline">
        <button class="h-btn h-btn-text" @click="clear">{{'h.common.clear' | hlang}}</button>
        <button class="h-btn h-btn-primary h-btn-s" @click="hide">{{'h.common.confirm' | hlang}}</button>
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
};

const options = config.getOption('datepicker');

export default {
  name: 'hDatePicker',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
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
    hasButtons: {
      type: Boolean,
      default: false
    },
    value: String,
    inline: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    startWeek: {
      type: Number,
      default: () => config.getOption('datepicker.startWeek')
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      nowDate: '',
      showDate: '',
      nowView: manba(),
      isShow: this.inline
    };
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
    },
    type() {
      this.parse(this.value);
    }
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
      if (this.inline) return;
      let el = (this.el = this.$el.querySelector(`.${prefix}>.h-datetime-show`));
      let content = this.$el.querySelector(`.h-date-picker`);

      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        triggerOnce: true,
        content,
        disabled: this.disabled,
        placement: this.placement,
        events: {
          show() {
            that.isShow = true;
            that.$nextTick(() => {
              that.parse(that.value);
              that.$refs.datebase.resetView();
              if (that.nowDate) {
                that.nowView = manba(that.nowDate);
              }
            });
          }
        }
      });
      if (this.disabled) {
        this.dropdown.disabled();
      }
    });
  },
  methods: {
    setShortcutValue(s) {
      let value = s.value.call(null);
      this.parse(value);
      this.setvalue(this.nowDate);
      this.hide();
    },
    clear() {
      this.$emit('clear');
      this.setvalue('');
      this.hide();
    },
    confirm() {
      this.$emit('confirm');
      this.hide();
    },
    updateView(value) {
      this.nowView = manba(value);
      this.$nextTick(() => {
        this.updateDropdown();
      });
    },
    updateDropdown() {
      if (this.dropdown) this.dropdown.update();
    },
    inputEvent(event) {
      let value = event.target.value;
      try {
        manba(value);
      } catch (evt) {
        return;
      }
      // this.parse(value, false);
      this.setvalue(value);
    },
    changeEvent(event) {
      let value = event.target.value;
      this.parse(value);
      if (this.nowDate && utils.isObject(this.option) && this.type != 'time') {
        let disabled = false;
        let nowDate = manba(this.nowDate);
        let type = manbaType[this.type];
        if (this.option.start && nowDate.distance(this.option.start, type) < 0) disabled = this.option.start;
        if (this.option.end && !disabled && nowDate.distance(this.option.end, type) > 0) disabled = this.option.end;
        if (this.option.disabled && this.option.disabled.call(null, disabled || nowDate)) disabled = '';
        if (disabled !== false) {
          this.parse(disabled);
        }
      }
      this.setvalue(this.nowDate);
    },
    parse(value, initShow = true) {
      if (value != '' && !utils.isNull(value)) {
        try {
          if (this.type == 'time') {
            value = `1980-01-01 ${value}`;
          }
          this.nowView = manba(value);
          this.nowDate = this.nowView.format('k');
          if (initShow) {
            if (this.type == 'week') {
              this.showDate = this.t('h.date.show.weekInput', { year: this.nowView.year(), week: this.nowView.getWeekOfYear(this.startWeek) });
            } else if (this.type == 'quarter') {
              this.showDate = this.t('h.date.show.quarter', { year: this.nowView.year(), quarter: Math.ceil(this.nowView.month() / 3) });
            } else {
              this.showDate = this.nowView.format(this.nowFormat);
            }
          }
          return;
        } catch (err) {
          // console.error(err);
        }
      }

      this.nowView = manba();
      this.nowDate = '';
      if (initShow) this.showDate = '';
    },
    hide() {
      if (this.dropdown) this.dropdown.hide();
    },
    setvalue(string, isEnd = true) {
      let value = string;
      if (string != '') {
        value = manba(string).format(this.nowFormat);
      }
      this.$emit('input', value);
      this.$emit('change', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      if (isEnd) {
        this.hide();
      }
      this.updateDropdown();
    }
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.t('h.datepicker.placeholder');
    },
    nowFormat() {
      let format = this.format || options.format[this.type];
      if (this.type == 'datetime' && this.hasSeconds) {
        format = options.format.datetimesecond;
      }
      return format;
    },
    hasConfirm() {
      return this.type == 'datetime' || this.type == 'datehour' || this.hasButtons;
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
            shortcuts.push(options.shortcuts[s]);
          } else if (utils.isObject(s)) {
            shortcuts.push(s);
          }
        }
      }
      return shortcuts;
    },
    dateCls() {
      return {
        [`${prefix}`]: !this.inline,
        [`${prefix}-inline`]: this.inline,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-disabled`]: this.disabled
      };
    },
    datePickerCls() {
      return {
        [`${prefix}-has-shortcut`]: this.shortcuts.length > 0
      };
    }
  },
  components: {
    dateBase
  }
};
</script>
