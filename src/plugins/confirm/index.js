import Notify from 'heyui/plugins/notify';
import utils from 'heyui/utils/utils';
import locale from 'heyui/locale';

const prefixCls = 'h-modal';

let Default = {
  middle: false
};

function Confirm(params = {}) {
  const { content, title, onConfirm = () => {}, onCancel = () => {} } = params;
  let param = {
    type: prefixCls,
    content: `<div><i class="h-icon-warn yellow-color" style="font-size:28px;vertical-align: -8px;"></i>&nbsp;&nbsp;${content}</div>`,
    buttons: [
      {
        name: locale.hlang('h.common.cancel'),
        type: 'cancel'
      },
      {
        type: 'ok',
        name: locale.hlang('h.common.confirm'),
        style: 'primary'
      }
    ],
    events: {
      ok: n => {
        n.close();
        onConfirm();
      },
      cancel: n => {
        n.close();
        onCancel();
      }
    },
    title,
    className: 'h-modal-comfirm h-modal-type-default',
    hasMask: true,
    closeOnMask: true,
    hasCloseIcon: false,
    timeout: 0
  };
  const notifyParam = utils.extend({}, Default, param, true);
  return Notify(notifyParam);
}

function confirm(content, title) {
  if (!title) {
    title = locale.hlang('h.confirm.title');
  }
  return Confirm(content, title);
}

confirm.config = options => {
  if (options.middle) {
    Default.middle = true;
  }
};

export default confirm;
