<template>
	<div class="h-carousel">
    <div class="h-carousel-container" :style="{height: `${height}px`}">
      <div class="h-carousel-list" @mouseover="stopAutoplay" @mouseout="startAutoplay">
        <div class="h-carousel-item" v-for="(params,index) in carouselList" :key="index" @click="clickTrigger(index, params)">
          <div v-if="!$scopedSlots.item" class="h-carousel-bg" :class="{'h-carousel-bg-pointer': params.link}" :style="{backgroundImage:`url(${params.image})`}"></div>
          <slot :carousel="params" name="item"></slot>
        </div>
      </div>
      <div class="h-carousel-arrow" :class="arrowCls">
        <div class="h-icon-left" @click="prev"></div>
        <div class="h-icon-right" @click="next"></div>
      </div>
    </div>
		<ul class="h-carousel-pagination" :class="paginationCls">
			<li class="h-carousel-pagination-item" v-for="(p, index) of datas" :key="index" :class="{'active': isActive(index)}"  @mouseover="triggerChange('hover', index+1)" @click="triggerChange('click', index+1)"><slot v-if="$scopedSlots.page" :carousel="p" name="page"></slot><span v-else></span></li>
		</ul>
	</div>
</template>
<script>
import utils from '../../utils/utils'
import index from '../../locale';
export default {
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
    // loop: {
    //   type: Boolean,
    //   default: true
    // },
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
      redirectTimeout2: null,
    }
  },
  computed: {
    carouselList() {
      if (this.datas.length == 0) {
        return []
      }
      let datas = this.datas;
      return [datas[this.datas.length - 1], ...datas, datas[0]]
    },
    paginationCls() {
      return `h-carousel-pagination-${this.pageTheme}`
    },
    arrowCls() {
      return `h-carousel-arrow-${this.arrow}`
		},
		
  },
  watch: {
    autoplay() {
      if (this.autoplay) {
        this.startAutoplay(true);
      } else {
        this.stopAutoplay(true);
      }
    },
    effect(){
      this.init();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  beforeDestroy() {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.redirectTimeout1);
    clearTimeout(this.redirectTimeout2);
    window.removeEventListener('resize', this.resizeEvent)
  },
  methods: {
    clickTrigger(index, data) {
      this.$emit('click', index, data);
    },
    isActive(index) {
			let datas = this.datas;
			let activeIndex = this.activeIndex;
      return (
        index + 1 == activeIndex ||
        (activeIndex == 0 && index == datas.length - 1) ||
        (activeIndex == datas.length + 1 && index == 0)
      )
    },
    init() {
      this.startAutoplay(true);
      setTimeout(() => {        
        switch(this.effect){
          case "fade":
            this.initfade();
            break;
          case "scroll":
            this.initscroll();
            break;
        }
        this.change({index: this.activeIndex, immediately: true})
      }, 300)
      window.addEventListener('resize', this.resizeEvent, false)
		},
		stopAutoplay(force = false) {
			if (this.isHoverStop || force) {
				clearTimeout(this.scrollTimeout)
			}
		},
		startAutoplay(force = false) {
      if (this.effect=="fade"){
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
          this.next();
        }, this.speed );
      }else if ((this.isHoverStop || force) && this.autoplay) {
			  clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
          this.next();
        }, this.speed );
      }
		},
    resizeEvent() {
      if(this.effect=="fade"){
        this.initfade()
      }
      this.change({index: this.activeIndex, immediately: true});
    },
    scroll(index, immediately) {
      this.activeIndex = index;
      let itemWidth = this.$el.clientWidth;
      let width = index * itemWidth;
      switch(this.effect){
        case "fade":
          if(immediately==false){
            let itemDom = this.$el.querySelectorAll('.h-carousel-item');
            itemDom.forEach((item) => {
              item.style.opacity = 0;
              item.style.transitionDuration = `${this.changeSpeed}ms`;
            });
            itemDom[this.activeIndex].style.opacity = 1;
          }
          break;
        case "scroll":
          let listDom = this.$el.querySelector('.h-carousel-list');
          if(immediately) {
            listDom.style.transitionDuration = `0ms`        
          } else {
            listDom.style.transitionDuration = `${this.changeSpeed}ms`;
          }
          listDom.style.transform = `translate3d(${-width}px, 0px, 0px)`;
          break;
      }
    },
    initfade(){
      this.activeIndex = 1;
      let itemWidth = this.$el.clientWidth;
      let listDom = this.$el.querySelector('.h-carousel-list');
      listDom.style.transform = `translate3d(${-itemWidth}px, 0px, 0px)`;
      let itemDom = this.$el.querySelectorAll('.h-carousel-item');
      itemDom.forEach((item,index) => {
        let width = (index-1) * itemWidth;
        item.style.transform = `translate3d(${-width}px, 0px, 0px)`;
        item.style.opacity = 0;
      });
      itemDom[this.activeIndex].style.opacity = 1;
    },
    initscroll(){
      this.activeIndex = 1;
      let itemDom = this.$el.querySelectorAll('.h-carousel-item');
      itemDom.forEach((item,index) => {
        item.style.transform = ``;
        item.style.opacity = 1;
      });
    },
    change({index = 1, immediately = false}) {
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
      if (activeIndex >= this.carouselList.length ) {
        activeIndex = 2;
      } else if (activeIndex < 0 ) {
        activeIndex = this.carouselList.length - 3;
      }
      this.change({index: activeIndex});
    },
    triggerChange(triggerType, index) {
			if (this.paginationTrigger == triggerType ) {
				this.change({index});
			}
    },
    prev() {
      this.changePageByStep(-1)
    },
    next() {
      this.changePageByStep(1);
    }
  }
}
</script>
