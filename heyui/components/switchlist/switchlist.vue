<template>
  <div class="h-switchlist" :class="{'h-switchlist-small':small}" :disabled="disabled">
    <span :checked="key==value" :disabled="disabled" v-for="(v, key) in arr" @click="setvalue(key)">{{v}}</span>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  props: {
    small: {
      type: Boolean,
      default: false
    },
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
        log.error('Switchlist组件:datas或者dict参数最起码需要定义其中之一');
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
