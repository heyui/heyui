import locale from 'heyui/locale';

export default {
  methods: {
    hlang(...args) {
      return locale.hlang.apply(this, args);
    }
  }
};
