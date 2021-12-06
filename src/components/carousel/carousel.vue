<template>
  <div class="h-carousel">
    <div class="h-carousel-container" :style="{ height: `${height}px` }">
      <div v-if="effect == 'scroll'" :key="effect" class="h-carousel-list h-carousel-scroll-list" @mouseover="stopAutoplay" @mouseout="startAutoplay">
        <div v-for="(params, index) in carouselList" :key="index" class="h-carousel-item" @click="clickTrigger(index, params)">
          <div
            v-if="!$slots.item"
            class="h-carousel-bg"
            :class="{ 'h-carousel-bg-pointer': params.link }"
            :style="{ backgroundImage: `url(${params.image})` }"
          ></div>
          <slot :carousel="params" name="item" :index="index"></slot>
        </div>
      </div>
      <div v-else :key="effect" class="h-carousel-list" @mouseover="stopAutoplay" @mouseout="startAutoplay">
        <transition :name="`h-carousel-effect-${effect}`">
          <div :key="activeIndex" class="h-carousel-item h-carousel-effect-item" @click="clickTrigger(activeIndex, carouselItem)">
            <div
              v-if="!$slots.item"
              class="h-carousel-bg"
              :class="{ 'h-carousel-bg-pointer': carouselItem.link }"
              :style="{ backgroundImage: `url(${carouselItem.image})` }"
            ></div>
            <slot :carousel="carouselItem" name="item"></slot>
          </div>
        </transition>
      </div>
      <div class="h-carousel-arrow" :class="arrowCls">
        <div class="h-carousel-arrow-left" @click="prev"><i class="h-icon-left" /></div>
        <div class="h-carousel-arrow-right" @click="next"><i class="h-icon-right" /></div>
      </div>
    </div>
    <ul class="h-carousel-pagination" :class="paginationCls">
      <li
        v-for="(p, index) of datas"
        :key="index"
        class="h-carousel-pagination-item"
        :class="{ active: isActive(index) }"
        @mouseover="triggerChange('hover', index + 1)"
        @click="triggerChange('click', index + 1)"
      >
        <slot v-if="$slots.page" :carousel="p" name="page"></slot>
        <span v-else></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HCarousel',
  emits: ['clickItem', 'change'],
  props: {
    height: {
      type: Number,
      default: 300
    },
    speed: {
      type: Number,
      default: 3000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    changeSpeed: {
      type: Number,
      default: 500
    },
    arrow: {
      type: String,
      default: 'hover'
    },
    pageTheme: {
      type: String,
      default: 'square'
    },
    datas: Array,
    isHoverStop: {
      type: Boolean,
      default: true
    },
    paginationTrigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'scroll'
    }
  },
  data() {
    return {
      activeIndex: 1,
      scrollTimeout: null,
      redirectTimeout1: null,
      redirectTimeout2: null
    };
  },
  computed: {
    carouselList() {
      if (this.datas.length == 0) {
        return [];
      }
      let datas = this.datas;
      return [datas[this.datas.length - 1], ...datas, datas[0]];
    },
    carouselItem() {
      return this.carouselList[this.activeIndex - 1];
    },
    paginationCls() {
      return `h-carousel-pagination-${this.pageTheme}`;
    },
    arrowCls() {
      return `h-carousel-arrow-${this.arrow}`;
    }
  },
  watch: {
    autoplay() {
      if (this.autoplay) {
        this.startAutoplay(true);
      } else {
        this.stopAutoplay(true);
      }
    },
    effect() {
      clearTimeout(this.scrollTimeout);
      clearTimeout(this.redirectTimeout1);
      clearTimeout(this.redirectTimeout2);
      this.init();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  beforeUnmount() {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.redirectTimeout1);
    clearTimeout(this.redirectTimeout2);
    window.removeEventListener('resize', this.resizeEvent);
  },
  methods: {
    clickTrigger(index, data) {
      this.$emit('clickItem', index, data);
    },
    isActive(index) {
      let datas = this.datas;
      let activeIndex = this.activeIndex;
      return index + 1 == activeIndex || (activeIndex == 0 && index == datas.length - 1) || (activeIndex == datas.length + 1 && index == 0);
    },
    init() {
      this.startAutoplay(true);
      setTimeout(() => {
        this.change({
          index: this.activeIndex,
          immediately: true
        });
      }, 300);
      window.addEventListener('resize', this.resizeEvent, false);
    },
    stopAutoplay(force = false) {
      if (this.isHoverStop || force) {
        clearTimeout(this.scrollTimeout);
      }
    },
    startAutoplay(force = false) {
      if ((this.isHoverStop || force) && this.autoplay) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
          this.next();
        }, this.speed);
      }
    },
    resizeEvent() {
      this.change({
        index: this.activeIndex,
        immediately: true
      });
    },
    scroll(index, immediately) {
      this.activeIndex = index;
      let itemWidth = this.$el.clientWidth;
      let width = index * itemWidth;
      if (this.effect === 'scroll') {
        let listDom = this.$el.querySelector('.h-carousel-scroll-list');
        if (immediately) {
          listDom.style.transitionDuration = `0ms`;
        } else {
          listDom.style.transitionDuration = `${this.changeSpeed}ms`;
        }
        listDom.style.transform = `translate3d(${-width}px, 0px, 0px)`;
      }
    },
    change({ index = 1, immediately = false }) {
      if (this.activeIndex == this.carouselList.length - 1) {
        this.scroll(1, true);
      } else if (this.activeIndex == 0) {
        this.scroll(this.carouselList.length - 2, true);
      }
      clearTimeout(this.scrollTimeout);
      clearTimeout(this.redirectTimeout1);
      clearTimeout(this.redirectTimeout2);
      if (immediately) {
        this.scroll(index, immediately);
      } else {
        this.scroll(index, immediately);
        this.$emit('change', index, this.carouselList[this.activeIndex]);
        // 当翻页到第一页的时候，默默切换至真实的第一页
        if (this.activeIndex == this.carouselList.length - 1) {
          this.redirectTimeout1 = setTimeout(() => {
            this.scroll(1, true);
          }, this.changeSpeed + 100);
        } else if (this.activeIndex == 0) {
          this.redirectTimeout2 = setTimeout(() => {
            this.scroll(this.carouselList.length - 2, true);
          }, this.changeSpeed + 100);
        }
      }
      this.startAutoplay(true);
    },
    changePageByStep(step) {
      let activeIndex = this.activeIndex + step;
      if (activeIndex >= this.carouselList.length) {
        activeIndex = 2;
      } else if (activeIndex < 0) {
        activeIndex = this.carouselList.length - 3;
      }
      this.change({
        index: activeIndex
      });
    },
    triggerChange(triggerType, index) {
      if (this.paginationTrigger == triggerType) {
        this.change({
          index
        });
      }
    },
    prev() {
      this.changePageByStep(-1);
    },
    next() {
      this.changePageByStep(1);
    }
  }
};
</script>
