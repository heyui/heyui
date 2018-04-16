<template>
  <div class="com-frame flex">
    <div class="left-frame overflow-y">
      <slot name="left-frame"></slot>
    </div>
    <div class="right-frame flex1 overflow-y h-dropdown-common-container">
      <router-view></router-view>
      <BackTop :target="getTarget"></BackTop>
      <div class="right-frame-menu-container">
        <ul class="right-frame-menu" v-if="menus.length>0">
          <li v-for="(m, index) of menus" :key="m" @click="goMenu(index)">{{m}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import scrollIntoView from '../../../src/plugins/scrollIntoView'
export default {
  data() {
    return {
      pass: '',
      error: false,
      menus: []
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
    goMenu(index) {
      scrollIntoView($(`.doc h2,.doc h3`, this.$el).eq(index)[0], {
        time: 500,
        align:{
          top: .1,
          topOffset: 0
        }
      });
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
        this.menus = [...$(".doc h2,.doc h3")].map(item => item.innerText)
        // console.log($(".doc h3"))
      })
    }
  },
  mounted() {
    this.initLeftMenu()
  }
}
</script>
