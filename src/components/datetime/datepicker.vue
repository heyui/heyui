<template>
  <div :class="dateCls">
    <div v-if="noBorder"
         class="h-datetime-show text-hover">{{showDate||placeholder}}</div>
    <div v-else
         class="h-input h-datetime-show">
      <input type="text"
             v-model="showDate"
             @change="changeEvent"
             @input="inputEvent"
             :placeholder="placeholder"
             :disabled="disabled" />
      <i class="h-icon-calendar"></i>
    </div>
    <div :class="datePickerCls"
         class="h-date-picker">
      <div class="h-date-container" v-if="isShow">
        <div v-if="shortcuts.length>0"
             class="h-date-shortcut">
          <div v-for="s of shortcuts"
               @click="setShortcutValue(s)" :key="s">{{s.title}}</div>
        </div>
        <date-base ref="datebase"
                   :value="nowDate"
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
        <button class="h-btn h-btn-text"
                @click="setvalue('')">清除</button>
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

const options = config.getOption('datepicker');

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
    let format = this.format || options.format[this.type];
    if (this.type == 'datetime' && this.hasSeconds) {
      format = options.format.datetimesecond;
    }
    return {
      nowDate: '',
      showDate: '',
      hasConfirm: this.type == 'datetime' || this.type == 'datehour',
      nowView: manba(),
      nowFormat: format,
      isShow: false
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
    }
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
        triggerOnce: true,
        content,
        disabled: this.disabled,
        container: document.body,
        events: {
          show() {
            that.isShow = true;
            that.$nextTick(()=>{
              that.parse(that.value);
              that.$refs.datebase.resetView();
              if (that.nowDate) {
                that.nowView = manba(that.nowDate);
              }
            })
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
    updateView(value) {
      this.nowView = manba(value);
      this.dropdown.popperInstance.update();
    },
    changeView() {
      if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
    },
    inputEvent(event) {
      let value = event.target.value;
      try { manba(value) } catch (evt) { return; }
      this.parse(value, false);
    },
    changeEvent(event) {
      let value = event.target.value;
      this.parse(value);
      if (this.nowDate && utils.isObject(this.option) && this.type != "time") {
        let disabled = false;
        let type = manbaType[this.type];
        if (this.option.start && this.nowDate.distance(this.option.start, type) < 0) disabled = this.option.start;
        if (this.option.end && !disabled && this.nowDate.distance(this.option.end, type) > 0) disabled = this.option.end;
        if (this.option.disabled && this.option.disabled.call(null, disabled || this.nowDate)) disabled = '';
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
          if (initShow) this.showDate = this.nowView.format(this.nowFormat);
          return;
        } catch (err) {
          // log.error(err);
        }
      }

      this.nowView = manba();
      this.nowDate = '';
      if (initShow) this.showDate = '';
    },
    hide() {
      this.dropdown.hide();
    },
    setvalue(string, isEnd = true) {
      // log(string);
      let value = string;
      if (string != '') {
        value = manba(string).format(this.nowFormat);
      }
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