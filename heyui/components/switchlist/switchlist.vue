<template>
  <div class="h-switchlist" :class="{'h-switchlist-small':small}"><span :checked="value" :disabled="disabled" @click="setvalue(!value)"/></span><slot></slot></div>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    setvalue(value) {
      if (this.disabled) return;
      this.$emit('input', value);
    }
  }
};
</script>
