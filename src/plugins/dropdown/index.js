import Pop from '../pop';
import utils from '../../utils/utils';


const Default = {
  trigger: 'click',
  triggerOnBody: true,
  html: true,
  placement: 'bottom-start',
  template: `<div role="select" class="h-dropdown"><div class="h-dropdown-arrow"></div><div class="h-dropdown-inner"></div></div>`,
  arrowSelector: '.h-dropdown-arrow, .h-dropdown__arrow',
  innerSelector: '.h-dropdown-inner, .h-dropdown__inner',
  // preventOverflow: {
  //   enabled: false
  // },
  delay: 300,
}

class Dropdown extends Pop {
  constructor(el, param) {
    let container = document.body;
    // if (!param.container) {
    //   container = el;
    //   while (container.tagName != 'BODY' && !utils.hasClass(container, 'h-dropdown-common-container')) {
    //     container = container.parentNode;
    //   }
    // }
    param = utils.extend({}, Default, {
      container
    }, param);
    super(el, param);
  }
}

export default Dropdown;
