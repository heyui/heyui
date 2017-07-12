<template>
  <div :class="tabsCls">
    <div v-for="a of arr" @click="trigger(a)" :class="{'h-tabs-selected':a[key] == value}">
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
    value: [String, Number],
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
    }
  },
  methods: {
    trigger(data) {
      if (this.value == data[this.key]) return;
      this.$emit('input', data[this.key])
      this.$emit('change', data);
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
