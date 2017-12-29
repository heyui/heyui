import Pop from '../pop';

class Tooltip extends Pop {
  constructor(el, param) {
    param.template = `<div class="h-tooltip" role="tooltip"><div class="h-tooltip-arrow"></div><div class="h-tooltip-inner"></div></div>`;
    param.arrowSelector = '.h-tooltip-arrow, .h-tooltip__arrow';
    param.innerSelector = '.h-tooltip-inner, .h-tooltip__inner';
    if (param.theme) {
      param.class = `h-tooltip-${param.theme}`;
    }
    param.closeOnClickBody = true;
    param.type = "tooltip";
    param.trigger = param.trigger || 'hover focus';
    super(el, param);
  }
}

export default Tooltip;
