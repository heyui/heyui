<template>
  <div :class="numberinputCls">
    <div class="h-numberinput-show" :class="{ focusing: focusing }">
      <input
        v-model="editValue"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled === false ? null : true"
        class="h-numberinput-input h-input"
        @input="input"
        @focus="focusing = true"
        @blur="blur"
      />
      <div v-if="useOperate" class="h-numberinput-operate">
        <span @click="minus"><i class="h-icon-minus"></i></span>
        <span @click="plus"><i class="h-icon-plus"></i></span>
      </div>
    </div>
  </div>
</template>
<script>
import utils from 'heyui/utils/utils';
const prefix = 'h-numberinput';

export default {
  name: 'HNumberInput',
  emits: ['input', 'change', 'update:modelValue'],
  props: {
    modelValue: [Number, String],
    min: Number,
    max: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String
    },
    useInt: {
      type: Boolean,
      default: false
    },
    useOperate: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number
    }
  },
  data() {
    return {
      focusing: false,
      editValue: this.modelValue,
      valueBak: this.modelValue
    };
  },
  computed: {
    numberinputCls() {
      return {
        [prefix]: true,
        [`${prefix}-disabled`]: !!this.disabled
      };
    }
  },
  watch: {
    modelValue() {
      if (this.valueBak != this.modelValue) {
        this.editValue = this.modelValue;
        this.valueBak = this.modelValue;
      }
    }
  },
  mounted() {},
  methods: {
    plus() {
      if (this.disabled) return false;
      let value = this.getValue(this.modelValue);
      this.setvalue(utils.add(value || 0, this.step), 'handler');
    },
    minus() {
      if (this.disabled) return false;
      let value = this.getValue(this.modelValue);
      this.setvalue(utils.add(value || 0, -this.step), 'handler');
    },
    input(event) {
      if (isNaN(Number(event.target.value))) return false;
      let value = this.getValue(event.target.value);
      if (utils.isNumber(this.modelValue) && Math.abs(value - this.modelValue) <= 1 && this.precision) {
        return;
      }
      this.setvalue(value, 'input');
    },
    blur(event) {
      this.focusing = false;
      let value = this.getValue(event.target.value);
      this.setvalue(value, 'blur');
    },
    getValue(value) {
      if (value === '') return null;
      if (this.useInt) {
        let v = parseInt(value);
        return isNaN(v) ? null : v;
      } else {
        let v = parseFloat(value);
        return isNaN(v) ? null : v;
      }
    },
    setvalue(value, trigger) {
      if (this.disabled) return false;
      if (this.max !== undefined && value !== null) {
        value = Math.min(this.max, value);
      }
      if (this.min !== undefined && value !== null) {
        value = Math.max(this.min, value);
      }
      if (this.precision && utils.isNumber(value)) {
        value = Math.floor(utils.mul(value || 0, Math.pow(10, this.precision))) / Math.pow(10, this.precision);
        value = value.toFixed(this.precision);
      }
      this.valueBak = value;
      this.$emit('input', value);
      this.$emit('update:modelValue', value);
      if (trigger != 'input') {
        this.editValue = value;
      }
      if (trigger != 'input') {
        this.$emit('change', value);
      }
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
    }
  }
};
</script>
