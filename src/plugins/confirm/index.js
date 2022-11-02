import Notify from 'heyui/plugins/notify';
import utils from 'heyui/utils/utils';
import locale from 'heyui/locale';

const prefixCls = 'h-modal';

let Default = {
  middle: false
};

function Confirm(params = {}) {
  const {
    content, title, cancelText, okText, onConfirm = () => {
    }, onCancel = () => {
    }
  } = params;
  let param = {
    type: prefixCls,
    content: `<div style="display: flex"><i class="h-icon-warn yellow-color" style="font-size:28px;vertical-align: -8px;margin-right: 8px"></i><div>${content}</div></div>`,
    buttons: [
      {
        name: cancelText || locale.hlang('h.common.cancel'),
        type: 'cancel'
      },
      {
        type: 'ok',
        name: okText || locale.hlang('h.common.confirm'),
        style: 'primary'
      }
    ],
    events: {
      ok: n => {
        const ret = onConfirm();
        if (ret instanceof Promise) {
          let cancel = n.$container.querySelector(`.${prefixCls}-footer>button[attr=cancel]`);
          let ok = n.$container.querySelector(`.${prefixCls}-footer>button[attr=ok]`);
          cancel.classList.add('h-btn-loading')
          ok.classList.add('h-btn-loading')
          ok.innerHTML = `<i class="h-icon-loading"></i> ${okText || locale.hlang('h.common.confirm')}`
          ret.then(() => n.close()).catch((err) => {
            console.error(err);
          }).finally(() => {
            cancel.classList.remove('h-btn-loading')
            ok.classList.remove('h-btn-loading')
            ok.innerText = okText || locale.hlang('h.common.confirm');
          })
        } else {
          n.close();
        }
      },
      cancel: n => {
        n.close();
        onCancel();
      }
    },
    title,
    className: 'h-modal-comfirm h-modal-type-default',
    hasMask: true,
    closeOnMask: false,
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
