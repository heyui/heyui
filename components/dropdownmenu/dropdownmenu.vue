<template>
  <div :class="dropdownmenuCls">
    <div :class="showCls"><slot></slot><i class="h-icon-down" v-if="this.toggleIcon"></i></div>
    <div :class="groupCls">
        <ul>
          <li class="h-dropdownmenu-item" :class="{'h-dropdownmenu-item-divider':!!option.divider,'disabled': !!option.divider || option.disabled}" v-for="option of options" @click="onclick(option)">
            <i v-if="option.icon" :class="option.icon"></i>
            <span>{{option[title]}}</span>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

const prefix = 'h-dropdownmenu';

export default {
  props: {
    dict: String,
    datas: [Array, Object],
    trigger:{
      type: String,  //click,hover
      default: "click"
    },
    equalWidth: {
      type: Boolean,
      default: false
    },
    toggleIcon: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    }
  },
  data() {
    return {
      key: config.getOption('dict', 'key_field'),
      title: config.getOption('dict', 'title_field')
    };
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el.querySelector('.h-dropdownmenu-show');
      let content = this.$el.querySelector('.h-dropdownmenu-group');
      this.dropdown = new Dropdown(el, {
        content,
        trigger: this.trigger,
        equalWidth: this.equalWidth,
        container: document.body,
        placement: this.placement
      });
    });
  },
  methods: {
    onclick(option) {
      if(!!option.disabled)return;
      this.$emit("onclick", option[this.key]);
      if (this.dropdown.popperInstance) this.dropdown.hide();
    }
  },
  computed: {
    dropdownmenuCls() {
      return {
        [`${prefix}`]: true
      }
    },
    showCls() {
      return {
        [`${prefix}-show`]: true,
        [`${prefix}-show-toggle`]: true
      }
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true,
      }
    },
    options() {
      if (!this.datas && !this.dict) {
        log.error('dropdownmenu组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      datas = utils.initOptions(datas, this);
      return datas;
    }
  }
};
</script>