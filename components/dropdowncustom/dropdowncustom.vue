<template>
  <div :class="dropdowncustomCls">
    <div :class="showCls"><slot></slot><i class="h-icon-down" v-if="this.toggleIcon"></i></div>
    <div :class="groupCls">
      <slot name='content'></slot>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

const prefix = 'h-dropdowncustom';

export default {
  props: {
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
      let el = this.$el.querySelector('.h-dropdowncustom-show');
      let content = this.$el.querySelector('.h-dropdowncustom-group');
      this.dropdown = new Dropdown(el, {
        content,
        trigger: this.trigger,
        equalWidth: this.equalWidth,
        container: document.body,
        placement: this.placement
      });
    });
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
        [`${prefix}-show-toggle`]: true
      }
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true,
      }
    }
  }
};
</script>