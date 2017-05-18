<template>
  <div class="h-checkbox" :disabled="disabled">
    <template v-if="arr.length">
    <label v-for="option of arr" @click="setvalue(option)"><span :checked="isInclude(option)" :disabled="disabled" class="h-checkbox-native"></span><span>{{option[title]}}</span></label>
    </template>
    <label v-else @click="setvalue()"><span :checked="checked||valueBak" :indeterminate="indeterminate" :disabled="disabled" class="h-checkbox-native"></span><span><slot></slot></span></label>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  props: {
    dict: String,
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, Boolean],
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      valueBak: this.value,
      key: config.getOption('dict', 'keyName'),
      title: config.getOption('dict', 'titleName'),
    };
  },
  methods: {
    setvalue(option) {
      if (this.disabled) return;
      let value = utils.copy(this.value);
      if (this.arr.length == 0) {
        this.valueBak = value = !this.valueBak;
      } else {
        let key = option[this.key];
        let index = this.check(key);
        if (index > -1) {
          value.splice(index, 1);
        } else {
          value.push(key);
        }
      }
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
    },
    check(key) {
      let value = this.value.map(item => String(item));
      return value.indexOf(String(key));
    },
    isInclude(option) {
      let value = this.value.map(item => String(item));
      let index = value.indexOf(String(option[this.key]));
      return index > -1;
    }
  },
  computed: {
    arr() {
      if (!this.datas && !this.dict) {
        // log.error('Checkbox组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }

      return utils.initOptions(datas, this);
    }
  }
};
</script>
