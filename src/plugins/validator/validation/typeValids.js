import locale from 'heyui/locale';

let valids = {
  int: {
    valid(value) {
      return parseInt(value, 10) == value;
    },
    message: locale.hlang('h.validation.type.int')
  },
  number: {
    valid(value) {
      return !isNaN(Number(value));
    },
    message() {
      return locale.hlang('h.validation.type.number');
    }
  },
  email: {
    pattern: /^[^\s]+@[^\s]+\.[^\s]+$/,
    message() {
      return locale.hlang('h.validation.type.email');
    }
  },
  url: {
    pattern: /^((\w+):\/\/)?([^\s]?[^\s]+\.)*[^\s]+-?[^\s]+\.[^\s]{2,}(\/.*)*\/?$/,
    message() {
      return locale.hlang('h.validation.type.url');
    }
  },
  tel: {
    pattern: /(^(\+\d{2,3}\/)?\d{3,4}(-)?\d{7,8}(\*\d{2,6})?$)|(^1\d{10}$)/,
    message() {
      return locale.hlang('h.validation.type.tel');
    }
  },
  mobile: {
    pattern: /^1\d{10}$/,
    message() {
      return locale.hlang('h.validation.type.mobile');
    }
  },
  globalmobile: {
    pattern: /^[+\-0-9a]+$/,
    message() {
      return locale.hlang('h.validation.type.globalmobile');
    }
  } // international mobile
};

export default valids;
