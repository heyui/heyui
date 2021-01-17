<style lang="less">
  .h-carousel-item .h-carousel-p{
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
    <Carousel :datas="params" pageTheme="hidden" >
      <template slot-scope="{carousel}" slot="item">
        <p class="h-carousel-p">{{carousel.title}}</p>
      </template>
    </Carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false,
      params: [
        {
          title: 'Page 1',
          image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540197899055&di=75c86ca282306c46d9de3dccac8f5e0b&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F27%2Fd27cb266e19ab3e5ecffa2bd8c8e9426.jpg'
        }
      ]
    };
  }
};
</script>
