<template>
  <div class="h-checkbox" :disabled="disabled">
    <label v-for="(v, key) in arr"><input type="checkbox" :checked="key | isInclude(value)" @click="setvalue(key)" :disabled="disabled" />{{v}}</label>
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
      if (this.value.includes(key)) {
        this.value.splice(this.value.indexOf(key), 1);
      } else {
        this.value.push(key);
      }
      this.$emit('input', this.value);
    }
  },
  filters: {
    isInclude(key, value) {
      return value.includes(key);
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
