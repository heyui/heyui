<template>
  <div>
    <div :class="noticeCls">
      <div class="h-notify-mask" v-if="hasMask" @click="setvalue(true)"></div>
      <div class="h-notify-body" @click.self="setvalue(true)">
        <transition :name="type">
          <div :class="containerCls" v-if="isShow">
            <span class="h-notify-close h-icon-close" v-if="hasCloseIcon" @click="setvalue(false)"></span>
            <header class="h-modal-header" v-if="hasHeader"><slot name='header'></slot></header>
            <div :class="contentCls"><slot></slot></div>
            <footer class="h-modal-footer" v-if="hasFooter"><slot name='footer'></slot></footer>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';

const prefix = 'h-modal';
const notifyprefix = 'h-notify';

export default {
  name: 'hModal',
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: false
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    hasDivider: {
      type: Boolean,
      default: () => config.getOption('modal', 'hasDivider')
    },
    closeOnMask: {
      type: Boolean,
      default: true
    },
    middle: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    className: String,
    type: String
  },
  watch: {
    value() {
      if (this.value) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  data() {
    return {
      isOpened: this.value,
      isShow: this.value,
      el: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.el = this.$el.firstChild;
      document.body.appendChild(el);
      if (!this.value) {
        el.style.display = 'none';
      }
    });
  },
  beforeDestroy() {
    let el = this.el;
    if (el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
    }
  },
  methods: {
    show() {
      let el = this.el;
      document.body.appendChild(el);
      el.style.display = 'block';
      this.isShow = true;
      if (this.hasMask) {
        let body = document.documentElement;
        let scrollWidth = window.innerWidth - body.clientWidth;
        body.style.overflow = 'hidden';
        body.style.paddingRight = `${scrollWidth}px`;
      }
      setTimeout(() => {
        this.isOpened = true;
      }, 100);
    },
    hide() {
      let el = this.el;
      this.isOpened = false;
      setTimeout(() => {
        el.style.display = 'none';
        this.isShow = false;
      }, 200);
      let body = document.documentElement;
      body.style.overflow = '';
      body.style.paddingRight = '';
    },
    setvalue(fromMask) {
      if (!fromMask || (fromMask && this.hasMask && this.closeOnMask)) {
        this.$emit('input', false);
      }
    }
  },
  computed: {
    contentCls() {
      return {
        [`${notifyprefix}-content`]: true
      };
    },
    containerCls() {
      return {
        [`${notifyprefix}-container`]: true
      };
    },
    noticeCls() {
      return {
        [prefix]: true,
        [notifyprefix]: true,
        [`${prefix}-type-default`]: !this.type,
        [`${notifyprefix}-show`]: this.isOpened,
        [`${notifyprefix}-has-mask`]: this.hasMask,
        [`${notifyprefix}-no-mask`]: !this.hasMask,
        [`${notifyprefix}-has-close`]: this.hasCloseIcon,
        [`${prefix}-has-divider`]: this.hasDivider,
        [`${prefix}-container-center`]: !!this.middle,
        [`${prefix}-type-${this.type}`]: this.type,
        [`${prefix}-transparent`]: this.transparent,
        [`${prefix}-full-screen`]: this.fullScreen,
        [this.className]: !!this.className
      };
    },
    hasHeader() {
      return !!this.$slots.header;
    },
    hasFooter() {
      return !!this.$slots.footer;
    }
  }
};
</script>
