<template>
  <div class="bg-gray4-color">
    <div v-height="1000" class="demo-top relative">
      <p>视图顶部</p>
      <p class="middle-center">视图中部</p>
    </div>
    <Button @click="scrollIntoView('top')">返回视图顶部</Button>
    <Button @click="scrollIntoView('center')">返回视图中部</Button>
  </div>
</template>

<script>

export default {
  methods: {
    scrollIntoView(position) {
      this.$ScrollIntoView(this.$el.querySelector('.demo-top'), {
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