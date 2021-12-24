<template>
  <div :class="dateCls">
    <template v-if="!inline">
      <div v-if="noBorder" class="h-datetime-show text-hover">{{ showDate || showPlaceholder }}</div>
      <div v-else class="h-input h-datetime-show">
        <input
          v-model="showDate"
          class="h-input"
          type="text"
          :disabled="disabled"
          :readonly="readonly || type == 'week' || type == 'quarter'"
          :placeholder="showPlaceholder"
          @change="changeEvent"
          @keydown.enter="changeEvent"
        />
        <i v-if="!showDate || disabled || !clearable" class="h-icon-calendar"></i>
        <i v-else class="h-icon-close text-hover" @click.stop="clear"></i>
      </div>
    </template>
    <div :class="datePickerCls" class="h-date-picker">
      <div v-if="isShow" class="h-date-container">
        <div v-if="shortcuts.length > 0" class="h-date-shortcut">
          <div v-for="s of shortcuts" :key="s.title" @click="setShortcutValue(s)">{{ s.title }}</div>
        </div>
        <date-base
          ref="datebase"
          :value="nowDate"
          :option="option"
          :type="type"
          :start-week="startWeek"
          :now-view="nowView"
          format="k"
          @updateView="updateView"
          @updateValue="setvalue"
          @changeView="updateDropdown"
        ></date-base>
      </div>

      <div v-if="hasConfirm & !inline" class="h-date-footer">
        <button type="button" class="h-btn h-btn-text" @click="clear">{{ hlang('h.common.clear') }}</button>
        <button type="button" class="h-btn h-btn-primary h-btn-s" @click="hide">{{ hlang('h.common.confirm') }}</button>
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
  name: 'HDatePicker',
  components: {
    dateBase
  },
  mixins: [Locale],
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
    modelValue: String,
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
  emits: ['update:modelValue', 'change', 'confirm', 'clear'],
  data() {
    return {
      nowDate: '',
      showDate: '',
      nowView: manba(),
      isShow: this.inline
    };
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.hlang('h.datepicker.placeholder');
    },
    nowFormat() {
      let format = this.format;
      if (!format) {
        format = options.format[this.type];
        if (this.type == 'datetime' && this.hasSeconds) {
          format = options.format.datetimesecond;
        }
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
  watch: {
    modelValue() {
      this.initShowDate(this.modelValue);
    },
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    },
    type() {
      this.initShowDate(this.modelValue);
    }
  },
  beforeMount() {
    this.initShowDate(this.modelValue);
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
              that.initShowDate(that.modelValue);
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
      if (s.value && utils.isFunction(s.value)) {
        let value = s.value.call(null);
        this.initShowDate(value);
        this.setvalue(this.nowDate);
      }
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
    updateView(modelValue) {
      this.nowView = manba(modelValue);
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
      this.setvalue(value);
    },
    changeEvent(event) {
      let value = event.target.value;
      this.initShowDate(value);
      if (this.nowDate && utils.isObject(this.option) && this.type != 'time') {
        let nowDate = manba(this.nowDate);
        let type = manbaType[this.type];
        let reset = false;
        if (this.option.start && nowDate.distance(this.option.start, type) < 0) reset = true;
        if (!reset && this.option.end && nowDate.distance(this.option.end, type) > 0) reset = true;
        if (!reset && this.option.disabled && this.option.disabled.call(null, nowDate)) reset = true;
        if (reset) {
          this.resetValue();
          return;
        }
      }
      this.setvalue(this.nowDate);
    },
    resetValue() {
      this.clear();
      this.initShowDate();
    },
    initShowDate(value, initShow = true) {
      if (value != '' && !utils.isNull(value)) {
        try {
          this.nowView = manba(value, this.nowFormat);
          this.nowDate = this.nowView.format('f');
          if (initShow) {
            if (this.type == 'week') {
              this.showDate = this.hlang('h.date.show.weekInput', { year: this.nowView.year(), week: this.nowView.getWeekOfYear(this.startWeek) });
            } else if (this.type == 'quarter') {
              this.showDate = this.hlang('h.date.show.quarter', { year: this.nowView.year(), quarter: Math.ceil(this.nowView.month() / 3) });
            } else {
              this.showDate = this.nowView.format(this.nowFormat);
            }
          }
          return;
        } catch (err) {
          console.error(err);
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
      let modelValue = string;
      if (string != '') {
        modelValue = manba(string).format(this.nowFormat);
      }
      this.$emit('update:modelValue', modelValue);
      this.$emit('change', modelValue);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, modelValue);
      this.$el.dispatchEvent(event);
      if (isEnd) {
        this.hide();
      }
      this.updateDropdown();
    }
  }
};
</script>
