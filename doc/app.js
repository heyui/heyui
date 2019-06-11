import 'core-js/stable';
import 'regenerator-runtime/runtime';
import store from 'js/store';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import 'highlight.js/styles/github-gist.css';
import App from './App.vue';

import utils from 'hey-utils';

import HeyUI from './../src/index';
import heyuiConfig from './js/config/heyui-config';
import VueHighlightJS from './js/vuehighlight';

import example from './components/common/example.vue';
import codes from './components/common/codes.vue';
import exampleEn from './components_en/common/example.vue';
import codesEn from './components_en/common/codes.vue';
import routerParam from './js/config/router-config';
import en from '../src/locale/lang/en-US';
import zh from '../src/locale/lang/zh-CN';

require('./css/index.less');

let language = (navigator.language || navigator.browserLanguage).toLowerCase();

let lang = window.location.pathname.indexOf('/en') == -1 ? 'zh' : 'en';

if (utils.getLocal('LANGUAGE') == null && window.location.pathname.indexOf('/en') == -1) {
  if (language.indexOf('zh') == -1) {
    window.location.href = '/en';
  }
}

Vue.use(VueHighlightJS);

Vue.use(VueI18n);
const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zh: Object.assign({ message: '你好' }, zh)
};
const i18n = new VueI18n({
  locale: lang, // set locale
  fallbackLocale: 'en',
  messages // set locale messages
});

heyuiConfig();
Vue.use(VueRouter);
Vue.use(HeyUI, { i18n });

Vue.component('example', example);
Vue.component('codes', codes);
Vue.component('exampleEn', exampleEn);
Vue.component('codesEn', codesEn);

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
});
router.afterEach(() => {
  HeyUI.$LoadingBar.success();
  Vue.nextTick(() => {
    $('.right-frame').scrollTop(0);
  });
  if (window.location.hostname != 'localhost' && window._hmt) {
    window._hmt.push(['_trackPageview', window.location.pathname]);
  }
});

G.set('globalConfig', {
  theme: 'default'
});
const app = new Vue({
  i18n,
  router,
  store,
  el: '#app',
  render: h => h(App)
});

console.log(` %c
 _    _  ______ __     __ _    _  _____
| |  | ||  ____|\\ \\   / /| |  | ||_   _|
| |__| || |__    \\ \\_/ / | |  | |  | |
|  __  ||  __|    \\   /  | |  | |  | |
| |  | || |____    | |   | |__| | _| |_
|_|  |_||______|   |_|    \\____/ |_____|
          
             一个基于Vue.js的高质量UI组件库
`, 'color: #45b984');
export default app;
