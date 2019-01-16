<template>
  <header class="comm-header">
    <div class="header-nav">
      <router-link class="logo" to="/en">
        <div class="header-logo"><span></span></div>HEY UI
      </router-link>
      <AutoComplete v-width="180" dict="enMenus" autoSelectFirst v-model="search" @change="goSearch" placeholder="search..."></AutoComplete>
      <div class='header-nav-list'>
        <template v-if="$route.name != 'en_Home'">
          <!-- <a @click="goLink({name: 'en_Home'})" :class="{'router-link-active': $route.name == 'en_Home'}">Home</a> -->
          <!-- <router-link to="/guide">入门</router-link> -->
          <router-link to="/en/component">Component</router-link>
          <router-link to="/en/resource">Ecosystem</router-link>
          <a target="_blank" href="http://admin.heyui.top/login">Admin</a>
          <!-- <router-link to="/about">团队</router-link> -->
        </template>
        <ButtonGroup class="change-lang">
          <Button size="s" v-if="$route.name != 'en_Home'"><a target="_blank" href="https://github.com/heyui/heyui"><i class="h-icon-github"></i></a></Button>
          <!-- https://discordapp.com/invite/VUZbFmd -->
          <Button size="s"><a target="_blank" href="https://github.com/heyui/heyui/issues"><i class="h-icon-message"></i></a></Button>
          <Button @click="changeLang" size="s"><span class="link">中</span></Button>
        </ButtonGroup>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      pass: '',
      error: false,
      search: null
    }
  },
  methods: {
    changeLang() {
      this.$i18n.locale = 'zh';
      this.$router.push({name: `${this.$route.name.substring(3)}`});
    },
    goLink(params) {
      this.$router.push(params);
    },
    go(link) {
      this.$router.go(link);
    },
    goSearch(data) {
      if(!data.key) return;
      this.$router.push({name: `en_${data.key}`});
      this.$nextTick(() => {
        this.search = null;
      })
    }
  }
}
</script>
