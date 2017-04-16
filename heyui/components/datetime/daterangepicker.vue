<template>
  <div :class="dateCls">
    <input type="text" :value="show" @change="changeEvent" :placeholder="placeholder" :disabled="disabled"/>
    <i class="h-icon-calendar"></i>
    <div :class="datePickerCls" class="h-date-picker">
      <div class="h-date-container">
        <div v-if="shortcuts.length>0" class="h-date-shortcut">
          <div v-for="s of shortcuts" @click="setShortcutValue(s)">{{s.title}}</div>
        </div>
        <date-base :value="nowDate" range="start" :option="option" :type="type" :now-view="nowView.start" :format="nowFormat" @updateView="updateView" @input="setvalue" @changeView="changeView" :rangeEnd="rangeEnd" @updateRangeEnd="updateRangeEnd"></date-base>
        <date-base :value="nowDate" range="end" :option="option" :type="type" :now-view="nowView.end" :format="nowFormat" @updateView="updateView" @input="setvalue" @changeView="changeView" :rangeEnd="rangeEnd" @updateRangeEnd="updateRangeEnd"></date-base>
      </div>

      <div class="h-date-footer">
        <button class="h-btn h-btn-text h-btn-s" @click="clear">清除</button>
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

const manbaType = {
  'year': manba.YEAR, 'month': manba.MONTH, 'date': manba.DAY, 'datetime': manba.MINUTE, 'time': manba.MINUTE, 'datehour': manba.HOUR
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
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: Object
  },
  data() {
    let format = this.format || config.format[this.type];
    if(this.type == 'datetime' && this.hasSeconds){
      format = config.format.datetimesecond;
    }
    return {
      nowDate: {
        start: '',
        end: ''
      },
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
    updateRangeEnd(string){
      this.rangeEnd = string;
    },
    setShortcutValue(s){
      let value = s.value.call(null);
      this.parse(value);
      this.updateValue(this.nowDate);
      this.hide();
    },
    updateView(value, rangeType){
      this.nowView[rangeType] = manba(value);
      if(rangeType == 'end'){
        this.nowView.start = manba(value).add(-1, manba.MONTH);
      }else{
        this.nowView.end = manba(value).add(1, manba.MONTH);
      }
      this.dropdown.popperInstance.update();
    },
    changeView(){
      this.dropdown.popperInstance.update();
    },
    changeEvent(event){
      let value = event.target.value;
      this.parse(value);
      if(utils.isObject(this.option) && this.type != "time"){
        let disabled = false;
        let type = manbaType[this.type];
        if(this.option.start && this.nowView.distance(this.option.start, type) < 0)disabled = this.option.start;
        if(this.option.end && !disabled && this.nowView.distance(this.option.end, type) > 0)disabled = this.option.end;
        if(this.option.disabled && this.option.disabled.call(null,disabled||this.nowView))disabled = '';
        if(disabled !== false){
          this.parse(disabled);
        }
      }
    },
    parseSingle(value, range){
      if(utils.isObject(value)&&value[paramName[range]]){
        try{
          let nowValue = manba(value[paramName[range]]);
          this.nowDate[range] = nowValue.format(this.nowFormat);
          return;
        }catch(evt){

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
      if(!!this.nowDate.start){
        start = manba(this.nowDate.start);
      }
      this.nowView = {
        start: start,
        end: manba(start).add(1, manba.MONTH),
      };

    },
    hide() {
      this.dropdown.hide();
    },
    clear() {
      this.updateValue({});
    },
    setvalue(string, hide = true) {
      string = string || '';
      let lastDate = utils.copy(this.nowDate);
      if(!lastDate.start || lastDate.start > string || (lastDate.start&&lastDate.end)){
        lastDate.start = string;
        lastDate.end = '';
      }else{
        lastDate.end = string;
      }

      this.updateValue(lastDate);
    },
    updateValue(value){
      // log(value)
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
      if(!utils.isObject(this.value)){
        return '';
      }
      return `${this.value.start || '不限'} - ${this.value.end || '不限'}`;
    },
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
        [`${prefix}-range`]: true,
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