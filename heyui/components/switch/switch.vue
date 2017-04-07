<template>
  <label><span class="h-switch" :class="{'h-switch-small':small}" :checked="value" :disabled="disabled" @click="setvalue(!value)"/></span><slot></slot></label>
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
