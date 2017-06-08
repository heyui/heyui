<template>
  <label class="h-switch"><span :class="{'h-switch-span': true, 'h-switch-small':small}" :checked="value" :disabled="disabled" @click="setvalue(!value)"/></span><span class="h-switch-text"><slot></slot></span></label>
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
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    }
  }
};
</script>
