<template>
  <div class="page-home">
    <com-head></com-head>
    <div class="page-body universe">
      <div class="part">
        <h1>HEYUI</h1>
        <p>一个基于Vue.js的高质量UI组件库</p>
        <p>
          <Button color="primary" size="l" circle @click="goLink({name: 'Component'})">开始使用</Button>
          <Button text-color="primary" size="l" circle @click="goGithub" icon="h-icon-github">Github</Button>
          <Button text-color="primary" size="l" circle @click="goGitee">码云</Button>
          <iframe class="github-icon"  src="https://ghbtns.com/github-btn.html?user=heyui&repo=heyui&type=star&count=true&size=large" frameborder="0"></iframe>
        </p>
      </div>
    </div>

    <div class="bg1" @click="dynamicLoadCss('pink')"></div>
    <div class="bg2" @click="dynamicLoadCss('lavender')"></div>
    <div class="bg3" @click="dynamicLoadCss('yellow')"></div>
    <div class="bg4" @click="dynamicLoadCss('red')"></div>
    <com-foot></com-foot>
  </div>
</template>

<script>
import comHead from './common/header.vue';
import comFoot from './common/footer.vue';

export default {
  data() {
    return {
      pass: '',
      error: false
    };
  },
  methods: {
    goLink(params) {
      this.$router.push(params);
    },
    dynamicLoadCss(type) {
      Utils.dynamicLoadCss(type);
    },
    goGithub() {
      window.open('https://github.com/heyui/heyui');
    },
    goGitee() {
      window.open('https://gitee.com/heyui/heyui');
    }
  },
  created() {
    this.$nextTick(() => {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

      }
    });
  },
  components: {
    comHead,
    comFoot
  }
};
</script>
