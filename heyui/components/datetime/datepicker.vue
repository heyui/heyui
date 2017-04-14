<template>
  <div :class="dateCls">
    <input type="text">
    <i class="h-icon-calendar"></i>
    <div class="h-date-picker">
      <div class="h-date-header">
        <span class="h-date-year-left-picker"><i class="h-icon-left"></i><i class="h-icon-left"></i></span>
        <span class="h-date-month-left-picker"><i class="h-icon-left"></i></span>
        <span class="h-date-header-show">2012年</span>
        <span class="h-date-header-show">12月</span>
        <span class="h-date-year-right-picker"><i class="h-icon-right"></i><i class="h-icon-right"></i></span>
        <span class="h-date-month-right-picker"><i class="h-icon-right"></i></span>
      </div>
      <div class="h-date-body">
        
      </div>
      <div class="h-date-footer">
      </div>
    </div>
  </div>
</template>
<script>
import manba from 'manba';

import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

const prefix = 'h-datetime';

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
    format: {
      type: String,
      default: config.date_format
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    value: String
  },
  data() {
    return {
      inputShow: ''
    };
  },
  watch: {
    value() {
      this.parse();
    }
  },
  beforeMount() {
    this.parse();
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el.querySelector(`.${prefix}>input`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: 'click focus',
        content,
        container: document.body
      });
    });
  },
  methods: {
    parse() {
      this.inputShow = manba(this.value || null).format(this.format);
    },
    setvalue(option) {
      if (this.readonly) return;
      let code = option[this.key];
      if (this.mutiple) {
        if (!utils.isNull(this.limit) && !this.codes.includes(code) && this.codes.length >= this.limit) {
          this.$Message.error(`您最多可以选${this.limit}个选项`);
          return;
        }
        utils.toggleValue(this.codes, code);
      } else {
        this.codes = code;
      }
      this.setObjects();
      let value = this.type == 'key' ? this.codes : this.objects;
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if (this.mutiple) {
        this.dropdown.popperInstance.update();
      } else {
        this.dropdown.hide();
      }
    }
  },
  filters: {
    showText(key, value) {
      return value.includes(key);
    }
  },
  computed: {
    dateCls() {
      return {
        'h-input': true,
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-disabled`]: this.disabled
      }
    }
  }
};
</script>