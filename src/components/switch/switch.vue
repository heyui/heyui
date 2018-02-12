<template>
  <label class="h-switch" :class="{'h-switch-small':small}"><span class="h-switch-span" :checked="value" :disabled="disabled" @click="setvalue(!value)"></span><span class="h-switch-text"><slot></slot></span></label>
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
