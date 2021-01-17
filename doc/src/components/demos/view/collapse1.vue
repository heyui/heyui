<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title="迈尔斯·莫拉莱斯">
        终极宇宙里的蜘蛛侠，被一只放射性蜘蛛咬伤，并因此获得了超能力。偶然和其他宇宙的蜘蛛侠相遇，将和他们共同对抗最强反派。
      </CollapseItem>
      <CollapseItem title="彼得·帕克">
        616宇宙的蜘蛛侠，他帮助训练迈尔斯·莫拉莱斯正视自己，勇于承担肩上的责任，在这期间也慢慢的找回自我。
      </CollapseItem>
      <CollapseItem title="格温·史黛西">
        我是她是一个非常聪明、反应极快的女孩儿，能够以宛如舞者般优雅的身姿穿梭往来，是她所属那个世界的蜘蛛侠。
      </CollapseItem>
    </Collapse>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      value: [0]
    };
  },
  computed: {

  },
  created() {

  },
  methods: {

  }
};
</script>
