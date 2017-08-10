import Tooltip from '../plugins/tooltip';
import utils from '../utils/utils';

export default {
  inserted(el, binding, vnode) {
    let attr = vnode.data;
    if (!attr.attrs.content && !attr.attrs['ref-el']) return;
    let param = {};
    if (attr.attrs.content) {
      param.content = attr.attrs.content;
    }
    let ref = attr.attrs['ref-el'];
    let refNode = vnode.context.$el.querySelector(`[tmpl=${ref}]`);
    if (refNode) {
      param.content = refNode;
      param.html = true;
    } else if (param.content) {
      param.content = `<div class="h-tooltip-inner-content">${param.content}</div>`;
      param.html = true;
    } else {
      param.content = `<div class="h-tooltip-inner-content">${el.innerText}</div>`;
      param.html = true;
    }
    param.container = document.body;
    param = utils.initParam(param, attr.attrs, ['placement', 'theme', 'delay', 'trigger']);
    el.tooltip = new Tooltip(el, param);
  },
  unbind(el) {
    let attr = el;
    if (attr.tooltip) {
      attr.tooltip.dispose();
    }
  }
}
