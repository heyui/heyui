<template>
  <TextEllipsis :text="text" :height="50" v-width="200">
    <template slot="more">...</template>
  </TextEllipsis>
</template>

<script>

export default {
  data() {
    return {
      text: '《华盛顿自由灯塔报》几天前报道称，美国国防部官员透露中国近日进行第十次东风-41洲际导弹的试射活动，这次试射中东风-41导弹投射了多个弹头并成功命中中国西部靶场目标。'
    };
  },
  methods: {

  }
};
</script>
