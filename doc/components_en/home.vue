<style lang="less">
.page-home {
  .comm-header{
    background: none;
    .h-autocomplete-input{
      color: #FFF;
    }
  }
  .page-body {
    /* bottom: 26px; */
    padding-bottom: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    overflow: hidden;
    // animation: skygradient 180s ease infinite;
    .part{
      text-align: center;
      position: absolute;
      // width: 800px;
      // left: 50%;
      // margin-left: -400px;
      width: 100%;
      top: 50%;
      margin-top: -150px;
      h1 {
        font-weight: 200;
        font-size: 40px;
        color: @primary-color;
        margin: 1%;
      }
    }
    .github-icon{
      margin: 30px auto 0;
      width: 100px;
      height: 30px;
    }
  }
}
@keyframes skygradient {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}
</style>
<template>
  <div class="page-home">
    <com-head></com-head>
    <div class="page-body" id="universe">
      <div class="part">
        <h1>HEYUI, quickly build front-end tools.</h1>
        <h4 class="gray-color">
          Help you quickly build your website.
        </h4>
        <h1>Simple, fast and scalable.</h1>
        <h4 class="gray-color">
          Simple call, rapid development, extensible interface
        </h4>
        <iframe class="github-icon" src="https://ghbtns.com/github-btn.html?user=heyui&repo=heyui&type=star&count=true" frameborder="0"></iframe>
      </div>
    </div>
    <com-foot></com-foot>
  </div>
</template>

<script>
// import animate from 'js/ani.js'
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
  methods: {},
  created() {
    this.$nextTick(()=>{
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return;
      }
      import('js/ani.js').then((animate) => {
        animate.default.initWorld()
      })
    })
  },
  beforeDestroy() {
    // animate.cleanWorld()
  },
  components: {
    comHead,
    comFoot,
    comFrame
  }
}
</script>
