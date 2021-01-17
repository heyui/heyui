<template>
  <div>
    <p>Switch to {{page}}</p>
    <Carousel :datas="params" :height="300" pageTheme="circle" @change="change" @click="click"></Carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 'Page 1',
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
  },
  methods: {
    change(index, data) {
      this.page = data.title;
    },
    click(index, data) {
      this.$Message(`Clicked ${data.title}`);
    }
  }
};
</script>
