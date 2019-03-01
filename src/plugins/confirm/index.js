import Notify from '../notify';
import utils from '../../utils/utils';
import locale from '../../locale';

const prefixCls = 'h-modal';

let Default = {
  middle: false
};

function Confirm(content, title) {
  return new Promise((resolve, reject) => {
    let param = {
      type: prefixCls,
      content: `<div><i class="h-icon-warn yellow-color" style="font-size:28px;vertical-align: -8px;"></i>&nbsp;&nbsp;${content}</div>`,
      buttons: ['cancel', 'ok'],
      events: {
        ok: (n) => {
          n.close();
          resolve();
        },
        cancel: (n) => {
          n.close();
          reject(new Error('cancel'));
        }
      },
      title,
      className: 'h-modal-comfirm h-modal-type-default',
      hasMask: true,
      closeOnMask: true,
      hasCloseIcon: false,
      timeout: 0
    };
    param = utils.extend({}, Default, param, true);
    return Notify(param);
  });
}

function confirm(content, title) {
  if (!title) {
    title = locale.t('h.confirm.title');
  }
  return Confirm(content, title);
}

confirm.config = (options) => {
  if (options.middle) {
    Default.middle = true;
  }
};

export default confirm;
