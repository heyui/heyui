let valids = {
  int: {
    valid(value) {
      return parseInt(value, 10) == value;
    },
    message: '请输入正确的整数格式'
  },
  number: {
    valid(value) {
      return !isNaN(new Number(value));
    },
    message: '请输入正确的数字格式'
  },
  email: {
    pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    message: '请输入正确的邮箱格式'
  },
  url: {
    pattern: /^((\w+):\/\/)?([A-z0-9]+[_\-]?[A-z0-9]+\.)*[A-z0-9]+\-?[A-z0-9]+\.[A-z]{2,}(\/.*)*\/?$/,
    message: '请输入正确的网址格式'
  },
  tel: {
    pattern: /(^(\+\d{2,3}\/)?\d{3,4}(-)?\d{7,8}(\*\d{2,6})?$)|(^1\d{10}$)/,
    message: '请输入正确的电话号码格式'
  },
  mobile: {
    pattern: /^1\d{10}$/,
    message: '请输入正确的手机号码格式'
  },
  globalmobile: {
    pattern: /^[\+\-0-9a]+$/,
    message: '请输入正确的国际号码格式'
  } //国际号码
};
module.exports = valids;
