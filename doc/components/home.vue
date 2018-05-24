<style lang="less">
.page-home {
  .comm-header{
    background: none;
  }
  .page-body {
    /* bottom: 26px; */
    padding-bottom: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      #1d1d49,
      #163c62,
      #124e51,
      #1f2d4f,
      #33225e,
      #432149,
      #1a1739,
      #19264f
    );
    background-size: 1600% 1600%;
    // animation: skygradient 180s ease infinite;
    .part{
      text-align: center;
      position: absolute;
      width: 800px;
      left: 50%;
      margin-left: -400px;
      top: 50%;
      margin-top: -150px;
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
        <h1>HEYUI，快速构建前端工具。</h1>
        <h4 class="gray-color">
          帮助您快速搭建网站。
        </h4>
        <h1>简单，快速，可扩展。</h1>
        <h4 class="gray-color">
          简单的调用，快速的开发，可扩展的接口
        </h4>
      </div>
    </div>
    <com-foot></com-foot>
  </div>
</template>

<script>
import animate from 'js/ani.js'

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
      animate.initWorld()
    })
  },
  beforeDestroy() {
    animate.cleanWorld()
  },
  components: {}
}
</script>
