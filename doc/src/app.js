import { createApp } from 'vue';
import VueI18n from 'vue-i18n';
import 'highlight.js/styles/github-gist.css';
import App from '@/App.vue';

import utils from 'hey-utils';

import HeyUI from 'heyui/src/index';
import ColorPicker from 'heyui/src/components/color-picker';
import heyuiConfig from '@/js/config/heyui-config';
import VueHighlightJS from '@/js/vuehighlight';

import example from '@/components/common/example.vue';
import codes from '@/components/common/codes.vue';
import exampleEn from '@/components_en/common/example.vue';
import codesEn from '@/components_en/common/codes.vue';
import router from '@/js/config/router-config';
import en from 'heyui/src/locale/lang/en-US';
import zh from 'heyui/src/locale/lang/zh-CN';
import('@lottiefiles/lottie-player').catch(error => 'An error occurred while loading the component');

require('@/css/index.less');

const app = createApp(App).mount('#app');

let language = (navigator.language || navigator.browserLanguage).toLowerCase();

let lang = window.location.pathname.indexOf('/en') == -1 ? 'zh' : 'en';

if (utils.getLocal('LANGUAGE') == null && window.location.pathname.indexOf('/en') == -1) {
  if (language.indexOf('zh') == -1) {
    window.location.href = '/en';
  }
}

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

app.use(VueHighlightJS);
// app.use(VueI18n);
// app.use(router);
// app.use(HeyUI, { i18n });

// app.component('ColorPicker', ColorPicker);
// app.component('example', example);
// app.component('codes', codes);
// app.component('exampleEn', exampleEn);
// app.component('codesEn', codesEn);

G.set('globalConfig', {
  theme: 'default'
});

console.log(
  ` %c
 _    _  ______ __     __ _    _  _____
| |  | ||  ____|\\ \\   / /| |  | ||_   _|
| |__| || |__    \\ \\_/ / | |  | |  | |
|  __  ||  __|    \\   /  | |  | |  | |
| |  | || |____    | |   | |__| | _| |_
|_|  |_||______|   |_|    \\____/ |_____|
          
             一个基于Vue.js的高质量UI组件库
`,
  'color: #45b984'
);
export default app;
