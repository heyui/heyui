<template>
  <div class="page-home">
    <com-head></com-head>
    <div class="page-body universe">
      <div class="part">
        <h1>HEYUI</h1>
        <p>一个基于Vue.js的高质量组件库</p>
        <iframe class="github-icon" src="https://ghbtns.com/github-btn.html?user=heyui&repo=heyui&type=star&count=true" frameborder="0"></iframe>
      </div>
    </div>
    <com-foot></com-foot>
  </div>
</template>

<script>
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
