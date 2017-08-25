<template>
  <div :class="noticeCls">
    <div class="h-notify-mask" v-if="hasMask" @click="setvalue(true)"></div>
    <div :class="{'h-notify-body': !!hasMask}" @click.self="setvalue(true)">
      <div :class="containerCls" v-if="isShow">
        <span class="h-notify-close h-icon-close" v-if="hasCloseIcon" @click="setvalue(false)"></span>
        <header v-if="hasHeader"><slot name='header'></slot></header>
        <div :class="contentCls"><slot></slot></div>
        <footer v-if="hasFooter"><slot name='footer'></slot></footer>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';

const prefix = 'h-modal';
const notifyprefix = 'h-notify';

export default {
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: true
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    hasDivider: {
      type: Boolean,
      default:() => config.getOption('modal', 'hasDivider')
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
    }
  },
  watch: {
    value() {
      if (this.value) {
        document.body.appendChild(this.$el);
        this.$el.style.display = 'block';
        this.isShow = true;
        if(this.hasMask){
          let body = document.documentElement;
          let scrollWidth = window.innerWidth - body.clientWidth;
          body.style.overflow = 'hidden';
          body.style.paddingRight = `${scrollWidth}px`;
        }
        setTimeout(() => {
          this.isOpened = true
        }, 100);
      } else {
        this.isOpened = false;
        setTimeout(() => {
          this.$el.style.display = 'none';
          this.isShow = false;
        }, 200);
        let body = document.documentElement;
        body.style.overflow = '';
        body.style.paddingRight = '';
      }
    }
  },
  data() {
    return {
      isOpened: this.value,
      isShow: this.value
    };
  },
  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$el);
      if (!this.value) {
        this.$el.style.display = 'none';
      }
    })
  },
  methods: {
    setvalue(fromMask) {
      if (!fromMask || (fromMask && this.hasMask && this.closeOnMask)) {
        this.$emit('input', false);
      }
    },
  },
  computed: {
    contentCls() {
      return {
        [`${notifyprefix}-content`]: true
      }
    },
    containerCls() {
      return {
        [`${notifyprefix}-container`]: true,
        [`${notifyprefix}-container-center`]: !!this.middle,
      }
    },
    noticeCls() {
      return {
        [prefix]: true,
        [notifyprefix]: true,
        [`${notifyprefix}-show`]: this.isOpened,
        [`${notifyprefix}-has-mask`]: this.hasMask,
        [`${notifyprefix}-has-close`]: this.hasCloseIcon,
        [`${notifyprefix}-has-divider`]: this.hasDivider,
        'h-dropdown-common-container': true
      }
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
