<template>
  <div>
    <div :class="noticeCls">
      <div class="h-notify-mask" v-if="hasMask" @click="setvalue(true)"></div>
      <div class="h-notify-wrap" @click.self="setvalue(true)">
        <transition :name="type">
          <div class="h-notify-container" v-if="isShow">
            <div class="h-notify-content">
              <span class="h-notify-close h-icon-close" v-if="hasCloseIcon" @click="setvalue(false)"></span>
              <header class="h-modal-header" v-if="hasHeader || title">
                <span class="h-modal-title" v-if="title">{{ title }}</span
                ><slot name="header"></slot>
              </header>
              <div class="h-notify-body"><slot></slot></div>
              <footer class="h-modal-footer" v-if="hasFooter"><slot name="footer"></slot></footer>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import config from 'heyui/utils/config';
import Draggable from 'heyui/plugins/draggable';

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
    modelValue: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    className: String,
    type: String,
    title: String
  },
  watch: {
    modelValue() {
      if (this.modelValue) {
        this.show();
      } else {
        this.hide();
      }
    },
    draggable() {
      this.doDraggable();
    }
  },
  data() {
    return {
      isOpened: this.modelValue,
      isShow: this.modelValue,
      el: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      let el = (this.el = this.$el.firstChild);
      document.body.appendChild(el);
      if (!this.modelValue) {
        el.style.display = 'none';
      }
      this.doDraggable();
    });
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
      this.removeDraggable();
    }
  },
  methods: {
    removeDraggable() {
      if (this.drag) this.drag.destroy();
    },
    doDraggable() {
      if (this.drag) this.drag.destroy();
      if (!this.draggable) return;
      const $container = this.el.querySelector(`.h-notify-container`);
      if (!$container) return;

      let x = 0;
      let y = 0;
      let rect = null;
      let header = $container.querySelector('.h-modal-header');
      if (header) {
        this.drag = new Draggable(header, {
          start(event) {
            x = event.clientX;
            y = event.clientY;
            rect = $container.getBoundingClientRect();
            $container.style.left = `${rect.left}px`;
            $container.style.top = `${rect.top}px`;
            $container.style.transform = 'initial';
            $container.style.transition = 'none';
          },
          drag(event) {
            let offsetX = event.clientX - x;
            let offsetY = event.clientY - y;
            $container.style.left = `${rect.left + offsetX}px`;
            $container.style.top = `${rect.top + offsetY}px`;
          }
        });
      }
    },
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
        this.doDraggable();
      }, 100);
    },
    hide() {
      let el = this.el;
      this.isOpened = false;
      setTimeout(() => {
        el.style.display = 'none';
        this.isShow = false;
        this.removeDraggable();
      }, 200);
      let body = document.documentElement;
      body.style.overflow = '';
      body.style.paddingRight = '';
    },
    setvalue(fromMask) {
      if (!fromMask || (fromMask && this.hasMask && this.closeOnMask)) {
        this.$emit('update:modelValue', false);
      }
    }
  },
  computed: {
    noticeCls() {
      return {
        [prefix]: true,
        [notifyprefix]: true,
        [`${prefix}-type-default`]: !this.type,
        [`${notifyprefix}-show`]: this.isOpened,
        [`${notifyprefix}-has-mask`]: this.hasMask,
        [`${notifyprefix}-no-mask`]: !this.hasMask,
        [`${notifyprefix}-has-close`]: this.hasCloseIcon,
        [`${notifyprefix}-draggable`]: this.draggable,
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
