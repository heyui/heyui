<style lang="less">
  .carousel-demo2 .h-carousel-item .h-carousel-p{
    color: #fff;
    font-size: 36px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
</style>

<template>
  <div>
    <p v-if="page!=''">这是change调用的返回：切换到{{page}}</p>
    <Carousel :datas="params" arrowType="show" :autoplay="autoplay" pageTheme="hidden" class="carousel-demo2" @changePage="changePage">
      <template slot-scope="props" slot="item">
        <p class="h-carousel-p">{{props.carousel.title}}</p>
      </template>
    </Carousel>
    <Button color="primary" style="margin-top:15px;" @click="autoplay=2000">点击开始滚动</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: "",
      params:[
        {
          title:'Page 1',
          image:'',
        },{
          title:'Page 2',
          image:'',
        },{
          title:'Page 3',
          image:'',
        },{
          title:'Page 4',
          image:'',
        },
      ],
      autoplay:0,
    }
  },
  methods:{
    changePage(data){
      this.page = data.title;
    }
  }
}
</script>