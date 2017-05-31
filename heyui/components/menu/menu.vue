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

const initStatus = (list = [], param) => {
  let datas = [];
  for (let data of list) {
    let obj = { key: data[param.keyName], title: data[param.titleName], icon: data.icon, value: data, status: { opened: false, disabled: !!data.disabled } };
    let children = data[param.childrenName] || [];
    obj[param.childrenName] = initStatus(children, param);
    datas.push(obj);
  }
  return datas;
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
    menuDatas() {
      return initStatus(this.datas, this.param);
    }
  },
  methods: {
    trigger(data) {
      if (data.type == 'togglemenuEvent') {
        // this.status.opened.splice(0, this.status.opened.length);
        utils.toggleValue(this.status.opened, data.data.key);
        if (data.data.children && data.data.children.length > 0) {
          return;
        }
        this.status.selected = data.data.key;
      }
    }
  },
  components: {
    hMenuItem
  }
};
</script>
