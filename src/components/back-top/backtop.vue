<template>
  <div :class="backtopCls" :style="backtopStyle">
    <div class="h-backtop-inner"
         @click="backtop">
         <i class="h-icon-top" v-if="!$slots.default"></i>
         <slot v-else></slot>
    </div>
  </div>
</template>
<script>

const prefix = 'h-backtop';

export default {
  name: 'hBackTop',
  props: {
    target: {
      type: Function,
      default: () => window.document
    },
    bottom: {
      type: Number,
      default: 50
    },
    right: {
      type: Number,
      default: 50
    },
    className: {
      type: String,
      default: 'h-backtop-default'
    }
  },
  data() {
    return {
      show: false,
      timeout: null
    };
  },
  watch: {
    show() {
      this.$el.style.display = 'block';
    }
  },
  mounted() {
    this.$nextTick(() => {
      let target = this.target();
      if (target) {
        target.addEventListener('scroll', () => {
          if (target.scrollTop > 300) {
            this.show = true;
          } else {
            this.show = false;
          }
        });
      }
      this.$el.addEventListener('webkitAnimationEnd', () => {
        this.$el.style.display = this.show ? 'block' : 'none';
      });
    });
  },
  methods: {
    backtop() {
      if (this.timeout) return;
      let target = this.target();
      if (target) {
        this.scrollTop(target, (target.scrollHeight - target.offsetHeight) / 10);
      }
      this.$emit('backtop');
    },
    scrollTop(target, step) {
      this.timeout = setTimeout(() => {
        if (target.scrollTop > step) {
          target.scrollTop -= step;
          this.scrollTop(target, step * 0.9);
        } else {
          target.scrollTop = 0;
          this.timeout = null;
        }
      }, 5);
    }
  },
  computed: {
    backtopCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-show`]: this.show,
        [this.className]: !!this.className
      };
    },
    backtopStyle() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`
      };
    }
  }
};
</script>
