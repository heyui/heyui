<template>
  <div :class="dropdownmenuCls">
    <div :class="showCls">
      <slot></slot><i class="h-icon-down"
         v-if="this.toggleIcon"></i></div>
    <div :class="groupCls" :style="groupStyle">
      <ul v-if="isShow">
        <li class="h-dropdownmenu-item"
            :class="{'h-dropdownmenu-item-divider':!!option.divider,'disabled': !!option.divider || option.disabled}"
            v-for="option of options"
            @click="onclick(option)" :key="option[key]">
          <div v-if="option[html]"
               v-html="option[html]"></div>
          <template v-else>
            <i v-if="option.icon"
               :class="option.icon"></i>
            <span>{{option[title]}}</span>
          </template>
          <Badge v-if="showCount&&option.count"
                 :count="option.count"
                 :max-count="maxCount"
                 position="right"></Badge>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';
import Badge from '../badge';

const prefix = 'h-dropdownmenu';

export default {
  props: {
    dict: String,
    datas: [Array, Object],
    trigger: {
      type: String,  //click,hover
      default: "click"
    },
    equalWidth: {
      type: Boolean,
      default: false
    },
    width: Number,
    toggleIcon: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    showCount: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxCount: {
      type: Number,
      default: 99
    },
    className: {
      type: String,
      default: 'h-dropdownmenu-default'
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
      title: this.titleName,
      html: 'dropdownmenuHtml',
      isShow: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el.querySelector('.h-dropdownmenu-show');
      let content = this.$el.querySelector('.h-dropdownmenu-group');
      let that = this;
      this.dropdown = new Dropdown(el, {
        content,
        trigger: this.trigger,
        disabled: this.disabled,
        equalWidth: this.equalWidth,
        placement: this.placement,
        events: {
          show(){
            that.isShow = true;
          }
        }
      });
    });
  },
  watch: {
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  methods: {
    onclick(option) {
      if (!!option.disabled) return;
      this.$emit("onclick", option[this.key]);
      this.dropdown.hide();
    }
  },
  computed: {
    dropdownmenuCls() {
      return {
        [`${prefix}`]: true
      }
    },
    groupStyle() {
      let styles = {};
      if (this.width) {
        styles.width = `${this.width}px`;
      }
      return styles;
    },
    showCls() {
      return {
        [`${prefix}-show`]: true,
        [`${prefix}-disabled`]: !!this.disabled,
        [`${prefix}-show-toggle`]: !!this.toggleIcon,
        [this.className]: true
      }
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true,
        [`${this.className}-group`]: true
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
  },
  components: {
    Badge
  }
};
</script>