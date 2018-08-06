<template>
  <header class="comm-header">
    <div class="header-nav">
      <router-link class="logo" to="/">
        <div class="header-logo"><span></span></div>HEY UI
      </router-link>
      <AutoComplete v-width="180" dict="menus" autoSelectFirst v-model="search" @change="goSearch" placeholder="搜索..."></AutoComplete>
      <div class='header-nav-list'>
        <a @click="goLink({name: 'Home'})" :class="{'router-link-active': $route.name == 'Home'}">首页</a>
        <!-- <router-link to="/guide">入门</router-link> -->
        <router-link to="/component">组件</router-link>
        <router-link to="/resource">资源</router-link>
        <a target="_blank" href="http://admin.heyui.top">Admin</a>
        <!-- <router-link to="/about">团队</router-link> -->
        <ButtonGroup class="change-lang">
          <Button size="s" @click="goGithub"><i class="h-icon-github link"></i></Button>
          <Button size="s" @click="openWeixin"><i class="h-icon-message link"></i></Button>
          <Button @click="changeLang" size="s"><span class="link">English</span></Button>
        </ButtonGroup>
      </div>
    </div>
    <Modal v-model="showModel">
      <div slot="header">加入HeyUI微信交流群</div>
      <div>
        <p>微信群</p>
        <div>

        </div>
      </div>
    </Modal>
  </header>
</template>

<script>

export default {
  data() {
    return {
      pass: '',
      error: false,
      search: null,
      showModel: false
    }
  },
  methods: {
    changeLang() {
      this.$i18n.locale = 'en';
      this.$router.push({name: `en_${this.$route.name}`});
    },
    goLink(params) {
      this.$router.push(params);
    },
    go(link) {
      this.$router.go(link);
    },
    goGithub() {
      window.open('https://github.com/heyui/heyui')
    },
    openWeixin() {
      this.showModel = true;
    },
    goSearch(data) {
      if(!data.key) return;
      this.$router.push({name: data.key});
      this.$nextTick(() => {
        this.search = null;
      })
    }
  }
}
</script>
