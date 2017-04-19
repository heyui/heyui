<template>
  <div class="h-radio" :disabled="disabled">
    <label v-for="(v, key) in arr" @click="setvalue(key)"><span :checked="key==value" :disabled="disabled"></span>{{v}}</label>
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
    return {};
  },
  methods: {
    setvalue(key) {
      if (this.disabled) return;
      this.$emit('input', key);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
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

      let arr = datas || {};
      if (utils.isArray(datas)) {
        arr = utils.toObject(datas);
      }
      return arr;
    }
  }
};
</script>
