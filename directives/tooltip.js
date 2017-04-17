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
    if (ref) {
      param.content = vnode.context.$el.querySelector(`[tmpl=${ref}]`);
      param.html = true;
    }
    // param.boundariesElement = document.body;
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
