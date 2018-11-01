<style lang="less">
  .carousel-demo1 .h-carousel-item .h-carousel-p{
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
    <div style="padding-bottom: 20px">
      <Form readonly :labelWidth="130">
        <FormItem label="自动切换"><h-switch small v-model="autoplay"></h-switch></FormItem>
        <FormItem label="左右切换按钮"><SwitchList small v-model="arrow" :datas="arrows"></SwitchList></FormItem>
        <FormItem label="底部指示器样式"><SwitchList small v-model="pageTheme" :datas="pageThemes"></SwitchList></FormItem>
        <FormItem label="底部指示器触发"><SwitchList small v-model="paginationTrigger" :datas="paginationTriggers"></SwitchList></FormItem>
        <FormItem label="切换方式"><SwitchList small v-model="effect" :datas="effects"></SwitchList></FormItem>
      </Form>
    </div>
    <Carousel class="carousel-demo1" :datas="params" :height="300" :autoplay="autoplay" :paginationTrigger="paginationTrigger" :arrow="arrow" :pageTheme="pageTheme" :speed="2000" :changeSpeed="1000" :effect="effect">
      <template slot-scope="props" slot="item">
        <p class="h-carousel-p">{{props.carousel.title}}</p>
      </template>
    </Carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      autoplay: true,
      pageTheme: 'square',
      pageThemes: {circle: '圆形', square: '方形', hidden: '隐藏'},
      arrow: 'hover',
      arrows: {hidden: '隐藏', always: '一直显示', hover: '悬停'},
      paginationTrigger: 'click',
      paginationTriggers: {click: '点击', hover: '悬停'},
      effect: 'fade',
      effects: {scroll: '滚动', fade: '淡入淡出'},
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