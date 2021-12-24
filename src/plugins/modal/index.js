import Notify from 'heyui/plugins/notify';
import utils from 'heyui/utils/utils';
import config from 'heyui/utils/config';
import locale from 'heyui/locale';

const prefixCls = 'h-modal';
const hasDivider = config.getOption('modal', 'hasDivider');

let Default = {
  middle: false,
  hasDivider,
  fullScreen: false,
  className: ''
};

function Modal(originalParam) {
  let cls = prefixCls;
  let param = utils.extend(
    {
      hasMask: true,
      closeOnMask: true,
      buttons: [
        {
          type: 'cancel',
          name: locale.hlang('h.common.cancel')
        }
      ]
    },
    Default,
    originalParam,
    true
  );

  if (originalParam.hasDivider || Default.hasDivider) {
    param.className += ` h-modal-has-divider`;
  }

  if (param.fullScreen) {
    param.className += ` h-modal-full-screen`;
  }

  if (param.middle) {
    param.className += ` h-modal-container-center`;
  }

  if (param.transparent) {
    param.className += ` h-modal-transparent`;
  }
  if (param.type) {
    param.className += ` h-modal-type-${param.type}`;
  } else {
    param.className += ' h-modal-type-default';
  }
  param.type = cls;

  return Notify(param);
}

function modal(param) {
  return new Modal(param);
}

modal.config = options => {
  if (options.middle) {
    Default.middle = options.middle;
  }
};

export default modal;
