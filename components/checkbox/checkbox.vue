<template>
  <div class="h-checkbox" :disabled="disabled">
    <label v-for="(v, key) in arr" @click="setvalue(key)"><span :checked="isInclude(key)" :disabled="disabled"></span>{{v}}</label>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  props: {
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    value: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    setvalue(key) {
      if(this.disabled)return;
      let index = this.check(key);
      if (index > -1) {
        this.value.splice(index, 1);
      } else {
        this.value.push(key);
      }
      this.$emit('input', this.value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    },
    check(key) {
      let value = this.value.map(item => String(item));
      return value.indexOf(String(key));
    },
    isInclude(key) {
      return this.check(key) > -1;
    }
  },
  computed: {
    arr() {
      if (!this.datas && !this.dict) {
        log.error('checkbox组件:datas或者dict参数最起码需要定义其中之一');
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
