<template>
  <div>
    <div :class="noticeCls">
      <div class="h-notify-mask"
          v-if="hasMask"
          @click="setvalue(true)"></div>
      <div :class="{'h-notify-body': !!hasMask}" @click.self="setvalue(true)">
        <div :class="containerCls">
          <span class="h-notify-close h-icon-close"
                @click="setvalue(false)"></span>
          <component :is="nowComponent"
                    :class="contentCls"
                    :param="propsData"
                    :params="propsData"
                    @event="trigger"
                    @close="close"></component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from 'heyui/src/utils/config';

const prefix = 'h-modal';
const notifyprefix = 'h-notify';

export default {
  name: 'hModalComponent',
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
    component: Object,
    propsData: [Boolean, Object, String, Array]
  },
  watch: {
    value() {
      if (this.value) {
        this.el.style.display = 'block';
        this.nowComponent = this.$options.propsData.component;

        if (this.hasMask) {
          let body = document.documentElement;
          let scrollWidth = window.innerWidth - body.clientWidth;
          body.style.overflow = 'hidden';
          body.style.paddingRight = `${scrollWidth}px`;
        }
        setTimeout(() => {
          this.isOpened = this.value;
        }, 100);
      } else {
        this.isOpened = this.value;
        let body = document.documentElement;
        body.style.overflow = '';
        body.style.paddingRight = '';
        setTimeout(() => {
          this.el.style.display = 'none';
          this.nowComponent = '';
        }, 200);
      }
    }
  },
  data() {
    return {
      nowComponent: '',
      isOpened: this.value
    };
  },
  beforeDestroy() {
    let el = this.el;
    el.style.display = 'none';
    this.$el.appendChild(el);
  },
  mounted() {
    this.$nextTick(() => {
      this.el = this.$el.firstChild;
      document.body.appendChild(this.el);
      if (!this.value) {
        this.el.style.display = 'none';
      }
    });
  },
  methods: {
    trigger(name, data) {
      this.$emit(name, data);
    },
    close() {
      this.isOpened = false;
      setTimeout(() => {
        this.el.style.display = 'none';
        this.nowComponent = '';
      }, 200);
      this.$emit('input', false);
    },
    setvalue(fromMask) {
      if (!fromMask || (fromMask && this.hasMask && this.closeOnMask)) {
        this.$emit('input', !this.value);
      }
    }
  },
  computed: {
    contentCls() {
      return {
        [`${notifyprefix}-content`]: true,
        [`${notifyprefix}-content-component`]: true
      };
    },
    containerCls() {
      return {
        [`${notifyprefix}-container`]: true,
        [`${notifyprefix}-container-center`]: !!this.middle
      };
    },
    noticeCls() {
      return {
        [prefix]: true,
        [notifyprefix]: true,
        [`${notifyprefix}-show`]: this.isOpened,
        [`${notifyprefix}-has-mask`]: this.hasMask,
        [`${notifyprefix}-has-close`]: this.hasCloseIcon,
        [`${notifyprefix}-has-divider`]: this.hasDivider
        // 'h-dropdown-common-container': true
      };
    }
  }
};
</script>
