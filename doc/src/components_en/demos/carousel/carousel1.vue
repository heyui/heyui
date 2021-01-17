<style lang="less">
.carousel-demo1 .h-carousel-item {
  background: @dark-color;
  .h-carousel-p {
    color: #fff;
    font-size: 36px;
    padding-top: 120px;
    text-align: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }
}
</style>
<template>
  <div>
    <div style="padding-bottom: 20px">
      <Form readonly :labelWidth="200">
        <FormItem label="Automatic switching">
          <h-switch small v-model="autoplay"></h-switch>
        </FormItem>
        <FormItem label="Left and right toggle button">
          <SwitchList small v-model="arrow" :datas="arrows"></SwitchList>
        </FormItem>
        <FormItem label="Bottom indicator style">
          <SwitchList small v-model="pageTheme" :datas="pageThemes"></SwitchList>
        </FormItem>
        <FormItem label="Bottom indicator trigger">
          <SwitchList small v-model="paginationTrigger" :datas="paginationTriggers"></SwitchList>
        </FormItem>
        <FormItem label="Switching effect">
          <SwitchList small v-model="effect" :datas="effects"></SwitchList>
        </FormItem>
      </Form>
    </div>
    <Carousel
      class="carousel-demo1"
      :datas="params"
      :height="300"
      :autoplay="autoplay"
      :paginationTrigger="paginationTrigger"
      :arrow="arrow"
      :pageTheme="pageTheme"
      :speed="2000"
      :changeSpeed="1000"
      :effect="effect"
    >
      <template slot-scope="{carousel}" slot="item">
        <div class="h-carousel-p" :style="`background: ${carousel.color}`">{{carousel.title}}</div>
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
      arrow: 'hover',
      paginationTrigger: 'click',
      effect: 'scroll',
      pageThemes: { circle: 'Round', square: 'Square', hidden: 'Hidden' },
      arrows: { hidden: 'Hidden', always: 'Always', hover: 'Hover' },
      paginationTriggers: { click: 'Click', hover: 'Hover' },
      effects: { fade: 'fade in and fade out', scroll: 'scroll' },
      params: [
        { title: 'Page 1', color: '#d36eb0' },
        { title: 'Page 2', color: '#7276f5' },
        { title: 'Page 3', color: '#b6cf4d' },
        { title: 'Page 4', color: '#cf5e4d' }
      ]
    };
  }
};
</script>
