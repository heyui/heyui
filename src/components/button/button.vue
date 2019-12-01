<template>
  <button :class="buttonCls" type="button" :disabled="!!this.disabled" @click="trigger">
    <i :class="iconCls" v-if="!!iconCode"></i><span v-if="hasText"><slot></slot></span>
  </button>
</template>
<script>
const prefix = 'h-btn';
const Props = {
  size: ['l', 's', 'xs']
};
export default {
  name: 'hButton',
  props: {
    color: String,
    textColor: String,
    icon: String,
    loading: Boolean,
    circle: Boolean,
    block: Boolean,
    noBorder: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(value) {
        return Props.size.indexOf(value) != -1;
      }
    },
    stop: {
      type: Boolean,
      default: false
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    text: Boolean,
    iconCircle: Boolean,
    transparent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    trigger(event) {
      if (this.stop) {
        event.stopPropagation();
      }
      if (this.preventDefault) {
        event.preventDefault();
      }
      this.$emit('click', event);
    }
  },
  computed: {
    hasText() {
      let slot = this.$slots.default;
      if (slot && slot.length > 0) {
        return true;
      }
      return false;
    },
    buttonCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-circle`]: !!this.circle || !!this.iconCircle,
        [`${prefix}-icon-circle`]: !!this.iconCircle,
        [`${prefix}-text`]: !!this.text,
        [`${prefix}-loading`]: !!this.loading,
        [`${prefix}-block`]: !!this.block,
        [`${prefix}-text-${this.textColor}`]: !!this.textColor,
        [`${prefix}-${this.color}`]: !!this.color,
        [`${prefix}-${this.size}`]: !!this.size,
        [`${prefix}-transparent`]: !!this.transparent,
        [`${prefix}-no-border`]: this.noBorder === true
      };
    },
    iconCode() {
      return this.loading ? 'h-icon-loading' : this.icon;
    },
    iconCls() {
      const iconCode = this.loading ? 'h-icon-loading' : this.icon;
      return {
        [`${iconCode}`]: !!iconCode
      };
    }
  }
};
</script>
