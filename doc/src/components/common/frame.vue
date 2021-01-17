<style lang="less">
.right-frame-menu-container {
  top: 20px;
  position: fixed;
  right: 10px;
  width: 180px;
}
.com-frame-footer {
  text-align: center;
  margin-top: 50px;
  padding-top: 30px;
}
@media (max-width: 992px) {
  .page-component {
    .com-frame {
      .left-frame {
        position: fixed;
        background: #fff;
        width: 260px;
        padding-top: 30px;
        border-right: 2px solid @primary-color;
        box-shadow: 1px 1px 3px #c1f7dc;
        z-index: 10;
        -webkit-overflow-scrolling : touch;
        transition: transform 0.4s;
      }
      .left-translate {
        transform: translate(-445px, 10px);
      }
    }
    .left-frame-menu {
      position: fixed;
      z-index: 100;
      left: 10px;
      bottom: 20px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      text-align: center;
      background-color: @primary-color;
      color: #fff;
      border-radius: 40px;
    }
  }
}
</style>

<template>
  <div class="com-frame">
    <div
      class="left-frame"
      :class="{'left-translate': !leftMenuStatus}"
    >
      <slot name="left-frame"></slot>
    </div>
    <div class="left-frame-menu" @click="toggleLeftMenu">
      <i class="h-icon-menu"></i>
    </div>
    <div class="right-frame h-dropdown-common-container" @click="leftMenuStatus=false">
      <router-view></router-view>
      <footer class="com-frame-footer">
        Copyright © {{year}}
        <a href="http://www.ch-un.com" target="_blank">Lan</a>
      </footer>
      <BackTop :target="getTarget"></BackTop>
      <div class="right-frame-menu-container">
        <ul class="right-frame-menu" v-if="menus.length>0">
          <li v-for="(m, index) of menus" :key="index" @click="goMenu(index)">{{m}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: (new Date()).getFullYear(),
      pass: '',
      error: false,
      menus: [],
      routeName: null,
      leftMenuStatus: false
    };
  },
  watch: {
    $route() {
      this.initLeftMenu();
    }
  },
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    },
    goMenu(index) {
      window.location.hash = this.menus[index];
      this.$ScrollIntoView($(`.doc h2,.doc h3`, this.$el).eq(index)[0], {
        time: 500,
        align: {
          top: 0.1,
          topOffset: 0
        }
      });
    },
    // 显示隐藏菜单
    toggleLeftMenu() {
      this.leftMenuStatus = !this.leftMenuStatus;
    },
    initLeftMenu(force = false) {
      if (this.routeName == this.$route.name && !force) {
        return;
      }
      this.$nextTick(() => {
        this.$ScrollIntoView($('.left-frame .router-link-active', this.$el)[0], {
          time: 500,
          align: {
            // top: 10,
            topOffset: 0
          }
        });
        let menus = $('.doc h2,.doc h3').not('.demo-box h2,.demo-boxc h3');
        this.menus = [];
        menus.each((index, item) => {
          this.menus.push(item.innerText);
        });
        menus.each((index, item) => {
          let link = $(`<span class="hash-link">#</span>`);
          link.on('click', event => {
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
