import Tooltip from '../plugins/tooltip';

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
      if (param.content) {
        param.content.style.display = "none";
      }
      param.html = true;
    }
    if (attr.attrs.placement) {
      param.placement = attr.attrs.placement;
    }
    if (attr.attrs.theme) {
      param.theme = attr.attrs.theme;
    }
    if (attr.attrs.delay) {
      param.delay = attr.attrs.delay;
    }
    if (attr.attrs.trigger) {
      param.trigger = attr.attrs.trigger;
    }
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
      log('inserted')
  },
  update(el, binding, vnode) {
    // TooltipControl.destroy(el);
    // TooltipControl.init(el, vnode);
    //   log('update')
  },
  unbind(el) {
    TooltipControl.destroy(el);
      log('unbind')
  }
}
