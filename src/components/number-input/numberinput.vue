<template>
  <div :class="numberinputCls">
    <div class="h-numberinput-show"
         :class="{'focusing':focusing}">
      <input type="text" :placeholder="placeholder" :disabled="disabled" class="h-numberinput-input h-input" v-model="editValue" @input="input" @focus="focusing=true" @blur="blur"/>
      <div class="h-numberinput-operate" v-if="useOperate">
        <span @click="minus"><i class="h-icon-minus"></i></span>
        <span @click="plus"><i class="h-icon-plus"></i></span>
      </div>
    </div>
  </div>
</template>
<script>

import utils from 'heyui/src/utils/utils';
const prefix = 'h-numberinput';

export default {
  name: 'hNumberInput',
  props: {
    value: [ Number, String ],
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
      editValue: this.value,
      valueBak: this.value
    };
  },
  watch: {
    value() {
      // this.editValue = this.value;
      if (this.valueBak != this.value) {
        this.editValue = this.value;
        this.valueBak = this.value;
      }
    }
  },
  mounted() {
  },
  methods: {
    plus() {
      if (this.disabled) return false;
      let value = this.getValue(this.value);
      this.setvalue(utils.add(value || 0, this.step), 'handler');
    },
    minus() {
      if (this.disabled) return false;
      let value = this.getValue(this.value);
      this.setvalue(utils.add(value || 0, -this.step), 'handler');
    },
    input(event) {
      if (isNaN(Number(event.target.value))) return false;
      let value = this.getValue(event.target.value);
      if (utils.isNumber(this.value) && Math.abs(value - this.value) <= 1 && this.precision) {
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
  },
  computed: {
    numberinputCls() {
      return {
        [prefix]: true,
        [`${prefix}-disabled`]: !!this.disabled
      };
    }
  }
};
</script>
