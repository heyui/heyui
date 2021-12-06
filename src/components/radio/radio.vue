<template>
  <div class="h-radio" :class="{ 'h-radio-disabled': disabled, 'h-radio-single': isSingle }">
    <template v-if="!isSingle">
      <label
        v-for="option of arr"
        :key="option[key]"
        :class="{
          'h-radio-label': true,
          'h-radio-checked': option[key] == modelValue,
          'h-radio-un-checked': option[key] != modelValue,
          'h-radio-item-disabled': option.disabled
        }"
        @click="setvalue(option)"
        ><span class="radio-icon h-radio-icon"></span><span v-if="!$slots.item" class="h-radio-text">{{ option[title] }}</span
        ><slot v-else :item="option" name="item"></slot
      ></label>
    </template>
    <label
      v-else
      :class="{ 'h-radio-label': true, 'h-radio-checked': value == modelValue, 'h-radio-un-checked': value !== modelValue }"
      @click="setvalue()"
      ><span class="radio-icon h-radio-icon"></span><span><slot></slot></span
    ></label>
  </div>
</template>
<script>
import utils from 'heyui/utils/utils';
import config from 'heyui/utils/config';

export default {
  name: 'HRadio',
  emits: ['input', 'change', 'update:modelValue'],
  props: {
    modelValue: [Object, String, Boolean, Number],
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    value: [Object, String, Boolean, Number],
    dict: String,
    keyName: {
      type: String,
      default: () => config.getOption('dict', 'keyName')
    },
    titleName: {
      type: String,
      default: () => config.getOption('dict', 'titleName')
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  computed: {
    isSingle() {
      return !utils.isNull(this.value) && this.arr.length == 0;
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
    }
  },
  methods: {
    setvalue(value) {
      if (this.disabled) return;
      let result = null;
      if (this.isSingle) {
        result = this.value;
      } else {
        result = value[this.key];
      }
      this.$emit('input', result);
      this.$emit('update:modelValue', result);
      this.$emit('change', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, result);
      this.$el.dispatchEvent(event);
    }
  }
};
</script>
