<template>
  <div class="h-radio" :disabled="disabled">
    <label v-for="option of arr" @click="setvalue(option)"><span :checked="option[key]==value" :disabled="disabled"></span>{{option[title]}}</label>
  </div>
</template>
<script>
import utils from '../../utils/utils';
import config from '../../utils/config';

export default {
  props: {
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    value: [String, Boolean, Number]
  },
  data() {
    return {
      key: config.getOption('dict', 'keyName'),
      title: config.getOption('dict', 'titleName'),
    };
  },
  methods: {
    setvalue(value) {
      if (this.disabled) return;
      this.$emit('input', value[this.key]);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value[this.key]);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    arr() {
      if (!this.datas && !this.dict) {
        log.error('Radio组件:datas或者dict参数最起码需要定义其中之一');
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
