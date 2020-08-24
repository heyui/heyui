<template>
  <ul :class="classes">
    <hMenuItem v-for="menu of menuDatas"
      :key="menu.key"
      :data="menu"
      :param="param"
      :status="status"
      :inlineCollapsed="inlineCollapsed"
      :mode="mode"
      @trigger="trigger"></hMenuItem>
  </ul>
</template>
<script>
import utils from 'heyui/src/utils/utils';
import config from 'heyui/src/utils/config';
import hMenuItem from './menu-item';

const prefix = 'h-menu';

const initStatus = (list = [], param, parent) => {
  let datas = [];
  for (let data of list) {
    let obj = { key: data[param.keyName], title: data[param.titleName], icon: data.icon, count: data.count, value: data, status: { opened: false, disabled: !!data.disabled }, parent };
    let children = data[param.childrenName] || [];
    obj.children = initStatus(children, param, obj);
    datas.push(obj);
  }
  return datas;
};

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
};
const updateOpened = (obj) => {
  let openedList = [];
  if (obj.parent) {
    openedList.push(obj.parent.key);
    openedList.push(...updateOpened(obj.parent));
  }
  return openedList;
};
const Props = {
  mode: ['normal', 'horizontal']
};
export default {
  name: 'hMenu',
  props: {
    option: Object,
    datas: {
      type: Array,
      default: () => []
    },
    className: {
      type: String,
      default: 'h-menu-dark'
    },
    accordion: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      validator(value) {
        return Props.mode.indexOf(value) > -1;
      },
      default: 'normal' // normal, vertical
    },
    inlineCollapsed: {
      type: Boolean,
      default: false
    },
    activeAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let param = {};
    param = utils.extend({}, config.getOption('menu'), this.option);
    return {
      param,
      status: {
        selected: null,
        opened: []
      }
    };
  },
  computed: {
    classes() {
      return {
        [`${prefix}`]: true,
        [this.className]: true,
        [`${prefix}-mode-${this.mode}`]: !this.isDropdownMenu,
        [`${prefix}-mode-vertical`]: this.isDropdownMenu,
        [`${prefix}-size-collapse`]: this.inlineCollapsed
      };
    },
    isDropdownMenu() {
      return this.mode === 'vertical' || this.inlineCollapsed;
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
      } else {
        this.status.selected = null;
        this.status.opened = [];
      }
    },
    trigger(data) {
      if (data.type == 'togglemenuEvent') {
        let menu = data.data;
        this.status.opened = utils.toggleValue(this.status.opened, menu.key);

        // accordion
        if (this.accordion && this.status.opened.indexOf(menu.key) > -1) {
          for (let key in this.menuobj) {
            let mo = this.menuobj[key];
            if (mo.parent === menu.parent && menu.key != key && this.status.opened.indexOf(mo.key) > -1) {
              this.status.opened.splice(this.status.opened.indexOf(mo.key), 1);
            }
          }
        }

        this.$emit('click', menu);
        let isParent = menu.children && menu.children.length > 0;
        if (isParent && (!this.activeAll || this.status.selected == menu.key)) {
          return;
        }

        this.status.selected = menu.key;
        this.$emit('select', menu.value);
        this.$emit('onclick', menu.value);
      }
    }
  },
  components: {
    hMenuItem
  }
};
</script>
