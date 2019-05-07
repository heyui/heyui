<template>
  <div class="h-radio" :disabled="disabled" :class="{'h-radio-disabled': disabled}">
    <template v-if="!isSingle">
      <label v-for="option of arr" :key="option[key]" @click="setvalue(option)" :class="{'h-radio-checked': option[key]==selectStatus, 'h-radio-un-checked': option[key] != selectStatus, 'h-radio-label-disabled': disabled}"><span class="radio-icon h-radio-icon" :checked="option[key]==selectStatus" :disabled="disabled"></span><span class="h-radio-text" v-if="!$scopedSlots.item">{{option[title]}}</span><slot v-else :item="option" name="item"></slot></label>
    </template>
    <label v-else @click="setvalue()" :class="{'h-radio-checked': value == selectStatus, 'h-radio-un-checked': value != selectStatus, 'h-radio-label-disabled': disabled}"><span class="radio-icon h-radio-icon" :checked="value == selectStatus" :disabled="disabled"></span><span><slot></slot></span></label>
  </div>
</template>
<script>
import utils from 'heyui/src/utils/utils';
import config from 'heyui/src/utils/config';

export default {
  name: 'hRadio',
  model: {
    prop: 'selectStatus',
    event: 'input'
  },
  props: {
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    value: [Object, String, Boolean, Number],
    dict: String,
    selectStatus: [Object, String, Boolean, Number],
    keyName: {
      type: String,
      default: () => config.getOption('dict', 'keyName')
    },
    titleName: {
      type: String,
      default: () => config.getOption('dict', 'titleName')
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  methods: {
    setvalue(value) {
      if (this.disabled) return;
      let result = null;
      if (this.isSingle) {
        result = this.value;
      } else {
        result = value[this.key];
      }
      this.$emit('input', result);
      this.$emit('change', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, result);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    isSingle() {
      return !utils.isNull(this.value) && this.arr.length == 0;
    },
    arr() {
      if (!this.datas && !this.dict) {
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      return config.initOptions(datas, this);
    }
  }
};
</script>
