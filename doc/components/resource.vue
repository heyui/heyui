<template>
  <div class="page-resource">
    <com-head></com-head>
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li>
              <router-link
                to="/resource/heycli"
                :class="{'router-link-active': $route.name =='resourceheycli' || $route.name =='resource'}"
              >hey-cli 脚手架</router-link>
            </li>
            <li>
              <router-link to="/resource/heysnippets">插件 for vscode</router-link>
            </li>
            <li>
              <router-link to="/resource/umock">umock 服务器</router-link>
            </li>
            <li>
              <router-link to="/resource/heyutils">hey-utils 通用方法</router-link>
            </li>
            <li>
              <router-link to="/resource/heyvalidator">hey-validator 数据验证</router-link>
            </li>
            <li>
              <router-link to="/resource/model">model 数据转换</router-link>
            </li>
            <li>
              <router-link to="/resource/manba">manba 日期工具</router-link>
            </li>
          </ul>
        </ul>
      </div>
      <div slot="right-frame">ready</div>
    </com-frame>
  </div>
</template>
<script>
import comHead from './common/header.vue';
import comFrame from './common/frame.vue';
export default {
  data() {
    return {
      pass: '',
      error: false
    };
  },
  methods: {},
  components: {
    comHead,
    comFrame
  }
};
</script>
