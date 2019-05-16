<template>
  <div class="doc">
    <h2>国际化</h2>
    <blockquote>1.3.0+ 新增</blockquote>
    <p>HeyUI默认使用中文，如果需要使用其他语言，请参考下面的配置修改。</p>
    <p>或者，你需要修改一些表述方式，也可以参考下面的配置修改。</p>

    <h3>设置系统的语言</h3>
    <codes type="javascript">
import Vue from 'vue';
import HeyUI from 'heyui';
import en from 'heyui/dist/locale/en-US';

Vue.use(HeyUI, {locale: en});
    </codes>

    <h3>使用vue-i18n</h3>
    <codes type="javascript">
import Vue from 'vue';
import HeyUI from 'heyui';
import VueI18n from 'vue-i18n';
import en from 'heyui/dist/locale/en-US';
import zh from 'heyui/dist/locale/zh-CN';

Vue.use(VueI18n);
const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zh: Object.assign({ message: '你好' }, zh)
};
const i18n = new VueI18n({
  locale: 'zh',  // set locale
  fallbackLocale: 'en',
  messages  // set locale messages
});

// init i18n with heyui
Vue.use(HeyUI, {i18n});

// change language
// vue file
this.$i18n.locale = 'en';
// or
i18n.locale = 'en';
    </codes>

    <h3>支持的语言</h3>
    <p>HeyUI 目前已支持以下语言：</p>
    <ul class="text-ul">
      <li>简体中文(zh-CN)</li>
      <li>English(en-US)</li>
    </ul>
  </div>
</template>
