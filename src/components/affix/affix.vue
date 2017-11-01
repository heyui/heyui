<template>
  <div :class="affixCls" :style="affixStyle"><slot></slot></div>
</template>
<script>

const prefix = 'h-affix';

export default {
  props: {
    offsetTop: Number,
    offsetBottom: Number
  },
  data() {
    return {
      scrollEvent: null,
      isFixed: false,
      fixPosition: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollEvent = window.addEventListener("scroll", this.trigger, true);
      this.scrollEvent = window.addEventListener("resize", this.trigger, false);
      var evObj = document.createEvent('HTMLEvents');
      evObj.initEvent( 'scroll', true, true );
      document.body.dispatchEvent(evObj);
    })
  },
  beforeDestroy() {
    if (this.scrollEvent) {
      document.body.removeEventListener('scroll', this.trigger);
      window.removeEventListener('resize', this.trigger);
    }
  },
  methods: {
    refresh() {
      this.trigger({});
    },
    trigger(event) {
      if(event.target == this.$el) return false;
      let original = this.isFixed;
      if (!this.isFixed) {
        let position = this.$el.getBoundingClientRect();
        if (this.offsetTop !== undefined) {
          if (position.top < this.offsetTop) {
            this.isFixed = true;
            this.fixPosition = 'top';
          }
        } else if (this.offsetBottom != undefined) {
          if (window.innerHeight < (position.top + this.$el.clientHeight + this.offsetBottom)) {
            this.isFixed = true;
            this.fixPosition = 'bottom';
          }
        }
      } else if (this.$el.parentNode) {
        let position = this.$el.parentNode.getBoundingClientRect();
        if (this.offsetTop !== undefined) {
          if (position.top > this.offsetTop) {
            this.isFixed = false;
          }
        } else if (this.offsetBottom != undefined) {
          if (window.innerHeight > (position.top + this.$el.clientHeight + this.offsetBottom)) {
            this.isFixed = false;
          }
        }
      }

      if (original != this.isFixed) {
        this.$emit('onchange', this.isFixed);
        this.$emit('change', this.isFixed);
      }
    },
  },
  computed: {
    affixCls() {
      return {
        [prefix]: this.isFixed,
      }
    },
    affixStyle() {
      let param = {};
      if (this.isFixed) {
        if (this.fixPosition == 'top') {
          param.top = `${this.offsetTop}px`;
        } else {
          param.bottom = `${this.offsetBottom}px`;
        }
      }
      return param;
    }
  }
};
</script>
