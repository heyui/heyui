<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'h-layout';
import utils from 'heyui/utils/utils';

export default {
  name: 'HLayout',
  props: {
    headerFixed: {
      type: Boolean,
      default: false
    },
    siderFixed: {
      type: Boolean,
      default: false
    },
    siderCollapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasSiderChild: false
    };
  },
  computed: {
    classes() {
      let classList = {
        [`${prefixCls}`]: true,
        [`${prefixCls}-has-sider`]: this.hasSiderChild,
        [`${prefixCls}-header-fixed`]: this.headerFixed,
        [`${prefixCls}-sider-fixed`]: this.siderFixed,
        [`${prefixCls}-sider-collapsed`]: this.siderCollapsed
      };
      return classList;
    }
  },
  mounted() {
    this.updateSider();
  },
  methods: {
    updateSider() {
      this.$nextTick(() => {
        for (let c of this.$el.childNodes) {
          if (utils.hasClass(c, 'h-layout-sider')) {
            this.hasSiderChild = true;
            return;
          }
        }
        this.hasSiderChild = false;
      });
    }
  }
};
</script>
