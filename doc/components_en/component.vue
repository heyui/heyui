<template>
  <div class="page-component">
    <com-head></com-head>
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li><router-link to="/en/component/guide" :class="{'router-link-active': $route.name =='en_Component'}">Getting Start</router-link></li>
            <li><router-link to="/en/component/quickstart">Quick Start</router-link></li>
            <li><router-link to="/en/component/themes">Themes</router-link></li>
            <li><router-link to="/en/component/i18n">Internationalization</router-link></li>
            <li><router-link to="/en/component/config">Configuration</router-link></li>
            <li><Badge :count="1" :dot="true"><router-link to="/en/component/methods">Global Methods</router-link></Badge></li>
            <li><router-link to="/en/component/guideheysnippets">Snippets for vscode</router-link></li>
          </ul>

          <template v-for="m of menus">
            <li class="title" :key="m.category + 'title'">{{m.category}}</li>
            <ul :key="m.category + 'list'">
              <li v-for="(value, key) in m.components" :key="key">
                <router-link :to="{name: 'en_'+key}">{{value.split(' ')[0]}}</router-link>
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
