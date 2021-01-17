<template>
  <div>
    <span v-tooltip ref-el="demo" class="text-hover" theme="white">模板调用</span>
    <i class="h-split" v-width="30"></i>
    <Tooltip theme="white" @show="show" trigger="click" @hide="hide" editable>
      <span class="text-hover">Component调用</span>
      <div slot="content">
        <div v-padding="10">
          <Select dict="simple" v-model="value" style="width: 200px;"></Select>
        </div>
      </div>
    </Tooltip>

    <div tmpl="demo" v-width="220">
      <div v-padding="20">
        <img :width="80" :height="80" style="border-radius:80px;float:left" src="http://www.ch-un.com/images/head.jpg">
        <div style="height:80px;margin-left:90px;line-height:80px;">用户名: <a>LAN</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
      value: null
    };
  },
  methods: {
    change() {
      this.a = this.a + 1;
    },
    show() {
      console.log('show');
    },
    hide() {
      console.log('hide');
    }
  }
};
</script>
