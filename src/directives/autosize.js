import autosize from 'heyui/src/plugins/autosize';

export default {
  mounted(el, binding, vnode) {
    autosize(el);
  },
  beforeUnmount(el) {
    autosize.destory(el);
  }
};
