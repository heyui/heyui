<template>
  <div class="page-home">
    <com-head></com-head>
    <div class="page-body universe">
      <div class="part">
        <h1>HEYUI</h1>
        <p> A high quality UI Toolkit based on Vue.js </p>
        <p>
          <Button color="primary" size="l" circle @click="goLink({name: 'en_Component'})">Getting Started</Button>
          <Button text-color="primary" size="l" circle @click="goGithub" icon="h-icon-github">Github</Button>
          <iframe class="github-icon"  src="https://ghbtns.com/github-btn.html?user=heyui&repo=heyui&type=star&count=true&size=large" frameborder="0"></iframe>
        </p>
      </div>
    </div>
    <div class="bg1"></div>
    <div class="bg2"></div>
    <div class="bg3"></div>
    <div class="bg4"></div>
    <com-foot></com-foot>
  </div>
</template>

<script>
import animate from 'js/ani.js'
// let animate
import comHead from './common/header.vue';
import comFoot from './common/footer.vue';
import comFrame from './common/frame.vue';

export default {
  data() {
    return {
      pass: '',
      error: false
    }
  },
  methods: {
    goLink(params) {
      this.$router.push(params);
    },
    goGithub() {
      window.open('https://github.com/heyui/heyui');
    }
  },
  created() {
    this.$nextTick(()=>{
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return;
      }
      // import('js/ani.js').then((animate) => {
      //   animate.default.initWorld(this.$el.querySelector('.universe'))
      // })
    })
  },
  components: {
    comHead,
    comFoot,
    comFrame
  }
}
</script>
