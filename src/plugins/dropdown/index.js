import Pop from '../pop';
import utils from '../../utils/utils';

const Default = {
  trigger: 'click',
  closeOnClickBody: true,
  html: true,
  placement: 'bottom-start',
  template: `<div role="select" class="h-dropdown"><div class="h-dropdown-inner"></div></div>`,
  innerSelector: '.h-dropdown-inner',
  preventOverflow: true,
  type: 'dropdown',
  delay: 0,
  offset: '0, 1'
};

class Dropdown extends Pop {
  constructor(el, param) {
    param = utils.extend({}, Default, {
    }, param);
    let container = document.body;
    if (!param.container) {
      container = el || document.body;
      while (container && container.tagName != 'BODY' && !utils.hasClass(container, 'h-dropdown-common-container')) {
        container = container.parentNode;
      }
      param.container = container;
    }
    super(el, param);
  }
}

export default Dropdown;
