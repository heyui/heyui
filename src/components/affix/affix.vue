<template>
  <div>
    <div :class="affixCls" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefix = 'h-affix';

export default {
  name: 'hAffix',
  props: {
    offsetTop: Number,
    offsetBottom: Number,
    container: Function,
    fixedOffsetTop: Number,
    fixedOffsetBottom: Number,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFixed: false,
      fixPosition: 'top',
      containerDom: null,
      isAbsolute: !!this.container && !this.disabled,
      y: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.container) {
        this.containerDom = this.container.call();
      }
      window.addEventListener('scroll', this.trigger, true);
      window.addEventListener('resize', this.trigger);
      this.refresh();
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.trigger, true);
    window.removeEventListener('resize', this.trigger);
  },
  watch: {
    offsetTop() {
      this.refresh();
    },
    offsetBottom() {
      this.refresh();
    },
    fixedOffsetTop() {
      this.refresh();
    },
    fixedOffsetBottom() {
      this.refresh();
    },
    disabled() {
      if (this.disabled) {
        this.isFixed = false;
        this.isAbsolute = false;
      } else {
        this.refresh();
      }
    }
  },
  methods: {
    refresh() {
      let evObj = document.createEvent('HTMLEvents');
      evObj.initEvent('scroll', true, true);
      document.body.dispatchEvent(evObj);
    },
    trigger(event) {
      if (this.disabled) return;
      let el = this.$el.firstChild;
      if (event.target == el) return false;
      let original = this.isFixed;
      if (this.containerDom) {
        // let cFixedOffsetTop = this.cFixedOffsetTop;
        // let cFixedOffsetBottom = this.cFixedOffsetBottom;
        // let parentOffsetTop = this.offsetTop || 0;
        // let parentOffsetBottom = this.offsetBottom || 0;
        let position = el.getBoundingClientRect();
        let containerPosition = this.containerDom.getBoundingClientRect();
        // let dis = containerPosition.top - this.y;
        this.y = containerPosition.top;
        // log('===========new===========')
        // log('dis', dis);
        // log('top isAbsolute', position.top - containerPosition.top < parentOffsetTop)
        // log('bottom isAbsolute', dis < 0 && containerPosition.bottom - position.bottom < parentOffsetBottom)
        // log('top isFixed', ( dis < 0 && position.top < cFixedOffsetTop && containerPosition.bottom > (cFixedOffsetTop + el.clientHeight + parentOffsetBottom)));
        // log('bottom isFixed', ( dis > 0 && window.innerHeight - position.bottom < cFixedOffsetBottom && containerPosition.top < (cFixedOffsetTop - parentOffsetTop)))
        if (containerPosition.top <= this.cFixedOffsetTop - this.offsetTop && containerPosition.bottom >= position.height +
            this.cFixedOffsetTop + this.cFixedOffsetBottom) {
          this.isFixed = true;
          this.isAbsolute = false;
          this.fixPosition = 'top';
        } else {
          if (containerPosition.top > this.cFixedOffsetTop - this.offsetTop || containerPosition.height < position.height) {
            this.isFixed = false;
            this.isAbsolute = true;
            this.fixPosition = 'top';
          } else if (containerPosition.bottom < position.height + this.cFixedOffsetTop + this.cFixedOffsetBottom) {
            this.isFixed = false;
            this.isAbsolute = true;
            this.fixPosition = 'bottom';
          }
        }

        // if ( dis >= 0 && position.top - containerPosition.top < parentOffsetTop) {
        //   this.isFixed = false;
        //   this.isAbsolute = true;
        //   this.fixPosition = 'top';
        // } else if ( dis < 0 && containerPosition.bottom - position.bottom < parentOffsetBottom) {
        //   this.isFixed = false;
        //   this.isAbsolute = true;
        //   this.fixPosition = 'bottom';
        //   // (this.isAbsolute && this.fixPosition == 'bottom' && position.top > parentOffsetTop)
        // } else if ( this.containerDom.clientHeight > el.clientHeight && this.isAbsolute &&
        //     !(dis > 0 && this.fixPosition == 'bottom' && containerPosition.bottom < el.clientHeight + this.cFixedOffsetTop) &&
        //     (( dis < 0 && position.top < cFixedOffsetTop && containerPosition.bottom > (cFixedOffsetTop + el.clientHeight + parentOffsetBottom))
        //     || (dis > 0 && position.top > parentOffsetTop && containerPosition.top < (cFixedOffsetTop - parentOffsetTop)))) {
        //   this.isFixed = true;
        //   this.isAbsolute = false;
        //   this.fixPosition = 'top';
        // }

        if (original != this.isFixed) {
          this.$emit('onchange', this.isFixed);
          this.$emit('change', this.isFixed);
        }
      } else {
        if (!this.isFixed) {
          let position = el.getBoundingClientRect();
          if (this.offsetTop !== undefined) {
            if (position.top < this.offsetTop) {
              this.isFixed = true;
              this.fixPosition = 'top';
            }
          }
          if (!this.isFixed && this.offsetBottom != undefined) {
            if (window.innerHeight < (position.top + el.clientHeight + this.offsetBottom)) {
              this.isFixed = true;
              this.fixPosition = 'bottom';
            }
          }
        } else if (el.parentNode) {
          let position = el.parentNode.getBoundingClientRect();
          if (this.offsetTop !== undefined) {
            if (this.fixPosition == 'top' && position.top > this.offsetTop) {
              this.isFixed = false;
            }
          }
          if (this.isFixed && this.offsetBottom != undefined) {
            if (this.fixPosition == 'bottom' && window.innerHeight > (position.top + el.clientHeight + this.offsetBottom)) {
              this.isFixed = false;
            }
          }
        }

        if (original != this.isFixed) {
          this.$emit('onchange', this.isFixed);
          this.$emit('change', this.isFixed);
        }
      }
    }
  },
  computed: {
    cFixedOffsetTop() {
      return this.fixedOffsetTop || this.offsetTop;
    },
    cFixedOffsetBottom() {
      return this.fixedOffsetBottom || this.offsetBottom;
    },
    affixCls() {
      return {
        [prefix]: this.isFixed,
        [`${prefix}-absolute`]: this.isAbsolute
      };
    },
    affixStyle() {
      let param = {};
      if (this.isFixed) {
        if (this.fixPosition == 'top') {
          param.top = `${this.cFixedOffsetTop}px`;
        } else {
          param.bottom = `${this.cFixedOffsetBottom}px`;
        }
      }

      if (this.isAbsolute) {
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
