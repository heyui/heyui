<template>
  <div class="doc">
    <h2>Internationalization</h2>
    <blockquote>1.3.0+ added</blockquote>
    <p>HeyUI default use of Chinese, if you need to use other languages, please refer to the following configuration changes.</p>
    <p>Alternatively, you need to modify some expressions, or refer to the following configuration changes.</p>

    <h3>Setting the language of the system</h3>
    <codesEn type="javascript">
import Vue from 'vue';
import HeyUI from 'heyui';
import en from 'heyui/dist/locale/en-US';

Vue.use(HeyUI);
HeyUI.locale(en);
    </codesEn>

    <h3>Use vue-i18n</h3>
    <codesEn type="javascript">
import Vue from 'vue';
import HeyUI from 'heyui';
import VueI18n from 'vue-i18n';
import en from 'heyui/dist/locale/en-US';
import zh from 'heyui/dist/locale/zh-CN';

Vue.use(HeyUI);
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
HeyUI.i18n(i18n);

// change language
// vue file
this.$i18n.locale = 'en';
// or
i18n.locale = 'en';
    </codesEn>

    <h3>Supported language</h3>
    <p>HeyUI has now supported the following languages:</p>
    <ul class="text-ul">
      <li>简体中文(zh-CN)</li>
      <li>English(en-US)</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
