<style lang="less">
.carousel-demo4 {
  position: relative;
  .h-carousel-pagination {
    margin-top: 10px;
    height: 100px;
    .h-carousel-pagination-item {
      float: left;
      width: 25%;
      cursor: pointer;
      > img {
        width: 100%;
        height: 100px;
        opacity: 0.5;
        transition: 0.3s;
      }
      &.active,
      &:hover {
        > img {
          opacity: 1;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <Carousel :datas="params" :speed="2000" pageTheme="custom" class="carousel-demo4">
      <template slot-scope="{carousel}" slot="page">
        <img :src="carousel.image">
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
          link: true,
          image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg'
        },
        {
          title: 'Page 2',
          link: 'http://www.baidu.com',
          image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg'
        },
        {
          title: 'Page 3',
          image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-6.jpg'
        },
        {
          title: 'Page 4',
          image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg'
        }
      ]
    };
  }
};
</script>
