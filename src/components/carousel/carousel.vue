<style lang="less">
  .h-carousel{
		overflow: hidden;
		height: 300px;
		position: relative;
		.h-carousel-list{
			width: 1000%;
			height: 300px;
			.h-carousel-item{
        width:10%;
				height: 300px;
				background: #999;
				float: left;
				position: relative;
				.h-carousel-bg{
					width: 100%;
					height: 100%;
					background-size: 100%;	
				}
			}		
		}		
		.h-carousel-pagination{
			position: absolute;
			bottom:10%;
			left: 50%;
			transform: translateX(-50%);
			&.h-carousel-pagination-circle{
				.h-carousel-pagination-item{
					width: 8px;
					height: 8px;
					background-color: #fff;
					opacity: 0.4;
					display: inline-block;
					border-radius: 4px;
					margin-right: 15px;
					cursor: pointer;
					position: relative;
					&.active{
						opacity: 1;
					}					
				}				
			}
			&.h-carousel-pagination-square{
				.h-carousel-pagination-item{
					width: 30px;
					height: 2px;
					background-color: #fff;
					opacity: 0.4;
					display: inline-block;
					border-radius: 4px;
					margin-right: 15px;
					cursor: pointer;
					position: relative;
					&.active{						
						opacity: 1;
					}					
				}				
      }
      &.h-carousel-pagination-hidden{
        display: none!important;
      }
    }

		.h-carousel-arrow{
			position: absolute;
			width: 100%; 
			height: 100%;
			top: 0;
			left: 0;			
			.h-icon-left,.h-icon-right{
				color: #fff;
				font-size: 42px;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
        cursor: pointer;	
        opacity: 0.4;
        &:hover{
          opacity: 1;
        }
			}
			.h-icon-left{
				left: 2%;
			}
			.h-icon-right{
				right: 2%;
			}
			&.h-carousel-arrow-hover{
				display: none;				
			}
		}
		&:hover{
			.h-carousel-arrow.h-carousel-arrow-hover{
				display: block;
			}
		}
		.h-carousel-arrow-hidden{
			display: none!important;
		}
	}

</style>
<template>
	<div>
		<div class="h-carousel" :class="className">
			<div class="h-carousel-list">
				<div class="h-carousel-item" v-for="(params,index) in carouselList" :key="index">
					<div v-if="!$scopedSlots.item" class="h-carousel-bg" :style="{backgroundImage:`url(${params.image})`}"></div>
					<slot :carousel="params" name="item"></slot>
				</div>
			</div>    
			<div class="h-carousel-arrow" :class="arrowCls">
				<div class="h-icon-left" @click="clickPrev"></div>
				<div class="h-icon-right" @click="clickNext"></div>
			</div>
			<div class="h-carousel-pagination" v-if="pageTheme!='custom'" :class="paginationCls">
				<span class="h-carousel-pagination-item" v-for="(p, index) of datas" :key="index" :class="{'active':(index+1)==activeIndex||(activeIndex==0&&index==(datas.length-1))||(activeIndex==(datas.length+1)&&index==0)}" @click="clickPage(index+1)"></span>
			</div>
		</div>		
		<div class="h-carousel-pagination" v-if="pageTheme=='custom'">
			<template v-for="(p, index) of datas">
				<div class="h-carousel-pagination-item" :key="index" :class="{'active':(index+1)==activeIndex||(activeIndex==0&&index==(datas.length-1))||(activeIndex==(datas.length+1)&&index==0)}" @click="clickPage(index+1)">
					<slot :carousel="p" name="page"></slot>
				</div>
			</template>		
		</div>
	</div>
</template>
<script>
import utils from '../../utils/utils';
export default {
  props: {
		speed: {
			type: Number,
			default: 300,
		},
		autoplay: {
			type: Number,
			default: 0,
		},
		arrowType: {
			type: String,
			default: "hidden",
		},
		pageTheme: {
			type: String,
			default: "circle"
		},
		datas: Array,
		loop: {
			type: Boolean,
			default: true,
		},
		hoverStop: {
			type: Boolean,
			default: true,
		},
		className:{
			type: String,
			default: "",
		},
	},
  data() {
    return {			
			activeIndex: 1,
			scrollInterval: null,
			length: this.datas.length+2,
    };
	},
	computed:{
		carouselList() {
			if (this.datas.length == 0) {
				return [];
			}
			let datas = this.datas;
			return [datas[this.datas.length-1], ...datas, datas[0]];
		},
		paginationCls() {
      return `h-carousel-pagination-${this.pageTheme}`;
		},
		arrowCls() {
      return `h-carousel-arrow-${this.arrowType}`;
    },
	},
	watch:{
    autoplay(){
      if(this.autoplay>0){
				this.scroll();
			}else{
        clearTimeout(this.scrollInterval);
      }
    }
  },
	mounted() {
		this.$nextTick(()=>{
			this.init();		
		});
	},
	beforeDestroy(){
		window.removeEventListener('resize');
	},
	methods:{
		init(){
			if(this.autoplay>0){
				this.scroll();
			}
			setTimeout(() => {
				this.scrollOnce("immediately");
			},300);
			if(this.hoverStop){
        let listDom = this.$el.querySelector('.h-carousel-list');
				listDom.onmouseover = ()=>{
					clearTimeout(this.scrollInterval);
				}
				listDom.onmouseout = ()=>{
					if(this.autoplay>0){
						this.scroll();
					}					
				}
			}
			window.addEventListener('resize',() => this.scrollOnce("immediately"),false);
    },		
    scrollOnce(type){
      let itemWidth = this.$el.clientWidth;
      let width = this.activeIndex * itemWidth;
      let listDom = this.$el.querySelector('.h-carousel-list');
      if(type=="immediately"){
        listDom.style.transitionDuration = `0ms`;	
      }else{
        listDom.style.transitionDuration = `${this.speed}ms`;	
        this.$emit('changePage', this.carouselList[this.activeIndex]);
      }
      listDom.style.transform = `translate3d(${-width}px, 0px, 0px)`;
    },
		scroll(){	
			this.scrollInterval = setTimeout(()=>{
				if(this.activeIndex < this.length-1){
					this.activeIndex++;				
          this.scrollOnce();
					setTimeout(() => {
						if(this.activeIndex == (this.length-1)){
							this.activeIndex = 1;
              if(this.loop==true){
                this.scrollOnce("immediately");
              }else{
                this.scrollOnce();
              }						
						}
          }, this.loop==true?this.speed:0);				
          this.scroll();
        }	
			},this.autoplay);
		},
		clickPage(index,data){
			clearTimeout(this.scrollInterval);
			this.activeIndex = index;
			this.scrollOnce();
			if(this.autoplay>0&&this.hoverStop==false){
				this.scroll();	
      }
      this.$emit('clickPage', this.carouselList[this.activeIndex]);
		},
		clickPrev(){
			clearTimeout(this.scrollInterval);
			if(this.activeIndex > 0){
				this.activeIndex--;
			}
			setTimeout(() => {				
				if(this.activeIndex == 0){
					this.activeIndex = this.length-2;
					if(this.loop==true){
            this.scrollOnce("immediately");
          }else{
            this.scrollOnce();
          }
				}
			}, this.loop==true?this.speed:0);
			this.scrollOnce();
			if(this.autoplay>0&&this.hoverStop==false){
				this.scroll();	
      }
      this.$emit('clickPrev', this.carouselList[this.activeIndex]);
		},
		clickNext(){
			clearTimeout(this.scrollInterval);
			if(this.activeIndex < (this.length-1)){
				this.activeIndex++;
			}
			setTimeout(() => {			
				if(this.activeIndex == (this.length-1)){
          this.activeIndex = 1;
          if(this.loop==true){
            this.scrollOnce("immediately");
          }else{
            this.scrollOnce();
          }
				}
			}, this.loop==true?this.speed:0);
      this.scrollOnce();
			if(this.autoplay>0&&this.hoverStop==false){
				this.scroll();	
      }
      this.$emit('clickNext', this.carouselList[this.activeIndex]);
		},
	}
};
</script>
