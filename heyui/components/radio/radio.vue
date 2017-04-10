<template>
  <div class="h-radio" :disabled="disabled">
    <label v-for="(v, key) in arr" @click="setvalue(key)"><span :checked="key==value" :disabled="disabled"></span>{{v}}</label>
  </div>
</template>
<script>
import utils from '../../utils/utils';

export default {
  props: {
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
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
      let arr = this.datas || {};
      if (utils.isArray(this.datas)) {
        arr = utils.toObject(this.datas);
      }
      return arr;
    }
  }
};
</script>
