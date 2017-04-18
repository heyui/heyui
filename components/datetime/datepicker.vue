<template>
  <div :class="dateCls">
    <div class="h-input h-datetime-show">
      <input type="text"
             v-model="showDate"
             @change="changeEvent"
             @input="inputEvent"
             :placeholder="placeholder"
             :disabled="disabled" />
      <i class="h-icon-calendar"></i>
    </div>
    <div v-if="!disabled" :class="datePickerCls"
         class="h-date-picker">
      <div class="h-date-container">
        <div v-if="shortcuts.length>0"
             class="h-date-shortcut">
          <div v-for="s of shortcuts"
               @click="setShortcutValue(s)">{{s.title}}</div>
        </div>
        <date-base :value="nowDate"
                   :option="option"
                   :type="type"
                   :now-view="nowView"
                   format="k"
                   @updateView="updateView"
                   @input="setvalue"
                   @changeView="changeView"></date-base>
      </div>
  
      <div class="h-date-footer"
           v-if="hasConfirm">
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
const dateprefix = 'h-date';

const manbaType = {
  'year': manba.YEAR, 'month': manba.MONTH, 'date': manba.DAY, 'datetime': manba.MINUTE, 'time': manba.MINUTE, 'datehour': manba.HOUR
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
    hasSeconds: {
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
    let format = this.format || config.format[this.type];
    if (this.type == 'datetime' && this.hasSeconds) {
      format = config.format.datetimesecond;
    }
    return {
      nowDate: '',
      showDate: '',
      hasConfirm: this.type == 'datetime' || this.type == 'datehour',
      nowView: manba(),
      nowFormat: format
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
    if (!this.disabled) {
      this.$nextTick(() => {
        let el = this.$el.querySelector(`.${prefix}>.h-datetime-show`);
        let content = this.$el.querySelector(`.h-date-picker`);
        this.dropdown = new Dropdown(el, {
          trigger: 'click',
          triggerOnce: true,
          content,
          container: document.body
        });
      });
    }
  },
  methods: {
    setShortcutValue(s) {
      let value = s.value.call(null);
      this.parse(value);
      this.setvalue(this.nowDate);
      this.hide();
    },
    updateView(value) {
      this.nowView = manba(value);
      this.dropdown.popperInstance.update();
    },
    changeView() {
      this.dropdown.popperInstance.update();
    },
    inputEvent(event) {
      let value = event.target.value;
      try { manba(value) } catch (evt) { return; }
      this.parse(value, false);
    },
    changeEvent(event) {
      let value = event.target.value;
      this.parse(value);
      if (utils.isObject(this.option) && this.type != "time") {
        let disabled = false;
        let type = manbaType[this.type];
        if (this.option.start && this.nowView.distance(this.option.start, type) < 0) disabled = this.option.start;
        if (this.option.end && !disabled && this.nowView.distance(this.option.end, type) > 0) disabled = this.option.end;
        if (this.option.disabled && this.option.disabled.call(null, disabled || this.nowView)) disabled = '';
        if (disabled !== false) {
          this.parse(disabled);
        }
      }
      this.setvalue(this.nowDate);
    },
    parse(value, initShow = true) {
      try {
        if (this.type == 'time' && value != '') {
          value = `1980-01-01 ${value}`;
        }
        this.nowView = manba(value);
        this.nowDate = this.nowView.format('k');
        if (initShow) this.showDate = this.nowView.format(this.nowFormat);
      } catch (err) {
        // log.error(err);
        this.nowView = manba();
        this.nowDate = '';
        if (initShow) this.showDate = '';
      }
    },
    hide() {
      this.dropdown.hide();
    },
    setvalue(string, isEnd = true) {
      let value = string || '';
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if (!this.hasConfirm && isEnd) {
        this.hide();
      }
      this.dropdown.popperInstance.update();
    }
  },
  computed: {
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
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-disabled`]: this.disabled
      }
    },
    datePickerCls() {
      return {
        [`${prefix}-has-shortcut`]: this.shortcuts.length > 0
      }
    }
  },
  components: {
    dateBase
  }
};
</script>