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
  delay: 300,
}

class Dropdown extends Pop {
  constructor(el, param) {
    param = utils.extend({}, param, Default);
    super(el, param);
  }
}

export default Dropdown;
