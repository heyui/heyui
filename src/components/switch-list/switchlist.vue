<template>
  <div :class="{ 'h-switch-list': true, 'h-switch-list-small': small, 'h-switch-list-disabled': disabled }">
    <span
      v-for="option of arr"
      :key="option[key]"
      :class="{ 'h-switch-list-span': true, 'h-switch-list-span-checked': option[key] == modelValue }"
      @click="setvalue(option)"
      ><i v-if="option.icon" :class="option.icon"></i>{{ option[title] }}</span
    >
  </div>
</template>
<script>
import config from 'heyui/utils/config';

export default {
  name: 'HSwitchList',
  emits: ['update:modelValue', 'change', 'input'],
  props: {
    small: {
      type: Boolean,
      default: false
    },
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    modelValue: [String, Boolean, Number, Object],
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
    arr() {
      if (!this.datas && !this.dict) {
        console.error('[HeyUI Error] Switchlist Component: Datas or dict parameters need to be defined at least.');
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
    setvalue(option) {
      let key = option[this.key];
      if (this.disabled) return;
      if (key == this.modelValue) return;
      this.$emit('update:modelValue', key);
      this.$emit('input', key);
      this.$emit('change', option);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, this.modelValue);
      this.$el.dispatchEvent(event);
    }
  }
};
</script>
