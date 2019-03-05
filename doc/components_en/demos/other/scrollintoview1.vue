<template>
  <div>
    <div v-height="1200" class="demo-top relative">
      <p class="middle-center">point</p>
    </div>
    <Button @click="scrollIntoView('top')">Focus points at the top of the view</Button>
    <Button @click="scrollIntoView('center')">Focus points in the middle of the view</Button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollIntoView(position) {
      this.$ScrollIntoView(this.$el.querySelector('.middle-center'), {
        time: 500,
        align: {
          top: position == 'top' ? 0 : 0.5, // 视图比例 0 to 1, 默认 0.5 (center)
          topOffset: position == 'top' ? 80 : 0 // 视图位移 pixels to offset top alignment
        }
      });
    }
  }
};
</script>
