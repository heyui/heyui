<template>
  <div :class="dropdowncustomCls">
    <div :class="showCls">
      <div class="h-dropdowncustom-show-content"><slot></slot></div>
      <i class="h-icon-down" v-if="toggleIcon"></i>
    </div>
    <div :class="groupCls">
      <slot name='content' v-if="isShow"></slot>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import Dropdown from '../../plugins/dropdown';

const prefix = 'h-dropdowncustom';

export default {
  name: 'hDropdownCustom',
  props: {
    trigger: {
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
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
    },
    className: {
      type: String,
      default: 'h-dropdownmenu-default'
    },
    offset: [String, Number],
    showClass: String
  },
  data() {
    return {
      isShow: false,
      dropdown: null,
      el: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.el = this.$el.querySelector('.h-dropdowncustom-show');
      let content = this.$el.querySelector('.h-dropdowncustom-group');
      let that = this;
      this.dropdown = new Dropdown(el, {
        content,
        offset: this.offset,
        trigger: this.trigger,
        equalWidth: this.equalWidth,
        placement: this.placement,
        disabled: this.disabled,
        events: {
          show(next){
            that.isShow = true;
            that.$emit('show');
          },
          hide: ()=>{
            that.$emit('hide');
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
  beforeDestroy() {
    let el = this.el;
    if(el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
    }
    if(this.dropdown) {
      this.dropdown.destory();
    }
  },
  computed: {
    dropdowncustomCls() {
      return {
        [`${prefix}`]: true
      }
    },
    showCls() {
      return {
        [`${prefix}-show`]: true,
        [`${prefix}-disabled`]: !!this.disabled,
        [`${prefix}-show-toggle`]: !!this.toggleIcon,
        [this.className]: !!this.className,
        [this.showClass] : !!this.showClass
      }
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true,
      }
    }
  },
  methods: {
    update() {
      this.dropdown.update();
    },
    hide() {
      this.dropdown.hide();
    },
    show() {
      this.dropdown.show();
    }
  }
};
</script>