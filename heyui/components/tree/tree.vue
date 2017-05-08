<template>
  <div class="h-tree">
    <div class="h-tree-filter" v-if="filterable"><input type="text"></div>
    <treeoption v-for="tree of treeDataShow" :data="tree" :param="param" :key="tree"></treeoption>
    <Loading :loading="globalloading"></Loading>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import treeoption from './treeoption';
import Search from '../search';

export default {
  props: {
    datas: [Object, Array],
    dict: String,
    options: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    value: [Array, Object, String, Number],
    filterable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let param = {};
    if (this.config) {
      param = utils.extend({}, config.getOption("tree.default"), config.getOption(`tree.configs.${this.config}`), this.options);
    } else {
      param = utils.extend({}, config.getOption("tree.default"), this.options);
    }
    return {
      param,
      globalloading: false,
      loading: true,
      treeDatas: []
    };
  },
  mounted() {
    this.initTreeDatas();
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
    },
    initTreeDatas() {
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      if (datas) {
        datas = utils.initOptions(datas, this);
      }
      if (utils.isFunction(this.param.getTotalDatas) || utils.isFunction(this.param.getDatas)) {
        datas = [];
        this.globalloading = true;
        (this.param.getTotalDatas || this.param.getDatas).call(this.param, (result) => {
          log(result);
          this.treeDatas = this.initDatas(result);
          this.globalloading = false;
        }, () => {
          this.globalloading = false;
        });
      }
      this.treeDatas = this.initDatas(datas);
    },
    initDatas(datas) {
      if (this.param.dataMode == 'list' && datas.length > 0) {
        return utils.generateTree(datas, (list, parent) => {
          let parentValue = list[this.param.parent];
          if (utils.isNull(parent)) {
            return utils.isNull(parentValue);
          } else if (utils.isObject(parent)) {
            return parent[this.param.key] == parentValue;
          } else if (!utils.isObject(parent)) {
            return parent == parentValue;
          }
        }, this.param.topParent);
      }
      return datas;
    }
  },
  computed: {
    treeDataShow() {
      if (!utils.isNull(this.searchValue)) {
        let searchValue = this.searchValue.toLowerCase();
        return this.treeDatas.filter((item) => {
          return (item.html || item.title).toLowerCase().indexOf(searchValue) != -1;
        });
      } else {
        return this.treeDatas;
      }
    }
  },
  components: {
    treeoption,
    Search
  }
};
</script>
