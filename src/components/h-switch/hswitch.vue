<template>
  <label :class="{ 'h-switch': true, 'h-switch-small': small, 'h-switch-disabled': disabled, 'h-switch-checked': isChecked }" @click="setvalue"
    ><span class="h-switch-span"
      ><span class="h-switch-inner"><slot v-if="isChecked" name="open"></slot><slot v-else name="close"></slot></span></span
    ><span class="h-switch-text"><slot></slot></span
  ></label>
</template>
<script>
export default {
  name: 'HSwitch',
  emits: ['input', 'change', 'update:modelValue'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    modelValue: {
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
      return this.modelValue == this.trueValue;
    }
  },
  methods: {
    setvalue() {
      if (this.disabled) return;
      let value = this.isChecked ? this.falseValue : this.trueValue;
      this.$emit('input', value);
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, this.modelValue);
      this.$el.dispatchEvent(event);
    }
  }
};
</script>
