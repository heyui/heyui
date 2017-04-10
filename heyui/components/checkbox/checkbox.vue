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
      if (this.isInclude(key)) {
        this.value.splice(this.value.indexOf(key), 1);
      } else {
        this.value.push(key);
      }
      this.$emit('input', this.value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    },
    isInclude(key) {
      let value = this.value.map(item => String(item));
      return value.includes(key);
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
