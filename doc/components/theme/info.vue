<style lang='less'>
.theme-setting-vue {
  .prop-title, .prop-value {
    font-size: 13px;
  }
}
</style>
<template>
  <div class="theme-setting-vue">
    <p><span class="dark4-color">当前主题：</span> {{globalConfig.theme}}</p>
    <table>
      <tr v-for="(value, key) in varList" :key="key">
        <td class="prop-title">@{{key}}: <span class="primary-color">{{value}}</span>;</td>
      </tr>
    </table>
    <p v-if="globalConfig.theme != 'default'"><Button text-color="primary" @click="goDownload">下载配置文件</Button></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      globalConfig: G.get('globalConfig'),
      varList: {}
    };
  },
  watch: {
    'globalConfig.theme'() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.globalConfig.theme != 'default') {
        $.get(`/themes/${this.globalConfig.theme}/var.json`).then(resp => {
          this.varList = resp;
        });
      } else {
        this.varList = {};
      }
    },
    goDownload() {
      window.open(`https://github.com/heyui/heyui/tree/master/doc/themes/${this.globalConfig.theme}`);
    }
  },
  computed: {

  }
};
</script>
