<template>
  <ul class="h-tree-option">
    <li>
      <span class='h-tree-option-expand-icon' v-if="data.children.length>0"><i class='h-icon-right'></i><i class='h-icon-down'></i></span>
      <Checkbox v-if="param.multiple"></Checkbox>
      <span class='h-tree-option-desc'>{{data.title}}</span>
      <ul v-if="data.children.length>0">
        <treeOption v-for="child of data.children" :key="child" :data="child" param="param"></treeOption>
      </ul>
    </li>
  </ul>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  name: 'treeOption'
  props: {
    data: Object,
    param: Object
  },
  data() {
    return {
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
