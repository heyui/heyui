import utils from '../../utils/utils';
import locale from '../../locale';

const Default = {
  type: 'dialog',
  title: '',
  content: '',
  style: null,
  class: null,
  buttons: [],
  middle: false,
  hasMask: false,
  closeOnMask: true,
  hasCloseIcon: false,
  timeout: 0,
  width: false,
  global: false,
  noPadding: false
};

const TYPE = {
  MODAL: 'h-modal',
  MESSAGE: 'h-message',
  NOTICE: 'h-notice',
}

const notifyCls = 'h-notify';
const notifyHasCloseCls = 'h-notify-has-close';
const notifyContentCls = 'h-notify-content';
const notifyContainerCls = 'h-notify-container';
const notifyBodyCls = 'h-notify-body';
const notifyCloseCls = 'h-notify-close';
const notifyMaskCls = 'h-notify-mask';
const notifyShowCls = 'h-notify-show';
const closeIcon = 'h-icon-close';

class Notify {
  constructor(orignalparam) {
    const that = this;
    this.mouseOver = false;
    this.closeTimeout = false;
    let param = this.param = utils.extend({}, Default, orignalparam, true);
    let html = '';
    if (param.hasMask) {
      html += `<div class="${notifyMaskCls}"></div>`;
    }
    if (param.type === TYPE.MODAL && param.hasMask) {
      html += `<div class="${notifyBodyCls}">`;
    }
    html += `<div class="${notifyContainerCls}">`;
    if (param.hasCloseIcon) html += `<span class="${notifyCloseCls} ${closeIcon}"></span>`;
    if (param.title) html += `<header class="${param.type}-header">${param.title}</header>`;
    html += `<div class="${notifyContentCls}"></div>`;
    param.hasFooter = utils.isArray(param.buttons) && param.buttons.length > 0 && !param.component;
    if (param.hasFooter) {
      let footeHtml = '';
      for (const b of param.buttons) {
        let name = '';
        let attr = '';
        let color = '';
        if (b == 'cancel') {
          name = b.name || locale.t('h.common.cancel');
          attr = b;
        } else if (b == 'ok') {
          name = b.name || locale.t('h.common.confirm');
          attr = 'ok';
          color = 'primary';
        } else if (utils.isObject(b)) {
          attr = b.type;
          name = b.name;
          color = b.color;
        }
        if (color) color = `h-btn-${color}`;
        footeHtml += `<button class="h-btn ${color}" attr="${attr}" >${name}</button>`;
      }
      html += `<footer class="${param.type}-footer">${footeHtml}</footer>`;
    }
    if (param.type === TYPE.MODAL) {
      html += `</div>`;
    }

    html += '</div>';
    let $body = document.createElement(`div`);
    utils.addClass($body, notifyCls);
    if (param.hasMask) {
      utils.addClass($body, 'h-notify-has-mask');
    } else {
      utils.addClass($body, 'h-notify-no-mask');
    }
    // if (param.type == 'h-modal') {
    //   utils.addClass($body, 'h-dropdown-common-container');
    // }
    if (param.fullScreen) {
      utils.addClass($body, 'h-modal-full-screen');
    }
    if (param.class) {
      utils.addClass($body, param.class);
    }
    if (param.className) {
      utils.addClass($body, param.className);
    }
    $body.innerHTML = html;
    let $content = this.$content = $body.querySelector(`.${notifyContentCls}`);
    let $container = this.$container = $body.querySelector(`.${notifyContainerCls}`);
    if (param.middle) {
      utils.addClass($container, `${notifyCls}-container-center`);
    }
    this.$body = $body;

    let content = param.content;
    if (content.nodeType === 1) {
      $content.appendChild(content);
    } else if (utils.isFunction(content)) {
      const contentText = content.call(this);
      $content.innerHTML = contentText;
    } else {
      $content.innerHTML = content;
    }

    if (param.component != undefined && param.Vue) {
      this.vue = new param.Vue({
        el: $content,
        i18n: param.$i18n,
        router: param.$router,
        // template: `<div><plugin @event='trigger' :param="propsData" @close="close"></plugin></div>`,
        render(createElement) {
          return createElement(
            'div', {}, [createElement('plugin', {
              props: {
                param: this.propsData,
                params: this.propsData
              },
              on: {
                event: this.trigger,
                close: this.close
              }
            })]
          )
        },
        data() {
          return {
            propsData: param.component.data,
            modal: that
          }
        },
        methods: {
          trigger(name, data) {
            that.trigger(name, data);
          },
          close() {
            that.close();
          }
        },
        components: {
          plugin: param.component.vue,
        },
      })
    }

    if (param.hasCloseIcon) {
      utils.addClass($body, notifyHasCloseCls);
    }

    if (param.type) {
      utils.addClass($body, param.type);
    }

    if (param.width) {
      $container.style.width = `${param.width}px`;
    }
    if (param.height) {
      $content.style.height = `${param.height}px`;
    }
    if (param.maxheight) {
      $content.style.maxHeight = `${param.maxheight}px`;
    }
    if (param.style) {
      utils.addClass($body, param.style);
    }

    let parentDom = param.parent || document.body;
    if (param.type == 'h-notice' && parentDom.hasChildNodes()) {
      parentDom.insertBefore($body, parentDom.firstChild);
    } else {
      parentDom.appendChild($body);
    }
    //fix: button在focus状态，enter或者空格键都会再次触发
    let focusClicked = document.querySelector(':focus');
    if (focusClicked && param.type === TYPE.MODAL) {
      focusClicked.blur();
    }
    if (param.hasCloseIcon) {
      $body.querySelector(`.${notifyCloseCls}`).onclick = function () {
        that.close();
      }
    }
    if (param.hasFooter) {
      let buttons = $body.querySelectorAll(`.${notifyContainerCls}>footer>button`)
      for (let button of buttons) {
        button.onclick = function (event) {
          let attr = event.target.getAttribute('attr');
          if (attr) {
            if (attr == 'cancel') {
              that.close();
            }
            that.trigger(attr);
          }
        }
      }
    }

    window.setTimeout(() => {
      utils.addClass($body, notifyShowCls);
      if (param.hasMask) {
        let body = document.documentElement;
        let scrollWidth = window.innerWidth - body.clientWidth;
        body.style.overflow = 'hidden';
        body.style.paddingRight = `${scrollWidth}px`;
      }
    }, 20);

    if (param.events && utils.isFunction(param.events.$init)) {
      param.events.$init.call(null, that, $content);
    }
    if (param.timeout) {
      $body.addEventListener('mouseover', () => {
        this.mouseOver = true;
      });
      $body.addEventListener('mouseleave', () => {
        this.mouseOver = false;
        if (this.closeTimeout) {
          that.close();
        }
      });

      window.setTimeout(() => {
        this.closeTimeout = true;
        if (!this.mouseOver) {
          that.close();
        }
      }, param.timeout);
    }
    if (param.closeOnMask && param.hasMask) {
      $body.querySelector(`.${notifyMaskCls}`).onclick = () => {
        this.close();
      }
      let modalBody = $body.querySelector(`.${notifyBodyCls}`);
      if (modalBody) {
        modalBody.onclick = (event) => {
          if (event.target == modalBody) {
            this.close();
          }
        }
      }
    }
  }

  trigger(event, data) {
    let param = this.param;
    if (param.events && utils.isFunction(param.events[event])) {
      param.events[event].call(null, this, data);
    }
  }

  close() {
    let that = this;
    const $body = this.$body;
    if (this.vm) {
      that.vm.$destroy();
    }

    let body = document.documentElement;
    body.style.overflow = '';
    body.style.paddingRight = '';

    this.trigger('$close');

    utils.removeClass($body, notifyShowCls);

    $body.addEventListener("transitionend", (event) => {
      if ((event.propertyName == 'opacity' || event.propertyName == 'top' || event.propertyName == 'right') && $body) {
        utils.removeDom($body);
      }
    });
    setTimeout(() => {
      utils.removeDom($body);
    }, 4000);
  }
}

export default function (param) {
  return new Notify(param);
}
