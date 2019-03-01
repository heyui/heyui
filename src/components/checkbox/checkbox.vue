<template>
  <div class="h-checkbox" :disabled="disabled" :class="{'h-checkbox-disabled': disabled}">
    <template v-if="!isSingle">
      <label v-for="option of arr" @click="setvalue(option)" :key="option[key]" :class="{'h-checkbox-checked': isInclude(option)}"><span
          :checked="isInclude(option)" :disabled="disabled" class="h-checkbox-native"></span><span class="h-checkbox-text" v-if="!$scopedSlots.item">{{option[title]}}</span><slot v-else :item="option" name="item"></slot></label>
    </template>
    <label v-else @click="setvalue()" :class="{'h-checkbox-checked': isChecked, 'h-checkbox-indeterminate': !isChecked&&indeterminate}"><span
        :checked="isChecked" :indeterminate="!isChecked&&indeterminate" :disabled="disabled" class="h-checkbox-native"></span><span
        v-if="$slots.default" class="h-checkbox-text">
        <slot></slot>
      </span></label>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  name: 'hCheckbox',
  model: {
    prop: 'checkStatus',
    event: 'input'
  },
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
    checkStatus: [Array, Boolean, Object, Number, String],
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
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  data() {
    return {
      isChecked: null,
      key: this.keyName,
      title: this.titleName
    };
  },
  mounted() {
    this.updateChecked();
  },
  watch: {
    checked() {
      this.updateChecked();
    },
    checkStatus() {
      this.updateChecked();
    }
  },
  methods: {
    updateChecked() {
      if (this.isSingle) {
        if (!utils.isNull(this.value)) {
          this.isChecked = this.checkList.indexOf(this.value) != -1;
        } else if (this.checked === true) {
          this.isChecked = this.checked;
        } else if (this.checkStatus === this.trueValue) {
          this.isChecked = true;
        } else if (this.checkStatus === this.falseValue) {
          this.isChecked = false;
        } else {
          this.isChecked = false;
        }
      }
    },
    setvalue(option) {
      if (this.disabled) return;
      let value = null;
      if (this.isSingle) {
        if (!utils.isNull(this.value)) {
          value = utils.toggleValue(this.checkList, this.value);
        } else if (!utils.isNull(this.checkStatus)) {
          value = this.isChecked ? this.falseValue : this.trueValue;
        } else if (this.checked === true) {
          value = this.checked;
        } else {
          value = this.isChecked ? this.falseValue : this.trueValue;
        }
      } else {
        value = utils.copy(this.checkStatus);
        let key = option[this.key];
        value = utils.toggleValue(value, key);
      }
      this.$emit('change', value);
      this.$emit('input', value);
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
  },
  computed: {
    checkList() {
      let checkStatus = this.checkStatus || [];
      if ((!utils.isNull(this.value) || !this.isSingle) && !utils.isArray(checkStatus)) {
        console.warn(`Checkbox: It's not allowed to use v-model with non-array value.`);
      }
      return utils.isArray(checkStatus) ? checkStatus : [];
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

      return utils.initOptions(datas, this);
    }
  }
};
</script>
