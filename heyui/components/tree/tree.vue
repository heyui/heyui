<template>
  <div :class="treeCls">
    <Search v-if="filterable"
            @search="search"></Search>
    <ul class="h-tree-body">
      <treeoption v-for="tree of treeDataShow"
                  :data="tree"
                  :param="param"
                  :key="tree"
                  :multiple="multiple"
                  :status="status"
                  @trigger="trigger"
                  :data-mode="dataMode"></treeoption>
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

const updateChildStatus = (data, column, value) => {
  if (data.children) {
    for (let child of data.children) {
      child.status[column] = value;
      updateChildStatus(child, column, value);
    }
  }
}

const updateModeAllChildChooseStatus = (data) => {
  if (data.children) {
    let isIndeterminateStatus = false;
    for (let child of data.children) {
      if (data.status.choose) {
        child.status.choose = true;
      } else if (child.status.choose) {
        isIndeterminateStatus = true;
      }
      updateChildStatus(child);
    }
    if (!data.status.choose && isIndeterminateStatus) {
      data.status.indeterminate = true;
    }
  }
}

const getChooseNode = (data, options) => {
  if (data.status.choose) {
    options.push(data.value);
  } else {
    for (let child of data.children) {
      getChooseNode(child, options);
    }
  }
  return options;
}

const updateModeSomeChildChooseStatus = (data) => {
  if (data.children) {
    let isChoose = false;
    for (let child of data.children) {
      updateChildStatus(child);
      if (child.status.choose) {
        isChoose = true;
      }
    }
    if (isChoose) {
      data.status.choose = true;
    }
  }
}

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
    },
    dataMode: {
      type: String,
      default: "all"
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
      treeObj: {},
      treeDataShow: []
    };
  },
  mounted() {
    this.initTreeDatas();
  },
  methods: {
    search(value) {
      this.searchValue = value === '' ? null : value;
      this.treeDataShow = this.treeDatas;
    },
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
        this.$emit('select', data.value);
      } else if (type == 'chooseEvent') {
        let choose = data.status.choose;
        updateChildStatus(data, 'choose', choose);
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
      this.treeDataShow = this.treeDatas;
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
        let obj = { key: data[this.param.keyName], title: data[this.param.titleName], value: data, status: { opened: false, loading: false, isWait, selected: false, indeterminate: false, choose: false, disabled: !!data.disabled } };
        let children = data[this.param.childrenName] || [];
        obj[this.param.childrenName] = this.initTreeModeData(children, isWait);
        this.treeObj[obj.key] = obj;
        datas.push(obj);
      }
      return datas;
    },
    expandAll() {
      for (let tree of Object.keys(this.treeObj)) {
        this.treeObj[tree].status.opened = true;
      }
    },
    foldAll() {
      for (let tree of Object.keys(this.treeObj)) {
        this.treeObj[tree].status.opened = false;
      }
    },
    updateSelect(key) {
      let option = this.treeObj[key];
      if (option) {
        this.status.selected = key;
      }
    },
    getSelect() {
      if (utils.isNull(this.status.selected)) {
        return null;
      }
      let option = this.treeObj[this.status.selected];
      return option.value;
    },
    updateChoose(choose) {
      if (!this.multiple) return;
      for (let key of Object.keys(this.treeObj)) {
        let tree = this.treeObj[key];
        tree.status.choose = choose.indexOf(tree.key) != -1;
      }

      if (this.dataMode == 'all') {
        for (let data of this.treeDatas) {
          updateModeAllChildChooseStatus(data);
        }
      } else {
        for (let data of this.treeDatas) {
          updateModeSomeChildChooseStatus(data);
        }
      }
    },
    getFullChoose() {
      let options = [];
      for (let key of Object.keys(this.treeObj)) {
        let tree = this.treeObj[key];
        if (tree.status.choose) {
          options.push(tree.value);
        }
      }
      return options;
    },
    getChoose() {
      if (this.dataMode == 'some') {
        return this.getFullChoose();
      } else {
        let options = [];
        for (let data of this.treeDatas) {
          options = getChooseNode(data, options);
        }
        return options;
      }
    }
  },
  computed: {
    treeDataShow() {
      if (this.searchValue != null) {
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
