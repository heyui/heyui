<template>
  <header class="comm-header">
    <div class="header-nav">
      <router-link class="logo" to="/">
        <div class="header-logo">
          <span></span>
        </div><span>HEY UI</span>
      </router-link>
      <AutoComplete v-width="220" dict="menus" autoSelectFirst v-model="search" @change="goSearch" placeholder="搜索..."></AutoComplete>
      <div class="header-nav-list">
        <div class="bg-group" v-if="$route.name != 'Home'">
          <div class="bg2" @click="dynamicLoadCss('lavender')"></div>
          <div class="bg1" @click="dynamicLoadCss('pink')"></div>
          <div class="bg3" @click="dynamicLoadCss('yellow')"></div>
          <div class="bg4" @click="dynamicLoadCss('red')"></div>
        </div>
        <template>
          <!-- <a @click="goLink({name: 'Home'})" :class="{'router-link-active': $route.name == 'Home'}">首页</a> -->
          <!-- <router-link to="/guide">入门</router-link> -->
          <router-link to="/component">组件</router-link>
          <router-link to="/theme">主题</router-link>
          <a target="_blank" href="http://admin.heyui.top/login">Admin</a>
          <!-- <router-link to="/about">团队</router-link> -->
        </template>
        <ButtonGroup class="change-lang">
          <Button size="s" @click="goGithub" v-if="$route.name != 'Home'">
            <i class="h-icon-github link"></i>
          </Button>
          <Button size="s" @click="openWeixin">
            <span class="link">微信</span>
          </Button>
          <Button @click="changeLang" size="s">
            <span class="link">English</span>
          </Button>
        </ButtonGroup>
      </div>
    </div>
    <Modal v-model="showModel" class-name="weixin-modal">
      <div slot="header">加入 HeyUI 微信交流群</div>
      <div>
        <!-- <p>微信群</p> -->
        <div class="weixin-image">
          <p>由于微信群已满100人</p>
          <p>请感兴趣的朋友添加微信号：heyui-robot</p>
          <p>我们会定期拉人入群。</p>
        </div>
      </div>
    </Modal>
  </header>
</template>

<script>
import utils from 'hey-utils';

export default {
  data() {
    return {
      pass: '',
      error: false,
      search: null,
      showModel: false
    };
  },
  created() {
    this.$nextTick(() => {
      if (utils.getLocal('wenxinNotice')) return;
      utils.saveLocal('wenxinNotice', 1);
      this.$Notice({
        timeout: 0,
        title: '加入 HeyUI 微信交流群',
        content: '拥有更快速更详细的交流，加入我们的微信交流群。',
        buttons: [
          {
            type: 'confirm',
            color: 'primary',
            name: '查看'
          }
        ],
        events: {
          confirm: notice => {
            this.openWeixin();
            notice.close();
          }
        }
      });
    });
  },
  methods: {
    dynamicLoadCss(type) {
      Utils.dynamicLoadCss(type);
    },
    changeLang() {
      this.$i18n.locale = 'en';
      utils.saveLocal('LANGUAGE', 'en');
      this.$router.push({ name: `en_${this.$route.name}` });
    },
    goLink(params) {
      this.$router.push(params);
    },
    go(link) {
      this.$router.go(link);
    },
    goGithub() {
      window.open('https://github.com/heyui/heyui');
    },
    openWeixin() {
      this.showModel = true;
    },
    goSearch(data) {
      if (!data.key) return;
      this.$router.push({ name: data.key });
      this.$nextTick(() => {
        this.search = null;
      });
    }
  }
};
</script>
