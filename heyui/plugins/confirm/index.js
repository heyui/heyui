import Notify from '../base/notify';
import utils from '../../utils/utils';

const prefixCls = 'h-modal';

let Default = {
  middle: false
}

function Confirm(content) {
  return new Promise((resolve) => {
    let param = {
      type: prefixCls,
      content: `<div><i class="h-icon-warn yellow-color" style="font-size:28px;vertical-align: -8px;"></i>&nbsp;&nbsp;${content}</div>`,
      buttons: ['cancel', 'ok'],
      events: {
        ok: (n) => { n.close(); resolve() }
      },
      title: '提示',
      hasMask: true,
      closeOnMask: true,
      hasCloseIcon: false,
      timeout: 0
    };
    param = utils.extend({}, Default, param, true);
    return Notify(param);
  });
}

function confirm(content) {
  return Confirm(content);
}

confirm.config = (options) => {
  if (options.middle) {
    Default.middle = true;
  }
};

export default confirm;
