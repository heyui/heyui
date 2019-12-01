import Vue from 'vue';
import App from './app.vue';
import { install, Prototypes, Button, Pagination, DropdownMenu } from 'heyuiNative';

require('../css/module.less');

Vue.use(install, { components: { Button, DropdownMenu, Pagination }, prototypes: Prototypes });

const app = new Vue({
  el: '#app',
  render: h => h(App)
});
export default app;
