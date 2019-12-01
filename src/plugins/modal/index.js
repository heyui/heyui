import Notify from 'heyui/src/plugins/notify';
import utils from 'heyui/src/utils/utils';
import config from 'heyui/src/utils/config';

const prefixCls = 'h-modal';
const hasDivider = config.getOption('modal', 'hasDivider');

let Vue = null;

let Default = {
  middle: false,
  hasDivider,
  fullScreen: false,
  className: ''
};

function Modal(originalParam) {
  let cls = prefixCls;
  let param = utils.extend({ hasMask: true, closeOnMask: true, buttons: ['cancel'] }, Default, originalParam, true);

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

  param.Vue = Vue;
  return Notify(param);
}

function modal(param) {
  if (this) {
    if (this.$router) {
      param.$router = this.$router;
    }
    if (this.$i18n) {
      param.$i18n = this.$i18n;
    }
    if (this.$store) {
      param.$store = this.$store;
    }
  }
  return new Modal(param);
}

modal.config = (options) => {
  if (options.middle) {
    Default.middle = options.middle;
  }
};

export default modal;
