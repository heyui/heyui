import Notify from '../base/notify';
import utils from '../../utils/utils';

const prefixCls = 'h-modal';

let Default = {
  middle: false,
}

function Modal(originalParam) {
  let param = utils.extend({ type: prefixCls, hasMask: true, closeOnMask: true, buttons: ['cancel'] }, Default, originalParam, true);
  return Notify(param);
}

function modal(param) {
  return new Modal(param);
}

modal.config = (options) => {
  if (options.middle) {
    Default.middle = options.middle;
  }
};

export default modal;
