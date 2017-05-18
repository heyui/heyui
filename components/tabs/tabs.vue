<template>
  <div :class="tabsCls">
    <div v-for="a of arr" @click="trigger(a)" :class="{'h-tabs-selected':a[key] == selected}">
      <span v-if="!$scopedSlots.item">{{a[title]}}</span>
      <slot v-else :tab="a" name="item"></slot>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

const prefix = 'h-tabs';

export default {
  props: {
    dict: String,
    datas: [Object, Array],
    defaultSelect: [String, Number],
    className: {
      type: String,
      default: 'h-tabs-default'
    }
  },
  data() {
    return {
      key: config.getOption('dict', 'keyName'),
      title: config.getOption('dict', 'titleName'),
      selected: this.defaultSelect
    }
  },
  methods: {
    trigger(data) {
      if (this.selected == data.key) return;
      this.selected = data.key;
      this.$emit('change', data);
    }
  },
  watchs: {
    defaultSelect() {
      this.selected = this.defaultSelect;
    }
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
        log.error('Tab组件: datas或者dict参数最起码需要定义其中之一');
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
