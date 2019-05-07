import Notify from 'heyui/src/plugins/notify';
import utils from 'heyui/src/utils/utils';

const prefixCls = 'h-message';
const iconPrefixCls = 'h-icon';

let Default = {
  timeout: 3000
};

const iconNames = {
  info: 'info',
  success: 'success',
  warn: 'warn',
  error: 'error',
  loading: 'loading'
};
const iconColor = {
  info: 'blue',
  success: 'green',
  warn: 'yellow',
  error: 'red',
  loading: 'blue'
};

let messageDom = null;

function Message(content, timeout, type, onClose) {
  if (!messageDom) {
    messageDom = document.createElement('div');
    utils.addClass(messageDom, `${prefixCls}-container`);
    document.body.appendChild(messageDom);
  }
  let param = {
    type: prefixCls,
    content: `<div><i class="${iconPrefixCls}-${iconNames[type]} ${iconColor[type]}-color"></i>${content}</div>`,
    event: {
      close: onClose
    },
    timeout,
    parent: messageDom
  };
  param = utils.extend({}, Default, param, true);
  if (param.timeout < 1) param.hasCloseIcon = true;
  return Notify(param);
}

function message(content, timeout, onClose) {
  if (utils.isObject(content)) {
    return Message(content.text, content.timeout, content.type || 'info', content.onClose);
  }
  return Message(content, timeout, 'info', onClose);
}

message.info = (content, timeout, onClose) => {
  return Message(content, timeout, 'info', onClose);
};

message.success = (content, timeout, onClose) => {
  return Message(content, timeout, 'success', onClose);
};

message.warn = (content, timeout, onClose) => {
  return Message(content, timeout, 'warn', onClose);
};

message.error = (content, timeout, onClose) => {
  return Message(content, timeout, 'error', onClose);
};

message.loading = (content, timeout, onClose) => {
  return Message(content, timeout, 'loading', onClose);
};

message.config = (options) => {
  if (options.timeout != undefined) {
    Default.timeout = options.timeout;
  }
};

export default message;
