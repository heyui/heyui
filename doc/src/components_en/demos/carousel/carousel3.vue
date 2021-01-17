<style lang="less">
.carousel-demo3 .h-carousel-item .h-carousel-p {
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
    <Carousel :datas="params" arrowType="hover" @clickPage="clickPage" @clickNext="clickNext" @clickPrev="clickPrev" class="carousel-demo3">
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
          image: ''
        },
        {
          title: 'Page 2',
          image: ''
        },
        {
          title: 'Page 3',
          image: ''
        },
        {
          title: 'Page 4',
          image: ''
        }
      ]
    };
  },
  methods: {
    clickPage(data) {
      this.$Message.info(`Switch to ${data.title}`, 1000);
    },
    clickPrev(data) {
      this.$Message.info(`Switch to ${data.title}`, 1000);
    },
    clickNext(data) {
      this.$Message.info(`Switch to ${data.title}`, 1000);
    }
  }
};
</script>
