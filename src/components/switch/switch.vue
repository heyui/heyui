<template>
  <label class="h-switch" :class="{'h-switch-small':small}" @click="setvalue"><span class="h-switch-span" :checked="isChecked" :disabled="disabled"></span><span class="h-switch-text"><slot></slot></span></label>
</template>
<script>
export default {
  name: 'hSwitch',
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
      type: [Boolean, String, Number],
      default: false
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    isChecked() {
      return this.value == this.trueValue;
    }
  },
  methods: {
    setvalue() {
      if (this.disabled) return;
      let value = this.isChecked ? this.falseValue : this.trueValue;
      this.$emit('input', value);
      this.$emit('change', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    }
  }
};
</script>
