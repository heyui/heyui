import autosize from 'heyui/plugins/autosize';

export default {
  mounted(el) {
    autosize(el);
  },
  updated(el) {
    autosize.update(el);
  },
  beforeUnmount(el) {
    autosize.destroy(el);
  }
};
