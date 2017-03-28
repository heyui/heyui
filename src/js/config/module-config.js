import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app';

require('../heyui/themes/common.less');
require('../static/css/doc.less');

import comHead from './components/common/header';
import comFoot from './components/common/footer';
import comFrame from './components/common/frame';

Vue.use(VueRouter);

Vue.component('com-head',comHead);
Vue.component('com-foot',comFoot);
Vue.component('com-frame',comFrame);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: (resolve)=>require(['./components/home'], resolve)},
    { path: '/component', component: (resolve)=>require(['./components/component'], resolve)},
    { path: '/resource', component: (resolve)=>require(['./components/resource'], resolve) },
    { path: '/about', component: (resolve)=>require(['./components/about'], resolve)},
    { path: '/start', component: (resolve)=>require(['./components/start'], resolve)}
  ]
})

const app = new Vue({router, el: '#app',render: h => h(App)});