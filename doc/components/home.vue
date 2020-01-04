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
    <lottie-player
      class="lottie-player"
      autoplay
      loop
      background="transparent"
      mode="normal"
    >
    </lottie-player>
    <!-- <div class="bg1" @click="dynamicLoadCss('pink')"></div>
    <div class="bg2" @click="dynamicLoadCss('lavender')"></div>
    <div class="bg3" @click="dynamicLoadCss('yellow')"></div>
    <div class="bg4" @click="dynamicLoadCss('red')"></div> -->
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
  mounted() {
    const lottieList = [
      '/static/lottie/1.json',
      '/static/lottie/2.json',
      '/static/lottie/3.json',
      '/static/lottie/4.json',
      '/static/lottie/5.json',
      '/static/lottie/6.json',
      '/static/lottie/7.json',
      '/static/lottie/8.json',
      '/static/lottie/9.json',
      '/static/lottie/10.json',
      '/static/lottie/11.json'
    ];
    const random = Math.floor(Math.random() * lottieList.length);
    setTimeout(() => {
      const lottie = lottieList[random];
      const player = this.$el.querySelector('.lottie-player');
      player.load(lottie);
    }, 100);
  },
  components: {
    comHead,
    comFoot
  }
};
</script>
