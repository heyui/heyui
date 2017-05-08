<template>
  <div class="h-checkbox" :disabled="disabled">
    <template v-if="arr.length">
      <label v-for="option of arr" @click="setvalue(option)">
        <span :checked="isInclude(option)" :disabled="disabled"></span>{{option[title]}}</label>
    </template>
    <label v-else @click="setvalue()">
      <span :checked="checked||value" :indeterminate="indeterminate" :disabled="disabled"></span>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  props: {
    datas: [Object, Array],
    dict: String,
    value: {
      type: [Array, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [Array, String, Number],
      default: false
    },
    dataMode: {
      type: String, //parent
      default: 'child'
    }
  },
  data() {
    return {
      key: config.getOption('dict', 'key_field'),
      title: config.getOption('dict', 'title_field'),
    };
  },
  methods: {
    setvalue(option) {
      if (this.disabled) return;
      let value = utils.copy(this.value);
      if (this.arr.length == 0) {
        value = !value;
      } else {
        let key = option[this.key];
        let index = this.check(key);
        if (index > -1) {
          value.splice(index, 1);
        } else {
          value.push(key);
        }
      }
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    options() {
      if (!this.datas && !this.dict) {
        log.error('tree组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }

      let data = utils.initOptions(datas, this);

      if (this.mode == 'list') {
        data = utils.generateTree(data, (child, parent) => {
          let parentValue = child[this.param.parentName];
          if (utils.isNull(parent)) {
            return utils.isNull(parentValue) || !parentDict[parentValue];
          } else if (utils.isObject(parent)) {
            return parent[that.param.keyName] == parentValue;
          } else if (!utils.isObject(parent)) {
            return parent == parentValue;
          }
        }, that.param.topParent);
      }
      return data;
    }
  }
};
</script>
