<template>
  <div class="h-checkbox" :class="{ 'h-checkbox-disabled': disabled, 'h-checkbox-single': isSingle }">
    <template v-if="!isSingle">
      <label
        v-for="option of arr"
        :key="option[key]"
        :class="{
          'h-checkbox-label': true,
          'h-checkbox-checked': isInclude(option),
          'h-checkbox-item-disabled': option.disabled,
          'h-checkbox-indeterminate': option.indeterminate
        }"
        @click="setvalue(option)"
        ><span class="h-checkbox-native"></span><span v-if="!$slots.item" class="h-checkbox-text">{{ option[title] }}</span
        ><slot v-else :item="option" name="item"></slot
      ></label>
    </template>
    <label
      v-else
      :class="{ 'h-checkbox-label': true, 'h-checkbox-checked': isSingleChecked, 'h-checkbox-indeterminate': !isSingleChecked && indeterminate }"
      @click="setvalue()"
      ><span class="h-checkbox-native"></span><span v-if="$slots.default" class="h-checkbox-text"><slot></slot></span
    ></label>
  </div>
</template>
<script>
import config from 'heyui/utils/config';
import utils from 'heyui/utils/utils';
import { message } from 'heyui';
import Locale from 'heyui/mixins/locale';

export default {
  name: 'HCheckbox',
  mixins: [Locale],
  emits: ['input', 'change', 'update:modelValue'],
  props: {
    dict: String,
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    value: [Object, Number, String],
    checked: {
      type: Boolean
    },
    modelValue: [Array, Boolean, Object, Number, String],
    indeterminate: {
      type: Boolean,
      default: false
    },
    keyName: {
      type: String,
      default: () => config.getOption('dict', 'keyName')
    },
    titleName: {
      type: String,
      default: () => config.getOption('dict', 'titleName')
    },
    limit: Number,
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  computed: {
    checkList() {
      let modelValue = this.modelValue || [];
      if ((!utils.isNull(this.value) || !this.isSingle) && !utils.isArray(modelValue)) {
        console.warn(`[HeyUI WARNING] Checkbox Component: It's not allowed to use v-model with non-array value.`);
      }
      return utils.isArray(modelValue) ? modelValue : [];
    },
    isSingle() {
      return this.arr.length == 0;
    },
    arr() {
      if (!this.datas && !this.dict) {
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }

      return config.initOptions(datas, this);
    },
    isSingleChecked() {
      if (this.isSingle) {
        if (!utils.isNull(this.value)) {
          return this.checkList.indexOf(this.value) !== -1;
        } else if (this.checked === true) {
          return this.checked;
        } else if (this.modelValue === this.trueValue) {
          return true;
        } else if (this.modelValue === this.falseValue) {
          return false;
        } else {
          return false;
        }
      }
      return false;
    }
  },
  methods: {
    setvalue(option) {
      if (this.disabled || (option && option.disabled)) return;
      let value = null;
      if (this.isSingle) {
        if (!utils.isNull(this.value)) {
          value = utils.toggleValue(this.checkList, this.value);
        } else if (!utils.isNull(this.modelValue)) {
          value = this.isSingleChecked ? this.falseValue : this.trueValue;
        } else if (this.checked === true) {
          value = this.checked;
        } else {
          value = this.isSingleChecked ? this.falseValue : this.trueValue;
        }
      } else {
        value = utils.copy(this.modelValue);
        let key = option[this.key];
        value = utils.toggleValue(value, key);
        if (this.limit && this.limit < value.length) {
          message.error(this.hlang('h.checkbox.limitSize', { limitSize: this.limit }));
          return;
        }
      }
      this.$emit('change', value);
      this.$emit('input', value);
      this.$emit('update:modelValue', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
    },
    check(key) {
      let value = this.checkList.map(item => String(item));
      return value.indexOf(String(key));
    },
    isInclude(option) {
      let value = this.checkList.map(item => String(item));
      let index = value.indexOf(String(option[this.key]));
      return index > -1;
    }
  }
};
</script>
