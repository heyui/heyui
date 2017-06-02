<template>
  <ul :class="classes">
    <h-menuItem v-for="menu of menuDatas"
        :key="menu"
        :data="menu"
        :param="param"
        :status="status"
        @trigger="trigger"></h-menuItem>

  </ul>
</template>
<script>
import utils from '../../utils/utils';
import config from '../../utils/config';
import hMenuItem from './menu-item';

const prefix = 'h-menu';

const initStatus = (list = [], param, parent) => {
  let datas = [];
  for (let data of list) {
    let obj = { key: data[param.keyName], title: data[param.titleName], icon: data.icon, value: data, status: { opened: false, disabled: !!data.disabled }, parent };
    let children = data[param.childrenName] || [];
    obj.children = initStatus(children, param, obj);
    datas.push(obj);
  }
  return datas;
}

const getObj = (list = [], param) => {
  let obj = {};
  for (let data of list) {
    let key = data.key;
    if (key) {
      obj[key] = data;
    }
    let children = data.children;
    if (children && children.length) {
      utils.extend(obj, getObj(children, param));
    }
  }
  return obj;
}
const updateOpened = (obj) => {
  let openedList = [];
  if (obj.parent) {
    openedList.push(obj.parent.key);
    openedList.push(...updateOpened(obj.parent));
  }
  return openedList;
}

export default {
  props: {
    option: Object,
    datas: {
      type: Array,
      default: () => []
    },
    className: {
      type: String,
      default: 'h-menu-dark'
    }
  },
  data() {
    let param = {};
    param = utils.extend({}, config.getOption("menu"), this.option);
    return {
      param,
      status: {
        selected: null,
        opened: []
      }
    }
  },
  computed: {
    classes() {
      return {
        [`${prefix}`]: true,
        [this.className]: true
      };
    },
    menuobj() {
      return getObj(this.menuDatas);
    },
    menuDatas() {
      return initStatus(this.datas, this.param);
    }
  },
  methods: {
    select(key) {
      let selected = this.menuobj[key];
      if (selected) {
        this.status.selected = key;
        this.status.opened = updateOpened(selected);
      }
    },
    trigger(data) {
      if (data.type == 'togglemenuEvent') {
        utils.toggleValue(this.status.opened, data.data.key);
        if (data.data.children && data.data.children.length > 0) {
          return;
        }
        this.status.selected = data.data.key;
        this.$emit('click', data.data.value);
      }
    }
  },
  components: {
    hMenuItem
  }
};
</script>
