<template>
  <header class="comm-header">
    <div class="header-nav">
      <a class="logo" href="/">
        <img src="../../../static/images/logo.png"/>HEY UI
      </a>
      <div class='header-nav-list'>
        <router-link to="/guide">入门</router-link>
        <router-link to="/component">组件</router-link>
        <router-link to="/resource">资源</router-link>
        <!-- <router-link to="/about">团队</router-link> -->
        <a href="https://github.com/heyui/heyui">github</a>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data () {
    return {
      pass: '',
      error: false
    }
  },
  methods: {
  }
}
</script>
