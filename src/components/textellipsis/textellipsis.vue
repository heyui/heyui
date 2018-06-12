<template>
  <div class="h-text-ellipsis">
    <slot name="before" class="h-text-ellipsis-before"></slot>
    <span class="text-ellipsis-limit-text" :key="keyIndex">{{text}}</span>
    <span class="h-text-ellipsis-more" v-show='oversize'><slot name="more"></slot></span>
    <slot name="after" class="h-text-ellipsis-after"></slot>
  </div>
</template>
<script>
import utils from '../../utils/utils';

export default {
  name: 'hTextEllipsis',
  props: {
    text: String,
    height: Number,
    isLimitHeight: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      keyIndex: 0,
      oversize: false
    };
  },
  watch: {
    isLimitHeight() {
      this.init();
    },
    text() {
      this.init();
    },
    height() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.oversize = false;
      this.keyIndex += 1;
      let more = this.$el.querySelector('.h-text-ellipsis-more');
      more.style.display = 'none';
      if(this.isLimitHeight) {
        this.limitShow();
      }
    },
    limitShow() {
      this.$nextTick(() => {
        let text = this.$el.querySelector('.text-ellipsis-limit-text');
        let title = this.$el;
        let more = this.$el.querySelector('.h-text-ellipsis-more');
        let n = 1000;
        if(text) {
          if(title.offsetHeight > this.height) {
            more.style.display = 'inline-block';
            while(title.offsetHeight > this.height && n > 0) {
              text.innerText = text.innerText.substring(0, text.innerText.length-1)
              n--;
            }
            this.$emit('hide');
          } else {
            this.$emit('show');
          }
        }
      })
    }
  }
};
</script>