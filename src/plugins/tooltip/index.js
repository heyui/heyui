import Pop from '../pop';
import utils from '../../utils/utils';

class Tooltip extends Pop {
  constructor(el, param) {
    param.template = `<div class="h-tooltip" role="tooltip"><div class="h-tooltip-arrow"></div><div class="h-tooltip-inner"></div></div>`;
    param.arrowSelector = '.h-tooltip-arrow';
    param.innerSelector = '.h-tooltip-inner';
    if (param.theme) {
      param.class = `h-tooltip-${param.theme}`;
    }
    param.closeOnClickBody = true;
    param.type = 'tooltip';
    param.trigger = param.trigger || 'hover focus';
    super(el, param);
  }

  updateTemplate(content, html) {
    utils.extend(this.options, { content, html });
    this.updateContent(content, html);
  }
}

export default Tooltip;
