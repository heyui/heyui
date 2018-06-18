<template>
  <div class="page-home">
    <com-head></com-head>
    <div class="page-body universe">
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
