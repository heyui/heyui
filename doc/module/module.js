import Vue from 'vue';
import 'highlight.js/styles/github-gist.css';
import App from './App.vue';
import HeyUI from './../src/index';
import VueHighlightJS from './js/vuehighlight';

require('./css/module.less');

Vue.use(VueHighlightJS);
Vue.use(HeyUI);

const app = new Vue({
  el: '#app',
  render: h => h(App)
});
export default app;
