require('babel-polyfill');
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import 'highlight.js/styles/github-gist.css';
// import HeyUI from 'heyui';
import App from './App.vue';

import HeyUI from './../src/index';
// import titleConfig from './js/config/title-config';
import heyuiConfig from './js/config/heyui-config';
import VueHighlightJS from './js/vuehighlight';

import example from './components/common/example.vue';
import codes from './components/common/codes.vue';
import routerParam from './js/config/router-config';
import en from '../src/locale/lang/en-US';
import zh from '../src/locale/lang/zh-CN';


require('./css/index.less');

Vue.use(VueHighlightJS)

let lang = window.location.pathname.indexOf('/en') == -1 ? 'zh' : 'en';

// HeyUI.locale(zh);


Vue.use(VueI18n);
const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zh: Object.assign({ message: '你好' }, zh)
};
const i18n = new VueI18n({
  locale: lang,  // set locale
  fallbackLocale: 'en',
  messages  // set locale messages
});
HeyUI.i18n(i18n);


heyuiConfig();
Vue.use(VueRouter);
Vue.use(HeyUI);

Vue.component('example', example);
Vue.component('codes', codes);

const router = new VueRouter(routerParam);
router.beforeEach((to, from, next) => {
  if (from.name == to.name) return;
  HeyUI.$LoadingBar.start();
  if (to.meta.title && to.name != 'Home') {
    document.title = `${to.meta.title} - HeyUI: A high quality UI Toolkit based on Vue.js`;
  } else {
    document.title = 'HeyUI: A high quality UI Toolkit based on Vue.js';
  }
  next();
})
router.afterEach(() => {
  HeyUI.$LoadingBar.success();
  Vue.nextTick(() => {
    $('.right-frame').scrollTop(0);
  });
  if (window.location.hostname != 'localhost' && window._hmt) {
    window._hmt.push(['_trackPageview', window.location.pathname]);
  }
});
const app = new Vue({
  i18n,
  router,
  el: '#app',
  render: h => h(App)
});

export default app;
