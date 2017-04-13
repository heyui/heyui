import Tooltip from '../plugins/tooltip';
import utils from '../utils/utils';

const TooltipControl = {
  init(el, vnode) {
    let attr = vnode.data;
    if (!attr.attrs.content && !attr.attrs['ref-el']) return;
    let param = {};
    if (attr.attrs.content) {
      param.content = attr.attrs.content;
    }
    let ref = attr.attrs['ref-el'];
    if (ref) {
      param.content = vnode.context.$el.querySelector(`[tmpl=${ref}]`);
      param.html = true;
    }
    // param.boundariesElement = document.body;
    param = utils.initParam(param, attr.attrs, ['placement', 'theme', 'delay', 'trigger']);
    param.template = `<div class="h-tooltip${param.theme ? (' h-tooltip-' + param.theme) : ''}" role="tooltip"><div class="h-tooltip-arrow"></div><div class="h-tooltip-inner"></div></div>`;
    param.arrowSelector = '.h-tooltip-arrow, .h-tooltip__arrow';
    param.innerSelector = '.h-tooltip-inner, .h-tooltip__inner';
    el.tooltip = new Tooltip(el, param);
  },
  destroy(el) {
    let attr = el;
    if (attr.tooltip) {
      attr.tooltip.dispose();
    }
  }
}

export default {
  inserted(el, binding, vnode) {
    TooltipControl.init(el, vnode);
  },
  update(el, binding, vnode) {
    // TooltipControl.destroy(el);
    // TooltipControl.init(el, vnode);
    //   log('update')
  },
  unbind(el) {
    TooltipControl.destroy(el);
  }
}
