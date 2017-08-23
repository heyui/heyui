import Popper from 'popper.js';
import utils from '../../utils/utils';

const DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  triggerOnce: false,
  content: '',
  disabled: false,
  trigger: 'hover focus',
  offset: 0,
  equalWidth: false
};

/**
 * Create a new Pop.js instance
 * @class Pop
 * @param {HTMLElement} reference - The reference element used to position the pop
 * @param {Object} options
 * @param {String} options.placement=bottom
 *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
 *      left(-start, -end)`
 *
 * @param {HTMLElement} reference - The DOM node used as reference of the pop (it can be a jQuery element).
 * @param {Object} options - Configuration of the pop
 * @param {HTMLElement|String|false} options.container=false - Append the pop to a specific element.
 * @param {Number|Object} options.delay=0
 *      Delay showing and hiding the pop (ms) - does not apply to manual trigger type.
 *      If a number is supplied, delay is applied to both hide/show.
 *      Object structure is: `{ show: 500, hide: 100 }`
 * @param {Boolean} options.html=false - Insert HTML into the pop. If false, the content will inserted with `innerText`.
 * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
 * @param {String} options.template='<div class="pop" role="pop"><div class="pop-arrow"></div><div class="pop-inner"></div></div>'
 *      Base HTML to used when creating the pop.
 *      The pop's `content` will be injected into the `.pop-inner` or `.pop__inner`.
 *      `.pop-arrow` or `.pop__arrow` will become the pop's arrow.
 *      The outermost wrapper element should have the `.pop` class.
 * @param {String|HTMLElement|ContentFunction} options.content='' - Default content value if `content` attribute isn't present.
 * @param {String} options.trigger='hover focus manual'
 *      How pop is triggered - click | hover | focus | manual.
 *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
 * @param {HTMLElement} options.boundariesElement
 *      The element used as boundaries for the pop. For more information refer to Popper.js'
 *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
 * @param {Number|String} options.offset=0 - Offset of the pop relative to its reference. For more information refer to Popper.js'
 *      [offset docs](https://popper.js.org/popper-documentation.html)
 * @return {Object} instance - The generated pop instance
 */
class Pop {

  constructor(reference, options) {
    options = utils.extend({}, DEFAULT_OPTIONS, options);
    this.reference = reference;

    this.options = options;

    const triggerEvents = typeof options.trigger === 'string' ? options.trigger.split(' ').filter((trigger) => {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    this.isOpen = false;

    this.arrowSelector = options.arrowSelector;
    this.innerSelector = options.innerSelector;
    this.triggerEvents = [];

    if (options.content.nodeType === 1) {
      options.content.style.display = "none";
    }
    this.setEventListeners(reference, triggerEvents, options);
  }

  toggle() {
    if (this.isOpen) {
      return this.hide();
    } else {
      return this.show();
    }
  }

  create(reference, template, content) {
    const popGenerator = window.document.createElement('div');
    popGenerator.innerHTML = template;
    const popNode = popGenerator.childNodes[0];
    const allowHtml = this.options.html;

    popNode.id = `pop_${Math.random().toString(36).substr(2, 10)}`;
    const contentNode = popGenerator.querySelector(this.innerSelector);
    if (content.nodeType === 1) {
      if (allowHtml) contentNode.appendChild(content);
      content.style.display = "block";
    } else if (utils.isFunction(content)) {
      const contentText = content.call(reference);
      if (allowHtml) {
        contentNode.innerHTML = contentText;
      } else {
        contentNode.innerText = contentText;
      }
    } else if (allowHtml) {
      contentNode.innerHTML = content;
    } else {
      contentNode.innerText = content;
    }

    popNode.addEventListener('click', (e) => {
      e.reference = reference;
    }, false);

    return popNode;
  }

  initPopNode() {
    let reference = this.reference;
    let options = this.options
    const content = options.content || reference.getAttribute('content');

    if (!content) { return this; }

    const popNode = this.create(reference, options.template, content, options.html);

    popNode.setAttribute('aria-describedby', popNode.id);
    const container = this.findContainer(options.container, reference);

    this.append(popNode, container);
    if (options.class) {
      utils.addClass(popNode, options.class);
    }

    const popperOptions = {
      placement: options.placement,
      arrowElement: this.arrowSelector,
      modifiers: {
        computeStyle: { gpuAcceleration: false }
      }
    };
    if (options.boundariesElement) {
      popperOptions.boundariesElement = options.boundariesElement;
    }
    // log(1);
    this.popperInstance = new Popper(reference, popNode, popperOptions);
    this.popNode = popNode;
    // this.popperInstance.update();
    this.popNode.setAttribute('aria-hidden', 'true');
  }

  disabled() {
    this.options.disabled = true;
  }

  enabled() {
    this.options.disabled = false;
  }

  show() {
    if (this.isOpen || this.options.disabled) { return this; }
    this.isOpen = true;
    if (this.options.events && utils.isFunction(this.options.events.show)) {
      this.options.events.show.call(null);
    }
    log(2);
    if (!this.popNode) {
      this.initPopNode();
    }
    if (!this.popNode) {
      return;
    }
    if (this.options.equalWidth) {
      this.popNode.style.width = `${this.reference.clientWidth}px`;
    }

    this.popNode.style.display = '';
    utils.addClass(this.reference, 'h-pop-trigger');
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.popNode.setAttribute('aria-hidden', 'false');
    }, 0);
    this.popperInstance.update();
    return this;
  }

  update() {
    if (this.popperInstance) {
      this.popperInstance.update();
    }
  }

  hide() {
    if (!this.popperInstance) return this;
    if (!this.isOpen) { return this; }
    this.isOpen = false;
    this.popNode.setAttribute('aria-hidden', 'true');
    utils.removeClass(this.reference, 'h-pop-trigger');
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.popNode) {
        this.popNode.style.display = 'none';
      }
    }, this.options.delay);
    return this;
  }

  dispose() {
    if (this.documentHandler) {
      document.removeEventListener('click', this.documentHandler);
    }
    if (this.popNode) {
      this.hide();
      this.popperInstance.destroy();
      this.triggerEvents.forEach(({ func, event }) => {
        this.popNode.removeEventListener(event, func);
      });
      this.triggerEvents = [];
      this.popNode.parentNode.removeChild(this.popNode);
      this.popNode = null;
    }
    return this;
  }

  findContainer(container, reference) {
    if (typeof container === 'string') {
      container = window.document.querySelector(container);
    } else if (container === false) {
      container = reference.parentNode;
    }
    return container;
  }

  append(popNode, container) {
    container.appendChild(popNode);
  }

  setEventListeners(reference, triggerEvents, options) {
    const directtriggerEvents = [];
    const oppositetriggerEvents = [];

    triggerEvents.forEach((event) => {
      switch (event) {
        case 'hover':
          directtriggerEvents.push('mouseenter');
          oppositetriggerEvents.push('mouseleave');
          break;
        case 'focus':
          directtriggerEvents.push('focus');
          oppositetriggerEvents.push('blur');
          break;
        case 'click':
          directtriggerEvents.push('click');
          if (!this.options.triggerOnce) oppositetriggerEvents.push('click');
          break;
        default:
          break;
      }
    });

    directtriggerEvents.forEach((event) => {
      const func = (evt) => {
        if (this.isOpen === true) { return; }
        evt.usedByPop = true;
        this.scheduleShow(reference, options, evt);
      };
      this.triggerEvents.push({ event, func });
      reference.addEventListener(event, func, event == 'focus');
    });

    oppositetriggerEvents.forEach((event) => {
      const func = (evt) => {
        if (evt.usedByPop === true) { return; }
        this.scheduleHide(reference, options, evt);
      };
      this.triggerEvents.push({ event, func });
      reference.addEventListener(event, func, event == 'blur');
    });

    if (options.triggerOnBody) {
      this.documentHandler = (e) => {
        if (!this.popNode || e.target.parentNode == null) return;
        if (!this.isOpen || reference.contains(e.target) || this.popNode.contains(e.target)) {
          return false;
        }
        
        let targetReference = e.reference;
        if (reference && this.popNode.contains(targetReference)) {
          return false;
        }
        this.hide();
      };
      document.addEventListener('click', this.documentHandler);
    }
  }

  scheduleShow() {
    this.show();
  }

  scheduleHide(reference, options, evt) {
    if (this.isOpen === false) { return; }
    if (!document.body.contains(this.popNode)) { return; }
    if (evt.type === 'mouseleave') {
      const isSet = this.setPopNodeEvent(evt, reference, options);
      if (isSet) { return; }
    }

    this.hide(reference, options);
  }

  setPopNodeEvent(evt, reference, options) {
    const relatedreference = evt.relatedreference || evt.relatedTarget || evt.toElement;

    const callback = (evt2) => {
      const relatedreference2 = evt2.relatedreference || evt2.toElement;

      this.popNode.removeEventListener(evt.type, callback);

      if (!reference.contains(relatedreference2)) {
        this.scheduleHide(reference, options, evt2);
      }
    };
    if (this.popNode.contains(relatedreference)) {
      this.popNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  }
}

export default Pop;
