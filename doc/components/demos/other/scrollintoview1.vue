<template>
  <div>
    <div v-height="1200" class="demo-top relative">
      <p class="middle-center">点</p>
    </div>
    <Button @click="scrollIntoView('top')">将点集中在视图顶部</Button>
    <Button @click="scrollIntoView('center')">将点集中在视图中部</Button>
  </div>
</template>

<script>

export default {
  methods: {
    scrollIntoView(position) {
      this.$ScrollIntoView(this.$el.querySelector('.middle-center'), {
        time: 500,
        align: {
          top: position == 'top' ? 0 : 0.5, //视图比例 0 to 1, 默认 0.5 (center)
          topOffset: position == 'top' ? 80 : 0, //视图位移 pixels to offset top alignment
        },
      });
    }
  }
}
</script>