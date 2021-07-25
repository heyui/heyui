import Tooltip from 'heyui/plugins/tooltip';
import utils from 'heyui/utils/utils';
import { nextTick } from 'vue';

const getContent = function (el, vnode) {
  let param = {};
  let attrs = vnode.props || {};
  if (attrs.content === '') return false;
  if (attrs.content) {
    param.content = attrs.content;
  }
  if (attrs.className) {
    param.className = attrs.className;
  }
  if (attrs.maxWidth) {
    param.maxWidth = attrs.maxWidth;
  }

  if (!vnode.el.querySelector) {
    return false;
  }
  if (param.content) {
    param.content = `<div class="h-tooltip-inner-content">${param.content}</div>`;
    param.html = true;
  } else if (el.innerText) {
    param.content = `<div class="h-tooltip-inner-content">${el.innerText}</div>`;
    param.html = true;
  }
  return param;
};

const init = function (el, binding, vnode) {
  if (binding.value === false) {
    return;
  }
  let param = getContent(el, vnode);
  if (param == false) return;
  let attrs = vnode.props || {};
  param.container = document.body;
  param = utils.initParam(param, attrs, ['placement', 'theme', 'delay', 'trigger']);
  el.tooltip = new Tooltip(el, param);
};
export default {
  mounted(el, binding, vnode) {
    init(el, binding, vnode);
  },
  beforeUpdate(el, binding, vnode) {
    if (el.tooltip) {
      nextTick(() => {
        if (binding.value === false) {
          el.tooltip.destory();
          el.tooltip = null;
          return;
        }
        let param = getContent(el, vnode);
        if (param == false) {
          el.tooltip.destory();
        } else {
          el.tooltip.updateTemplate(param.content, param.html);
        }
      });
    } else {
      init(el, binding, vnode);
    }
  },
  beforeUnmount(el) {
    if (el.tooltip) {
      el.tooltip.destory();
      delete el.tooltip;
    }
  }
};
