<template>
  <div :class="numberinputCls">
    <div class="h-numberinput-show"
         :class="{'focusing':focusing}">
      <input type="text" :placeholder="placeholder" :disabled="disabled" class="h-numberinput-input" :value="value" @input="input" @focus="focusing=true" @blur="blur"/>
      <div class="h-numberinput-operate" v-if="useOperate">
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
  name: 'NumberInput',
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
      type: String,
      // default: "请选择"
    },
    useInt: { //是否验证整数
      type: Boolean,
      default: false
    },
    useOperate: {
      type: Boolean,
      default: false
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
      let value = this.getValue(this.value);
      this.setvalue(utils.addFn(value, this.step), 'handler');
    },
    minus() {
      if (this.disabled) return false;
      let value = this.getValue(this.value);
      this.setvalue(utils.addFn(value, -this.step), 'handler');
    },
    input(event) {
      let value = this.getValue(event.target.value);
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
        return parseInt(value) || 0;
      } else {
        return parseFloat(value) || 0;
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
      this.$emit('input', value);
      if(trigger == 'blur') {
        this.$emit('change', value);
      }
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
