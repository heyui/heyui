<template>
  <div class="com-frame flex">
    <div class="left-frame overflow-y">
      <slot name="left-frame"></slot>
    </div>
    <div class="right-frame flex1 overflow-y h-dropdown-common-container">
      <router-view></router-view>
      <BackTop :target="getTarget"></BackTop>
    </div>
  </div>
</template>
<script>

import scrollIntoView from '../../../src/plugins/scrollIntoView'
export default {
  data() {
    return {
      pass: '',
      error: false
    }
  },
  watch: {
    '$route'() {
      this.initLeftMenu();
    }
  },
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    },
    initLeftMenu() {
      this.$nextTick(()=>{
        scrollIntoView($('.left-frame .router-link-active', this.$el)[0], {
          time: 500,
          align:{
            // top: 10,
            topOffset: 0
          }
        });
      })
    }
  },
  mounted() {
    this.initLeftMenu()
  }
}
</script>
