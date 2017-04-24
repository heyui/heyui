import Notify from '../base/notify';
import utils from '../../utils/utils';

const prefixCls = 'h-notice';
const iconPrefixCls = 'h-icon';


let Default = {
  timeout: 4000
}

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

let noticeDom = null;

function Notice(originalParam) {
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
  if (new Set(Object.keys(iconNames)).has(originalParam.type)) {
    if (originalParam.title) originalParam.style = `${prefixCls}-has-icon`;
    originalParam.content = `<i class="${iconPrefixCls}-${iconNames[originalParam.type]} ${iconColor[originalParam.type]}-color"></i>${originalParam.content}`
    delete originalParam.type;
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
  log.error('Notice传递参数不正确:', param);
}

notice.config = (options) => {
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
  log.error('Notice传递参数不正确:', param);
}

notice.error = (param, timeout) => noticeWithType('error', param, timeout);
notice.warn = (param, timeout) => noticeWithType('warn', param, timeout);
notice.success = (param, timeout) => noticeWithType('success', param, timeout);
notice.info = (param, timeout) => noticeWithType('info', param, timeout);


export default notice;
