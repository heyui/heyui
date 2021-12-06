import Notify from 'heyui/plugins/notify';
import utils from 'heyui/utils/utils';

const prefixCls = 'h-notice';
const iconPrefixCls = 'h-icon';

let Default = {
  timeout: 4000
};

const iconNames = {
  info: 'info',
  success: 'success',
  warn: 'warn',
  error: 'error'
};
const iconColor = {
  info: 'blue',
  success: 'green',
  warn: 'yellow',
  error: 'red'
};

function Notice(originalParam) {
  let noticeDom = document.querySelector(`.${prefixCls}-container`);
  if (!noticeDom) {
    noticeDom = document.createElement('div');
    utils.addClass(noticeDom, `${prefixCls}-container`);
    document.body.appendChild(noticeDom);
  }

  let param = {
    type: prefixCls,
    hasCloseIcon: true,
    parent: noticeDom
  };

  if (Object.keys(iconNames).indexOf(originalParam.type) != -1) {
    if (originalParam.title) originalParam.style = `${prefixCls}-has-icon`;
    originalParam.content = `<i class="${iconPrefixCls}-${iconNames[originalParam.type]} ${iconColor[originalParam.type]}-color"></i>${
      originalParam.content
    }`;
    delete originalParam.type;
  } else if (originalParam.icon) {
    if (originalParam.title) originalParam.style = `${prefixCls}-has-icon`;
    originalParam.content = `<i class="${originalParam.icon}"></i>${originalParam.content}`;
  }
  param = utils.extend({}, Default, param, originalParam, true);
  return Notify(param);
}

function notice(param, timeout) {
  if (utils.isString(param)) {
    return Notice({ content: param, timeout });
  } else if (utils.isObject(param)) {
    return Notice(param);
  }
  console.error('Notice params are incorrect:', param);
}

notice.config = options => {
  if (options.timeout != undefined) {
    Default.timeout = options.timeout;
  }
};

function noticeWithType(type, param, timeout) {
  if (utils.isString(param)) {
    return Notice({ content: param, timeout, type });
  } else if (utils.isObject(param)) {
    if (type) param.type = type;
    return Notice(param);
  }
  console.error('Notice params are incorrect:', param);
}

notice.error = (param, timeout) => noticeWithType('error', param, timeout);
notice.warn = (param, timeout) => noticeWithType('warn', param, timeout);
notice.success = (param, timeout) => noticeWithType('success', param, timeout);
notice.info = (param, timeout) => noticeWithType('info', param, timeout);

export default notice;
