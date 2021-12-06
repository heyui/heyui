import utils from 'heyui/utils/utils';
import Draggable from 'heyui/plugins/draggable';

const Default = {
  type: 'dialog',
  title: '',
  content: '',
  style: null,
  class: null,
  buttons: [],
  hasMask: false,
  closeOnMask: true,
  hasCloseIcon: false,
  timeout: 0,
  width: false,
  global: false,
  noPadding: false,
  draggable: false
};

const TYPE = {
  MODAL: 'h-modal',
  MESSAGE: 'h-message',
  NOTICE: 'h-notice'
};

const notifyCls = 'h-notify';
const notifyHasCloseCls = 'h-notify-has-close';
const notifyBodyCls = 'h-notify-body';
const notifyContainerCls = 'h-notify-container';
const notifyWrapCls = 'h-notify-wrap';
const contentWrapCls = 'h-notify-content';
const notifyCloseCls = 'h-notify-close';
const notifyMaskCls = 'h-notify-mask';
const notifyShowCls = 'h-notify-show';
const closeIcon = 'h-icon-close';

class Notify {
  constructor(orignalparam) {
    const that = this;
    this.mouseoverEvent = false;
    this.closeTimeout = false;

    let param = (this.param = utils.extend({}, Default, orignalparam, true));

    param.hasFooter = utils.isArray(param.buttons) && param.buttons.length > 0 && !param.component;

    let footerHtml = '';
    let headerHtml = '';
    let MaskHtml = '';
    let closeIconHtml = '';

    if (param.hasMask) MaskHtml = `<div class="${notifyMaskCls}"></div>`;
    if (param.hasCloseIcon) closeIconHtml = `<span class="${notifyCloseCls} ${closeIcon}"></span>`;
    if (param.title) headerHtml = `<header class="${param.type}-header">${param.title}</header>`;

    if (param.hasFooter) {
      const buttons = [];
      for (const button of param.buttons) {
        if (utils.isObject(button)) {
          let className = button.className || '';
          if (button.style) className += ` h-btn-${button.style}`;
          buttons.push(`<button type="button" class="h-btn ${className}" attr="${button.type}">${button.name}</button>`);
        }
      }
      footerHtml = `<footer class="${param.type}-footer">${buttons.join('')}</footer>`;
    }
    const elCls = param.type === TYPE.MODAL && param.hasMask ? notifyWrapCls : '';
    const html = `
    ${MaskHtml}
    <div class="${elCls}">
      <div class="${notifyContainerCls}">
        <div class="${contentWrapCls}">
          ${closeIconHtml}
          ${headerHtml}
          <div class="${notifyBodyCls}"></div>
          ${footerHtml}
        </div>
      </div>
    </div>`;

    let el = document.createElement(`div`);
    utils.addClass(el, notifyCls);
    if (param.hasMask) {
      utils.addClass(el, 'h-notify-has-mask');
    } else {
      utils.addClass(el, 'h-notify-no-mask');
    }

    if (param.className) {
      utils.addClass(el, param.className);
    }
    el.innerHTML = html;
    let $notifyBody = (this.$notifyBody = el.querySelector(`.${notifyBodyCls}`));
    let $container = (this.$container = el.querySelector(`.${notifyContainerCls}`));
    this.el = el;

    $notifyBody.innerHTML = param.content;

    if (param.hasCloseIcon) {
      utils.addClass(el, notifyHasCloseCls);
    }

    if (param.type) {
      utils.addClass(el, param.type);
    }

    if (param.height) {
      $notifyBody.style.height = `${param.height}px`;
    }
    if (param.maxheight) {
      $notifyBody.style.maxHeight = `${param.maxheight}px`;
    }

    if (param.style) {
      utils.addClass(el, param.style);
    }
    if (param.width) {
      $container.style.width = `${param.width}px`;
    }

    if (param.draggable) {
      utils.addClass(el, 'h-notify-draggable');
      let x = 0;
      let y = 0;
      let rect = null;
      let header = $container.querySelector('.h-modal-header');
      if (header) {
        this.drag = new Draggable(header, {
          start(event) {
            x = event.clientX;
            y = event.clientY;
            rect = $container.getBoundingClientRect();
            $container.style.left = `${rect.left}px`;
            $container.style.top = `${rect.top}px`;
            $container.style.transform = 'initial';
            $container.style.transition = 'none';
          },
          drag(event) {
            let offsetX = event.clientX - x;
            let offsetY = event.clientY - y;
            $container.style.left = `${rect.left + offsetX}px`;
            $container.style.top = `${rect.top + offsetY}px`;
          }
        });
      }
    }

    let parentDom = param.parent || document.body;
    if (param.type == 'h-notice' && parentDom.hasChildNodes()) {
      parentDom.insertBefore(el, parentDom.firstChild);
    } else {
      parentDom.appendChild(el);
    }
    // fix: button在focus状态，enter或者空格键都会再次触发
    let focusClicked = document.querySelector(':focus');
    if (focusClicked && param.type === TYPE.MODAL) {
      focusClicked.blur();
    }
    if (param.hasCloseIcon) {
      el.querySelector(`.${notifyCloseCls}`).onclick = function() {
        that.close();
      };
    }
    if (param.hasFooter) {
      let buttons = el.querySelectorAll(`.${notifyContainerCls} .${param.type}-footer>button`);
      for (let button of buttons) {
        button.onclick = function(event) {
          let attr = event.target.getAttribute('attr');
          if (attr) {
            if (attr == 'cancel') {
              that.close();
            }
            that.trigger(attr);
          }
        };
      }
    }

    window.setTimeout(() => {
      utils.addClass(el, notifyShowCls);
      if (param.hasMask) {
        let body = document.documentElement;
        let scrollWidth = window.innerWidth - body.clientWidth;
        body.style.overflow = 'hidden';
        body.style.paddingRight = `${scrollWidth}px`;
      }
    }, 20);

    if (param.events && utils.isFunction(param.events.$init)) {
      param.events.$init.call(null, that, $notifyBody);
    }
    if (param.timeout) {
      el.addEventListener('mouseover', () => {
        this.mouseoverEvent = true;
      });
      el.addEventListener('mouseleave', () => {
        this.mouseoverEvent = false;
        if (this.closeTimeout) {
          that.close();
        }
      });

      window.setTimeout(() => {
        this.closeTimeout = true;
        if (!this.mouseoverEvent) {
          that.close();
        }
      }, param.timeout);
    }
    if (param.closeOnMask && param.hasMask) {
      el.querySelector(`.${notifyMaskCls}`).onclick = () => {
        this.close();
      };
      let modalBody = el.querySelector(`.${notifyWrapCls}`);
      if (modalBody) {
        modalBody.onclick = event => {
          if (event.target == modalBody) {
            this.close();
          }
        };
      }
    }
    this.popstateEvent = () => {
      this.close();
    };

    window.addEventListener('popstate', this.popstateEvent);
  }

  trigger(event, ...data) {
    let param = this.param;
    if (param.events && utils.isFunction(param.events[event])) {
      param.events[event].call(null, this, ...data);
    }
  }

  close() {
    const el = this.el;

    if (this.drag) {
      this.drag.destroy();
    }

    let body = document.documentElement;
    body.style.overflow = '';
    body.style.paddingRight = '';

    this.trigger('$close');

    window.removeEventListener('popstate', this.popstateEvent);

    utils.removeClass(el, notifyShowCls);

    el.addEventListener('transitionend', event => {
      if (event.target == this.$container) {
        utils.removeDom(el);
      }
    });
    setTimeout(() => {
      utils.removeDom(el);
    }, 400);
  }
}

export default function(param) {
  return new Notify(param);
}
