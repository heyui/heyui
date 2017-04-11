import Notification from '../base/notification';
import utils from '../../utils/utils';

const prefixCls = 'h-message';
const iconPrefixCls = 'h-icon';

let Default = {
  timeout: 3000
}

const iconNames = {
  info: 'info',
  success: 'check',
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

function Message(content, timeout, type, onClose) {
  let param = {
    type: prefixCls,
    content: `<div><i class="${iconPrefixCls}-${iconNames[type]} ${iconColor[type]}-color"></i>${content}</div>`,
    event: {
      close: onClose
    },
    timeout
  };
  param = utils.extend({}, Default, param, true);
  if (param.timeout < 1) param.iconCloseButton = true;
  return new Notification(param);
}

function message(content, timeout, onClose) {
  if (utils.isObject(content)) {
    return Message(content.text, content.timeout, content.type || 'info', content.onClose);
  }
  return Message(content, timeout, 'info', onClose);
}

message.info = (content, timeout, onClose) => {
  return Message(content, timeout, 'info', onClose);
}

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
  if (options.top) {
    Default.top = options.top;
  }
  if (options.timeout) {
    Default.timeout = options.timeout;
  }
};

export default message;
