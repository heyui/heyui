<template>
  <div class="page-component">
    <com-head></com-head>
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li>
              <router-link to="/component/guide" :class="{'router-link-active': $route.name =='Component'}">入门</router-link>
            </li>
            <li>
              <router-link to="/component/quickstart">快速上手</router-link>
            </li>
            <li>
              <router-link to="/component/themes">更换主题</router-link>
            </li>
            <li>
              <router-link to="/component/i18n">国际化</router-link>
            </li>
            <li>
              <router-link to="/component/config">全局配置</router-link>
            </li>
            <li>
              <Badge :count="1" :dot="true">
                <router-link to="/component/methods">全局方法</router-link>
              </Badge>
            </li>
            <li>
              <router-link to="/component/guideheysnippets">插件 for vscode</router-link>
            </li>
          </ul>
          <template v-for="m of menus">
            <li class="title" :key="m.category + 'title'">{{m.category}}</li>
            <ul :key="m.category + 'list'">
              <li v-for="(value, key) in m.components" :key="key">
                <router-link :to="{name: key}">{{value}}</router-link>
              </li>
            </ul>
          </template>
        </ul>
      </div>
      <div slot="right-frame" v-if="$route.matched.length>0">
        <router-view></router-view>
      </div>
    </com-frame>
  </div>
</template>
<script>
import comHead from './common/header.vue';
import comFrame from './common/frame.vue';
import dict from 'js/config/dict-config';
export default {
  data() {
    return {
      pass: '',
      menus: dict.menus,
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
