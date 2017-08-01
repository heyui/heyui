<template>
  <div :class="numberinputCls">
    <div class="h-numberinput-show"
         :class="{'focusing':focusing}">
      <input type="text" :disabled="disabled" class="h-numberinput-input" :value="value" @focus="focusing=true" @blur="blur"/>
      <div class="h-numberinput-operate">
        <span @click="minus"><i class="h-icon-minus"></i></span>
        <span @click="plus"><i class="h-icon-plus"></i></span>
      </div>
    </div>
  </div>
</template>
<script>

import utils from '../../utils/utils'
const prefix = 'h-numberinput';

export default {
  props: {
    value: { Number, String },
    min: Number,
    max: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      focusing: false,
    };
  },
  mounted() {
  },
  methods: {
    plus() {
      if (this.disabled) return false;
      let value = Number(this.value) || 0;
      this.setvalue(utils.addFn(value, this.step));
    },
    minus() {
      if (this.disabled) return false;
      let value = Number(this.value) || 0;
      this.setvalue(utils.addFn(value, -this.step));
    },
    blur(event) {
      this.focusing = false;
      let value = Number(event.target.value);
      this.setvalue(value || null);
    },
    setvalue(value) {
      if (this.disabled) return false;
      if (this.max !== undefined) {
        value = Math.min(this.max, value);
      }
      if (this.min !== undefined) {
        value = Math.max(this.min, value);
      }
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    numberinputCls() {
      return {
        [prefix]: true,
        [`${prefix}-disabled`]: !!this.disabled
      }
    }
  }
};
</script>
