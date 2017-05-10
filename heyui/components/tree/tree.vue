<template>
  <div :class="treeCls">
    <div class="h-tree-filter"
         v-if="filterable">
      <input type="text">
    </div>
    <ul class="h-tree-body">
      <treeoption v-for="tree of treeDataShow"
                  :data="tree"
                  :param="param"
                  :key="tree"
                  :multiple="multiple"
                  :status="status"
                  @trigger="trigger"></treeoption>
    </ul>
    <Loading :loading="globalloading"></Loading>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import treeoption from './treeoption';
import Search from '../search';

const prefix = 'h-tree';

export default {
  props: {
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
      status: {
        selected: null,
        selects: [],
        opens: [],
        loadings: []
      },
      treeDatas: [],
      treeObj: {}
    };
  },
  mounted() {
    this.initTreeDatas();
  },
  methods: {
    trigger(data) {
      let type = data.type;
      data = data.data;
      if (type == 'toggleTreeEvent') {
        data.status.opened = !data.status.opened;
      } else if (type == 'loadDataEvent') {
        if (utils.isFunction(this.param.getDatas)) {
          data.status.loading = true;
          this.param.getDatas.call(this.param, data.value, (result) => {
            data.children = this.initTreeModeData(result, true);
            data.status.isWait = false;
            data.status.loading = false;
            data.status.opened = true;
          }, () => {
            data.status.loading = false;
          });
        }
      } else if (type == 'selectEvent') {
        this.status.selected = data.key;
      }
    },
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
      let datas = utils.copy(this.param.datas);
      if (utils.isFunction(this.param.getTotalDatas) || utils.isFunction(this.param.getDatas)) {
        datas = [];
        this.globalloading = true;
        let loadData = this.param.getTotalDatas || this.param.getDatas;
        let param = [(result) => {
          this.treeDatas = this.initDatas(utils.copy(result));
          this.globalloading = false;
        }, () => {
          this.globalloading = false;
        }];
        if (this.param.getDatas) {
          param.unshift(null);
        }
        loadData.apply(this.param, param);
      }
      this.treeDatas = this.initDatas(datas);
    },
    initDatas(datas) {
      let list = datas;
      if (this.param.dataMode == 'list' && datas.length > 0) {
        list = utils.generateTree(datas, this.param);
      }
      let isWait = utils.isFunction(this.param.getDatas);
      return this.initTreeModeData(list, isWait);
    },
    initTreeModeData(list, isWait) {
      let datas = [];
      for (let data of list) {
        let obj = { key: data[this.param.keyName], title: data[this.param.titleName], value: data, status: { opened: false, loading: false, isWait, selected: false, choose: false } };
        let children = data[this.param.childrenName] || [];
        obj[this.param.childrenName] = this.initTreeModeData(children, isWait);
        this.treeObj[obj.key] = obj;
        datas.push(obj);
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
    },
    treeCls() {
      return {
        [prefix]: true,
        [`${prefix}-multiple`]: !!this.multiple,
        [`${prefix}-single`]: !this.multiple
      }
    }
  },
  components: {
    treeoption,
    Search
  }
};
</script>
