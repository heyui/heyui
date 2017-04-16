<template>
  <div :class="dateCls">
    <input type="text" v-model="nowDate" @change="changeEvent" :placeholder="placeholder" :disabled="disabled"/>
    <i class="h-icon-calendar"></i>
    <div :class="datePickerCls" class="h-date-picker">
      <div class="h-date-container">
        <div v-if="shortcuts.length>0" class="h-date-shortcut">
          <div v-for="s of shortcuts" @click="setShortcutValue(s)">{{s.title}}</div>
        </div>
        <date-base :value="nowDate" :option="option" :type="type" :now-view="nowView" :format="nowFormat" @updateView="updateView" @input="setvalue" @changeView="changeView"></date-base>
      </div>

      <div class="h-date-footer" v-if="hasConfirm">
        <button class="h-btn h-btn-primary h-btn-s" @click="hide">确定</button>
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

const view_type = ['year', 'month', 'date', 'datetime', 'time'];
const timePickerDefaultOptions = {
  range:{
    start: '00:00',
    end: '23:59',
    step: '1'
  }
};

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
    if(this.type == 'datetime' && this.hasSeconds){
      format = config.format.datetimesecond;
    }
    return {
      nowDate: '',
      hasConfirm: this.type == 'datetime',
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
    this.$nextTick(() => {
      let el = this.$el.querySelector(`.${prefix}>input`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        triggerOnce: true,
        content,
        container: document.body
      });
    });
  },
  methods: {
    setShortcutValue(s){
      let value = s.value.call(null);
      this.parse(value);
      this.setvalue(this.nowDate);
    },
    updateView(nowView){
      this.nowView = nowView;
      this.dropdown.popperInstance.update();
    },
    changeView(){
      this.dropdown.popperInstance.update();
    },
    changeEvent(event){
      let value = event.target.value;
      // log(value);
      this.parse(value);
      this.setvalue(this.nowDate);
    },
    isSelected(d) {
      return this.nowDate == d.string;
    },
    parse(value) {
      try{
        this.nowView = manba(value);
        this.nowDate = this.nowView.format(this.nowFormat);
      }catch(err){
        // log.error(err);
        this.nowView = manba();
        this.nowDate = '';
      }
    },
    hide() {
      this.dropdown.hide();
    },
    setvalue(string) {
      let value = string || '';
      // if (string != ''){
      //   value = manba(string).format(this.nowFormat);
      // }
      // this.nowDate = value;
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if(!this.hasConfirm){
        this.hide();
      }
      this.dropdown.popperInstance.update();
      // if (this.mutiple) {
      //   this.dropdown.popperInstance.update();
      // } else {
      // }
    }
  },
  computed: {
    shortcuts() {
      let shortcuts = [];
      let shortcutsConfig = null;
      if(this.option && this.option.shortcuts){
        shortcutsConfig = this.option.shortcuts;
      }
      if(utils.isArray(shortcutsConfig)){
        for(let s of shortcutsConfig){
          if(utils.isString(s)){
            shortcuts.push(config.datePickerOptions.shortcuts[s]);
          }else if(utils.isObject(s)){
            shortcuts.push(s);
          }
        }
      }
      return shortcuts;
    },
    dateCls() {
      return {
        'h-input': true,
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-disabled`]: this.disabled
      }
    },
    datePickerCls() {
      return {
        [`${prefix}-has-shortcut`]: this.shortcuts.length>0
      }
    }
  },
  components:{
    dateBase
  }
};
</script>