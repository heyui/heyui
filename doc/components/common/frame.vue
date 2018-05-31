<style lang="less">
  ul.right-frame-menu {
    overflow: auto;
    padding: 70px 0;
    width: 180px;
    background-color: #FFF;
    li{
      font-size: 14px;
      padding: 5px 15px;
      line-height: 20px;
      word-break: break-all;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
      &:hover{
        color: @primary-color;
        background-color: @hover-background-color;
      }
    }
  }
  .right-frame-menu-container{
    top: 20px;
    position: fixed;
    right: 10px;
    width: 180px;
  }
</style>

<template>
  <div class="com-frame">
    <div class="left-frame">
      <slot name="left-frame"></slot>
    </div>
    <div class="right-frame h-dropdown-common-container">
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
