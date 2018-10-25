<style lang="less">
  .carousel-demo4{
    position: relative;
    .h-carousel-pagination{
      width: 96%;
      margin-left: 2%;
      margin-top: 20px;
      height: 100px;
      .h-carousel-pagination-item{			
        float: left;	
        width: 25%;
        cursor: pointer;
        >img{			
          width: 100%;
          height: 100px;
          opacity: 0.5;
        }
        &.active, &:hover{
          >img{
            opacity: 1;
          }
        }
      }
    }
  }
</style>

<template>
  <div>
    <Carousel :datas="params" :autoplay="2000" pageTheme="custom" :loop="false" class="carousel-demo4"> 
      <template slot-scope="props" slot="page">
        <img :src="props.carousel.image" >
      </template>
    </Carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false,
      params:[
        {
          title:'Page 1',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540197899055&di=75c86ca282306c46d9de3dccac8f5e0b&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F27%2Fd27cb266e19ab3e5ecffa2bd8c8e9426.jpg',
        },{
          title:'Page 2',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540197899054&di=3367ff0605072bc351651cfffb8dac08&imgtype=0&src=http%3A%2F%2Fimg534.ph.126.net%2FEGAn7UXOMIr5XJ7HWEUylw%3D%3D%2F2650649855685047930.jpg',
        },{
          title:'Page 3',
          image:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=436156375,527884653&fm=27&gp=0.jpg',
        },{
          title:'Page 4',
          image:'http://pic.58pic.com/58pic/14/48/31/98R58PICUsm_1024.jpg',
        },
      ]
    }
  }
}
</script>