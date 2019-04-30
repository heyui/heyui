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
  .com-frame-footer{
    text-align: center;
    margin-top: 50px;
    padding-top: 30px;
  }
</style>

<template>
  <div class="com-frame">
    <div class="left-frame">
      <slot name="left-frame"></slot>
    </div>
    <div class="right-frame h-dropdown-common-container">
      <router-view></router-view>
      <footer class="com-frame-footer">Copyright © 2019 <a href="http://www.ch-un.com" target="_blank">Lan</a></footer>
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

import scrollIntoView from '../../../src/plugins/scrollIntoView';
export default {
  data() {
    return {
      pass: '',
      error: false,
      menus: [],
      routeName: null
    };
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
      window.location.hash = this.menus[index];
      scrollIntoView($(`.doc h2,.doc h3`, this.$el).eq(index)[0], {
        time: 500,
        align: {
          top: 0.1,
          topOffset: 0
        }
      });
    },
    initLeftMenu(force = false) {
      if (this.routeName == this.$route.name && !force) {
        return;
      }
      this.$nextTick(() => {
        scrollIntoView($('.left-frame .router-link-active', this.$el)[0], {
          time: 500,
          align: {
            // top: 10,
            topOffset: 0
          }
        });
        let menus = $('.doc h2,.doc h3').not('.demo-box h2,.demo-boxc h3');
        this.menus = [...menus].map(item => item.innerText);
        menus.each((index, item) => {
          let link = $(`<span class="hash-link">#</span>`);
          link.on('click', (event) => {
            event.preventDefault();
            this.goMenu(index);
          });
          $(item).append(link);
        });
        setTimeout(() => {
          let hash = decodeURI(window.location.hash);
          if (hash) {
            let keyword = hash.substring(1);
            let index = this.menus.indexOf(keyword);
            if (index > -1) {
              this.goMenu(index);
            }
          }
        }, 500);
        // console.log($(".doc h3"))
      });
      this.routeName = this.$route.name;
    }
  },
  mounted() {
    this.initLeftMenu();
  }
};
</script>
