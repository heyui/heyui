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

    options.template = `<div class="h-tooltip${options.theme ? (' h-tooltip-' + options.theme) : ''}" role="tooltip"><div class="h-tooltip-arrow"></div><div class="h-tooltip-inner"></div></div>`;
    this.options = options;

    const events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter((trigger) => {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    this._isOpen = false;

    this._setEventListeners(reference, events, options);

    this.arrowSelector = '.h-tooltip-arrow, .h-tooltip__arrow';
    this.innerSelector = '.h-tooltip-inner, .h-tooltip__inner';
    this._events = [];
  }

  show() {
    this._show(this.reference, this.options);
  }

  hide() {
    this._hide();
  }

  dispose() {
    this._dispose();
  }
  toggle() {
      if (this._isOpen) {
        return this.hide();
      } else {
        return this.show();
      }
    }
    // show = () => this._show(this.reference, this.options);

  // hide = () => this._hide();
  // dispose = () => this._dispose();
  // toggle = () => {
  //   if (this._isOpen) {
  //     return this.hide();
  //   } else {
  //     return this.show();
  //   }
  // }

  _create(reference, template, content, allowHtml) {
    const tooltipGenerator = window.document.createElement('div');
    tooltipGenerator.innerHTML = template;
    const tooltipNode = tooltipGenerator.childNodes[0];

    tooltipNode.id = `tooltip_${Math.random().toString(36).substr(2, 10)}`;

    tooltipNode.setAttribute('aria-hidden', 'false');

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

  _show(reference, options) {
    if (this._isOpen) { return this; }
    this._isOpen = true;

    if (this._tooltipNode) {
      this._tooltipNode.style.display = '';
      this._tooltipNode.setAttribute('aria-hidden', 'false');
      this.popperInstance.update();
      return this;
    }

    const content = reference.getAttribute('content') || options.content;

    if (!content) { return this; }

    const tooltipNode = this._create(reference, options.template, content, options.html);

    tooltipNode.setAttribute('aria-describedby', tooltipNode.id);

    const container = this._findContainer(options.container, reference);

    this._append(tooltipNode, container);

    const popperOptions = {
      placement: options.placement,
      arrowElement: this.arrowSelector,
    };

    if (options.boundariesElement) {
      popperOptions.boundariesElement = options.boundariesElement;
    }

    this.popperInstance = new Popper(reference, tooltipNode, popperOptions);

    this._tooltipNode = tooltipNode;

    return this;
  }


  _hide() {
    if (!this._isOpen) { return this; }

    this._isOpen = false;
    this._tooltipNode.style.display = 'none';
    this._tooltipNode.setAttribute('aria-hidden', 'true');

    return this;
  }

  _dispose() {
    if (this._tooltipNode) {
      this._hide();

      this.popperInstance.destroy();

      this._events.forEach(({ func, event }) => {
        this._tooltipNode.removeEventListener(event, func);
      });
      this._events = [];
      this._tooltipNode.parentNode.removeChild(this._tooltipNode);
      this._tooltipNode = null;
    }
    return this;
  }

  _findContainer(container, reference) {
    if (typeof container === 'string') {
      container = window.document.querySelector(container);
    } else if (container === false) {
      container = reference.parentNode;
    }
    return container;
  }
  _append(tooltipNode, container) {
    container.appendChild(tooltipNode);
  }

  _setEventListeners(reference, events, options) {
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
      }
    });

    directEvents.forEach((event) => {
      const func = (evt) => {
        if (this._isOpen === true) { return; }
        evt.usedByTooltip = true;
        this._scheduleShow(reference, options.delay, options, evt);
      };
      this._events.push({ event, func });
      reference.addEventListener(event, func);
    });

    oppositeEvents.forEach((event) => {
      const func = (evt) => {
        if (evt.usedByTooltip === true) { return; }
        this._scheduleHide(reference, options.delay, options, evt);
      };
      this._events.push({ event, func });
      reference.addEventListener(event, func);
    });
  }

  _scheduleShow(reference, delay, options) {
    const computedDelay = (delay && delay.show) || delay || 0;
    window.setTimeout(() => this._show(reference, options), computedDelay);
  }

  _scheduleHide(reference, delay, options, evt) {
    const computedDelay = (delay && delay.hide) || delay || 0;
    window.setTimeout(() => {
      if (this._isOpen === false) { return; }
      if (!document.body.contains(this._tooltipNode)) { return; }
      if (evt.type === 'mouseleave') {
        const isSet = this._setTooltipNodeEvent(evt, reference, delay, options);
        if (isSet) { return; }
      }

      this._hide(reference, options);
    }, computedDelay);
  }

  _setTooltipNodeEvent(evt, reference, delay, options) {
    const relatedreference = evt.relatedreference || evt.toElement;

    const callback = (evt2) => {
      const relatedreference2 = evt2.relatedreference || evt2.toElement;

      this._tooltipNode.removeEventListener(evt.type, callback);

      if (!reference.contains(relatedreference2)) {
        this._scheduleHide(reference, options.delay, options, evt2);
      }
    };

    if (this._tooltipNode.contains(relatedreference)) {
      this._tooltipNode.addEventListener(evt.type, callback);
      return true;
    }

    return false;
  }
}

export default Tooltip;
