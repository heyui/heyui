<template>
  <teleport to=".h-notice-container">
    <div ref="notice" :class="noticeCls">
      <div>
        <transition>
          <div v-if="isShow" class="h-notify-container">
            <div class="h-notify-content">
              <span v-if="hasCloseIcon" class="h-notify-close h-icon-close" @click="close"></span>
              <div class="h-notify-body"><slot></slot></div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>
<script>
const prefix = 'h-notice';
const notifyprefix = 'h-notify';
import utils from 'heyui/utils/utils';

let noticeDom = document.querySelector(`.${prefix}-container`);
if (!noticeDom) {
  noticeDom = document.createElement('div');
  utils.addClass(noticeDom, `${prefix}-container`);
  document.body.appendChild(noticeDom);
}

export default {
  name: 'HNotice',
  emits: ['update:modelValue'],
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    className: String,
    timeout: {
      type: Number,
      default: 4000
    }
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
        [`${notifyprefix}-no-mask`]: true,
        [`${notifyprefix}-has-close`]: this.hasCloseIcon,
        [`${notifyprefix}-has-icon`]: true,
        [`${notifyprefix}-show`]: this.isOpened,
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
    }
  },
  mounted() {
    this.$nextTick(() => {
      let el = (this.el = this.$refs.notice);
      if (!this.modelValue) {
        el.style.display = 'none';
      } else {
        this.show();
      }
    });
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = 'none';
    }
  },
  methods: {
    show() {
      let el = this.el;
      el.style.display = 'block';
      this.isShow = true;
      setTimeout(() => {
        this.isOpened = true;
      }, 100);

      if (this.timeout) {
        setTimeout(() => {
          this.close();
        }, this.timeout);
      }
    },
    hide() {
      let el = this.el;
      this.isOpened = false;
      setTimeout(() => {
        el.style.display = 'none';
        this.isShow = false;
      }, 200);
    },
    close() {
      this.$emit('update:modelValue', false);
    }
  }
};
</script>
