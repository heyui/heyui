<template>
  <header class="comm-header">
    <div class="header-nav">
      <router-link class="logo" to="/">
        <div class="header-logo"><span></span></div>HEY UI
      </router-link>
      <AutoComplete v-width="180" dict="menus" autoSelectFirst v-model="search" @change="goSearch" placeholder="搜索..."></AutoComplete>
      <div class='header-nav-list'>
        <router-link to="/home">首页</router-link>
        <!-- <router-link to="/guide">入门</router-link> -->
        <router-link to="/component">组件</router-link>
        <router-link to="/resource">资源</router-link>
        <a target="_blank" href="http://admin.heyui.top">Admin</a>
        <!-- <router-link to="/about">团队</router-link> -->
        <a target="_blank" href="https://github.com/heyui/heyui"><i class="h-icon-github" v-font='20'></i></a>
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
    go(link) {
      this.$router.go(link);
    },
    goSearch(data) {
      this.$router.push({name: data.key});
      this.$nextTick(() => {
        this.search = null;
      })
    }
  }
}
</script>
