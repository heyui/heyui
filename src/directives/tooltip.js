import Tooltip from 'heyui/src/plugins/tooltip';
import utils from 'heyui/src/utils/utils';

const getContent = function (el, vnode) {
  let param = {};
  let attrs = vnode.data.attrs || {};
  if (attrs.content === '') return false;
  if (attrs.content) {
    param.content = attrs.content;
  }
  if (attrs.className) {
    param.className = attrs.className;
  }
  let ref = attrs['ref-el'];
  if (!vnode.context.$el.querySelector) {
    return false;
  }
  let refNode = vnode.context.$el.querySelector(`[tmpl=${ref}]`);
  if (refNode) {
    param.content = refNode;
    param.html = true;
  } else if (param.content) {
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
  let attrs = vnode.data.attrs || {};
  param.container = document.body;
  param = utils.initParam(param, attrs, ['placement', 'theme', 'delay', 'trigger']);
  el.tooltip = new Tooltip(el, param);
};
export default {
  inserted(el, binding, vnode) {
    init(el, binding, vnode);
  },
  update(el, binding, vnode) {
    if (el.tooltip) {
      vnode.context.$nextTick(() => {
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
  unbind(el) {
    if (el.tooltip) {
      el.tooltip.destory();
      delete el.tooltip;
    }
  }
};
