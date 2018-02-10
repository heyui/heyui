<template>
  <div><div :class="affixCls" :style="affixStyle"><slot></slot></div></div>
</template>
<script>

const prefix = 'h-affix';

export default {
  props: {
    offsetTop: Number,
    offsetBottom: Number,
    container: Function,
  },
  data() {
    return {
      scrollEvent: null,
      isFixed: false,
      fixPosition: false,
      containerDom: null,
      isAbsolute: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      if(this.container) {
        this.containerDom = this.container.call();
      }
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
      let el = this.$el.firstChild;
      if(event.target == el) return false;
      let original = this.isFixed;
      if(this.containerDom) {
        let offsetTop = this.offsetTop || 0;
        let offsetBottom = this.offsetBottom || 0;
        let position = el.getBoundingClientRect();
        let containerPosition = this.containerDom.getBoundingClientRect();
        // log('===========new===========')
        // log('top isAbsolute', position.top > 0 && position.top - containerPosition.top < offsetTop)
        // log('bottom isAbsolute', containerPosition.bottom - position.bottom < offsetBottom)
        // log('top isFixed', this.isAbsolute && position.top - containerPosition.top > offsetTop && position.top < offsetTop)
        // log('bottom isFixed', containerPosition.bottom - position.bottom > offsetBottom && window.innerHeight - position.bottom < offsetBottom)
        if ( position.top > 0 && position.top - containerPosition.top < offsetTop) {
          this.isFixed = false;
          this.isAbsolute = true;
          this.fixPosition = 'top';
        } else if ( containerPosition.bottom - position.bottom < offsetBottom) {
          this.isFixed = false;
          this.isAbsolute = true;
          this.fixPosition = 'bottom';
        } else if (this.isAbsolute && this.fixPosition != 'bottom' && position.top < offsetTop) {
          this.isFixed = true;
          this.isAbsolute = false;
          this.fixPosition = 'top';
        } else if (this.isAbsolute && this.fixPosition != 'top' && window.innerHeight - position.bottom < offsetBottom) {
          this.isFixed = true;
          this.isAbsolute = false;
          this.fixPosition = 'bottom';
        }
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
    },
  },
  computed: {
    affixCls() {
      return {
        [prefix]: this.isFixed,
        [`${prefix}-absolute`]: this.isAbsolute
      }
    },
    affixStyle() {
      let param = {};
      if (this.isFixed || this.isAbsolute) {
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
