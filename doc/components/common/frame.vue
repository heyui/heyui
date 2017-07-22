<template>
  <div class="com-frame flex">
    <div class="left-frame overflow-y">
      <slot name="left-frame"></slot>
    </div>
    <div class="right-frame flex1 overflow-y">
      <router-view></router-view>

      <BackTop :target="getTarget"></BackTop>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      pass: '',
      error: false
    }
  },
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    }
  },
  mounted() {
    $.smoothScroll({
      scrollElement: $('.left-frame', this.$el),
      scrollTarget: $('.left-frame .router-link-active', this.$el),
      offset: -60,
    });
  }
}
</script>
