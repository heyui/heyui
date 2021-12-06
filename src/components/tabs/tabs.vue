<template>
  <div :class="tabsCls">
    <div
      v-for="(a, index) of arr"
      :key="a[key]"
      :class="{ 'h-tabs-selected': a[key] == modelValue, 'h-tabs-item-selected': a[key] == modelValue }"
      class="h-tabs-item"
      @click="trigger(a, index)"
    >
      <span v-if="!$slots.item">{{ a[title] }}</span>
      <slot v-else :tab="a" name="item"></slot>
    </div>
  </div>
</template>
<script>
import config from 'heyui/utils/config';

const prefix = 'h-tabs';

export default {
  name: 'HTabs',
  emits: ['update:modelValue', 'input', 'change', 'clickItem'],
  props: {
    dict: String,
    datas: [Object, Array],
    modelValue: [String, Number],
    className: {
      type: String,
      default: 'h-tabs-default'
    },
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
    tabsCls() {
      return {
        [`${prefix}`]: true,
        [this.className]: !!this.className
      };
    },
    arr() {
      if (!this.datas && !this.dict) {
        console.error('[HeyUI Error] Tabs Component: Datas or dict parameters need to be defined at least.');
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
    trigger(data, index) {
      if (this.modelValue != data[this.key]) {
        this.$emit('input', data[this.key]);
        this.$emit('update:modelValue', data[this.key]);
        this.$emit('change', data, index);
      }
      this.$emit('clickItem', data, index);
    }
  }
};
</script>
