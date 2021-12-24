import locale from 'heyui/locale';

export default {
  methods: {
    hlang(...args) {
      return locale.t.apply(this, args);
    }
  }
};
