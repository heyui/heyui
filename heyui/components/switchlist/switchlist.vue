<template>
  <div class="h-switchlist" :class="{'h-switchlist-small':small}" :disabled="disabled">
    <span :checked="key==value" :disabled="disabled" v-for="(v, key) in arr" @click="setvalue(key)">{{v}}</span>
  </div>
</template>
<script>
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
