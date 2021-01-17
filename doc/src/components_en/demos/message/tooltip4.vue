<template>
  <div>
    <span v-tooltip ref-el="demo" class="text-hover" theme="white">Template call</span>
    <i class="h-split" v-width="30"></i>
    <Tooltip theme="white" @show="show" @hide="hide">
      <span class="text-hover">Component call</span>
      <div slot="content">
        <div v-padding="10">
          <img :width="80" :height="80" style="border-radius:80px;float:left" src="http://www.ch-un.com/images/head.jpg">
          <div style="height:80px;margin-left:90px;line-height:80px;">username: <a>LAN</a></div>
        </div>
      </div>
    </Tooltip>

    <div tmpl="demo" v-width="220">
      <div v-padding="20">
        <img :width="80" :height="80" style="border-radius:80px;float:left" src="http://www.ch-un.com/images/head.jpg">
        <div style="height:80px;margin-left:90px;line-height:80px;">username: <a>LAN</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1
    };
  },
  methods: {
    change() {
      this.a = this.a + 1;
    },
    show() {
      this.$Message('show');
    },
    hide() {
      this.$Message('hide');
    }
  }
};
</script>
