<template>
  <teleport to="body">
    <div ref="modal" :class="noticeCls">
      <div v-if="hasMask" class="h-notify-mask" @click="setvalue(true)"></div>
      <div class="h-notify-wrap" @click.self="setvalue(true)">
        <transition :name="type" :persisted="false">
          <div v-if="isShow" class="h-notify-container">
            <div class="h-notify-content">
              <span v-if="hasCloseIcon" class="h-notify-close h-icon-close" @click="setvalue(false)"></span>
              <header v-if="hasHeader || title" class="h-modal-header">
                <span v-if="title" class="h-modal-title">{{ title }}</span
                ><slot name="header"></slot>
              </header>
              <div class="h-notify-body"><slot></slot></div>
              <footer v-if="hasFooter" class="h-modal-footer"><slot name="footer"></slot></footer>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>
<script>
import config from 'heyui/utils/config';
import Draggable from 'heyui/plugins/draggable';

const prefix = 'h-modal';
const notifyprefix = 'h-notify';

export default {
  name: 'HModal',
  emits: ['open', 'close', 'update:modelValue'],
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
  data() {
    return {
      isOpened: this.modelValue,
      isShow: this.modelValue,
      el: null
    };
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
  mounted() {
    let el = this.$refs.modal;
    this.modelElement = el;
    this.$nextTick(() => {
      if (!this.modelValue) {
        el.style.display = 'none';
      }
      this.doDraggable();
    });
  },
  beforeUnmount() {
    let el = this.modelElement;
    if (el) {
      el.style.display = 'none';
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
      const $container = this.modelElement.querySelector(`.h-notify-container`);
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
      let el = this.modelElement;
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
        this.$emit('open');
      }, 100);
    },
    hide() {
      let el = this.modelElement;
      this.isOpened = false;
      setTimeout(() => {
        el.style.display = 'none';
        this.isShow = false;
        this.removeDraggable();
        this.$emit('close');
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
  }
};
</script>
