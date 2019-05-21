import Pop from 'heyui/src/plugins/pop';
import utils from 'heyui/src/utils/utils';

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
    if (!param.container) {
      param.getContainer = function (el) {
        let container = el || document.body;
        while (container && container.tagName != 'BODY' && container.tagName != 'HTML' && !utils.hasClass(container, 'h-dropdown-common-container')) {
          container = container.parentNode;
        }
        return container;
      };
    }
    super(el, param);
  }
}

export default Dropdown;
