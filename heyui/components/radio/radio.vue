<template>
  <div class="h-radio">
    <label v-for="(v, key) in arr"><input type="radio" :checked="key==value" @click="setvalue(key)" :disabled="disabled" />{{v}}</label>
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
