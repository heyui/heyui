<template>
  <div class="h-radio" :disabled="disabled">
    <template v-if="!isSingle">
      <label v-for="option of arr" :key="option[key]" @click="setvalue(option)"><span class="radio-icon" :checked="option[key]==selectStatus" :disabled="disabled"></span>{{option[title]}}</label>
    </template>
    <label v-else @click="setvalue()"><span class="radio-icon" :checked="value == selectStatus" :disabled="disabled"></span><span><slot></slot></span></label>
  </div>
</template>
<script>
import utils from '../../utils/utils';
import config from '../../utils/config';

export default {
  name: 'Radio',
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
    },
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName,
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
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, result);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    isSingle() {
      return !utils.isNull(this.value) && this.arr.length == 0;
    },
    arr() {
      if (!this.datas && !this.dict) {
        // log.error('Radio组件:datas或者dict参数最起码需要定义其中之一');
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
