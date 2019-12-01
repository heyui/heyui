import Pop from 'heyui/src/plugins/pop';
import utils from 'heyui/src/utils/utils';

class Tooltip extends Pop {
  constructor(el, param) {
    param.template = `<div class="h-tooltip" role="tooltip"><div class="h-tooltip-arrow"></div><div class="h-tooltip-inner"></div></div>`;
    param.arrowSelector = '.h-tooltip-arrow';
    param.innerSelector = '.h-tooltip-inner';
    let classes = [];
    if (param.theme) {
      classes.push(`h-tooltip-${param.theme}`);
    }
    if (param.editable) {
      classes.push(`h-tooltip-editable`);
    }
    param.class = classes.join(' ');
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
