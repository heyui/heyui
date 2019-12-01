import locale from 'heyui/src/locale';

export default {
  methods: {
    t(...args) {
      return locale.t.apply(this, args);
    }
  }
};
