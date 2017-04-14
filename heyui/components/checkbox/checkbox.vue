<template>
  <div class="h-checkbox" :disabled="disabled">
    <label v-for="(v, key) in arr" @click="setvalue(key)"><span :checked="isInclude(key)" :disabled="disabled"></span>{{v}}</label>
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
      let arr = this.datas || {};
      if (utils.isArray(this.datas)) {
        arr = utils.toObject(this.datas);
      }
      return arr;
    }
  }
};
</script>
