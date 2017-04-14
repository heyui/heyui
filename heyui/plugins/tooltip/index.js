import Popper from 'popper.js';
import utils from '../../utils/utils';

const DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  content: '',
  trigger: 'hover focus',
  offset: 0,
  equalWidth: false
};

/**
 * Create a new Tooltip.js instance
 * @class Tooltip
 * @param {HTMLElement} reference - The reference element used to position the tooltip
 * @param {Object} options
 * @param {String} options.placement=bottom
 *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
 *      left(-start, -end)`
 *
 * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
 * @param {Object} options - Configuration of the tooltip
 * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
 * @param {Number|Object} options.delay=0
 *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
 *      If a number is supplied, delay is applied to both hide/show.
 *      Object structure is: `{ show: 500, hide: 100 }`
 * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
 * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
 * @param {String} options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
 *      Base HTML to used when creating the tooltip.
 *      The tooltip's `content` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
 *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
 *      The outermost wrapper element should have the `.tooltip` class.
 * @param {String|HTMLElement|ContentFunction} options.content='' - Default content value if `content` attribute isn't present.
 * @param {String} options.trigger='hover focus'
 *      How tooltip is triggered - click | hover | focus | manual.
 *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
 * @param {HTMLElement} options.boundariesElement
 *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
 *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
 * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
 *      [offset docs](https://popper.js.org/popper-documentation.html)
 * @return {Object} instance - The generated tooltip instance
 */
class Tooltip {

  constructor(reference, options) {
    options = utils.extend({}, DEFAULT_OPTIONS, options);

    // reference.jquery && (reference = reference[0]);
    this.reference = reference;

    // options.template = 
    this.options = options;

    const events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter((trigger) => {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    this.isOpen = false;

    this.arrowSelector = options.arrowSelector;
    this.innerSelector = options.innerSelector;
    this.events = [];

    if (options.content.nodeType === 1) {
      options.content.style.display = "none";
    }

    // this.tooltipNode.style.display = 'none';
    // this.popperInstance.update();
    // this.hide();
    // this.tooltipNode.setAttribute('aria-hidden', 'true');
    this.setEventListeners(reference, events, options);
  }

  // show() {
  //   this.show(this.reference, this.options);
  // }

  toggle() {
    if (this.isOpen) {
      return this.hide();
    } else {
      return this.show();
    }
  }
    // show = () => this.show(this.reference, this.options);

  // hide = () => this.hide();
  // dispose = () => this.dispose();
  // toggle = () => {
  //   if (this.isOpen) {
  //     return this.hide();
  //   } else {
  //     return this.show();
  //   }
  // }

  create(reference, template, content, allowHtml) {
    const tooltipGenerator = window.document.createElement('div');
    tooltipGenerator.innerHTML = template;
    const tooltipNode = tooltipGenerator.childNodes[0];

    tooltipNode.id = `tooltip_${Math.random().toString(36).substr(2, 10)}`;
    const contentNode = tooltipGenerator.querySelector(this.innerSelector);
    if (content.nodeType === 1) {
      allowHtml && contentNode.appendChild(content);
      content.style.display = "block";
    } else if (Popper.Utils.isFunction(content)) {
      const contentText = content.call(reference);
      allowHtml ? (contentNode.innerHTML = contentText) : (contentNode.innerText = contentText);
    } else {
      allowHtml ? (contentNode.innerHTML = content) : (contentNode.innerText = content);
    }

    return tooltipNode;
  }

  initTooltipNode() {
    let reference = this.reference;
    let options = this.options
    const content = reference.getAttribute('content') || options.content;

    if (!content) { return this; }

    const tooltipNode = this.create(reference, options.template, content, options.html);

    tooltipNode.setAttribute('aria-describedby', tooltipNode.id);

    const container = this.findContainer(options.container, reference);

    this.append(tooltipNode, container);

    const popperOptions = {
      placement: options.placement,
      arrowElement: this.arrowSelector,
    };
    if (options.boundariesElement) {
      popperOptions.boundariesElement = options.boundariesElement;
    }
    this.popperInstance = new Popper(reference, tooltipNode, popperOptions);
    this.tooltipNode = tooltipNode;
  }

  show() {
    if (this.isOpen) { return this; }
    this.isOpen = true;

    if (!this.tooltipNode) {
      this.initTooltipNode();
      this.tooltipNode.setAttribute('aria-hidden', 'false');
    }
    if (this.options.equalWidth) {
      this.tooltipNode.style.width = `${this.reference.clientWidth}px`;
    }

    this.tooltipNode.style.display = '';
    setTimeout(() => {
      this.tooltipNode.setAttribute('aria-hidden', 'false');
    }, 0);
    this.popperInstance.update();
    return this;
  }


  hide() {
    if (!this.isOpen) { return this; }

    this.isOpen = false;
    this.tooltipNode.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      this.tooltipNode.style.display = 'none';
    }, this.options.delay);
    return this;
  }

  dispose() {
    if (this.documentHandler) {
      document.removeEventListener('click', this.documentHandler);
    }
    if (this.tooltipNode) {
      this.hide();

      this.popperInstance.destroy();

      this.events.forEach(({ func, event }) => {
        this.tooltipNode.removeEventListener(event, func);
      });
      this.events = [];
      this.tooltipNode.parentNode.removeChild(this.tooltipNode);
      this.tooltipNode = null;
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
  append(tooltipNode, container) {
    container.appendChild(tooltipNode);
  }

  setEventListeners(reference, events, options) {
    const directEvents = [];
    const oppositeEvents = [];

    events.forEach((event) => {
      switch (event) {
        case 'hover':
          directEvents.push('mouseenter');
          oppositeEvents.push('mouseleave');
        case 'focus':
          directEvents.push('focus');
          oppositeEvents.push('blur');
        case 'click':
          directEvents.push('click');
          oppositeEvents.push('click');
        default:
          break;
      }
    });

    directEvents.forEach((event) => {
      const func = (evt) => {
        if (this.isOpen === true) { return; }
        evt.usedByTooltip = true;
        this.scheduleShow(reference, options, evt);
      };
      this.events.push({ event, func });
      reference.addEventListener(event, func);
    });

    oppositeEvents.forEach((event) => {
      const func = (evt) => {
        if (evt.usedByTooltip === true) { return; }
        this.scheduleHide(reference, options, evt);
      };
      this.events.push({ event, func });
      reference.addEventListener(event, func);
    });

    if (options.triggerOnBody) {
      this.documentHandler = (e) => {
        if (!this.tooltipNode) return;
        if (reference.contains(e.target) || this.tooltipNode.contains(e.target)) {
          return false;
        }
        this.hide();
      };
      document.addEventListener('click', this.documentHandler);
    }
  }

  scheduleShow() {
    // const computedDelay = (delay && delay.show) || delay || 0;
    this.show();
  }

  scheduleHide(reference, options, evt) {
    // const computedDelay = (delay && delay.hide) || delay || 0;
    if (this.isOpen === false) { return; }
    if (!document.body.contains(this.tooltipNode)) { return; }
    if (evt.type === 'mouseleave') {
      const isSet = this.setTooltipNodeEvent(evt, reference, options);
      if (isSet) { return; }
    }

    this.hide(reference, options);
  }

  setTooltipNodeEvent(evt, reference, options) {
    const relatedreference = evt.relatedreference || evt.toElement;

    const callback = (evt2) => {
      const relatedreference2 = evt2.relatedreference || evt2.toElement;

      this.tooltipNode.removeEventListener(evt.type, callback);

      if (!reference.contains(relatedreference2)) {
        this.scheduleHide(reference, options, evt2);
      }
    };

    if (this.tooltipNode.contains(relatedreference)) {
      this.tooltipNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  }
}

export default Tooltip;
