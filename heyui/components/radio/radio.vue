<template>
  <div class="h-radio" :disabled="disabled">
    <label v-for="(v, key) in arr" @click="setvalue(key)"><span :checked="key==value" :disabled="disabled"></span>{{v}}</label>
  </div>
</template>
<script>
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
    }
  },
  computed: {
    arr() {
      let arr = this.datas || {};
      if (Utils.isArray(this.datas)) {
        arr = Utils.toObject(this.datas);
      }
      return arr;
    }
  }
};
</script>
