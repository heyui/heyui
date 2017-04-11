import utils from '../../utils/utils';

const Default = {
  type: 'dialog',
  title: '',
  content: '',
  style: null,
  buttons: [],
  fixed: false,
  mate: false,
  closeOnMate: true,
  closeButtonName: '关闭',
  iconCloseButton: false,
  closeButton: true,
  hasFooter: true,
  timeout: 0,
  width: false,
  global: false,
  noPadding: false
};

const notificationCls = 'h-notification';
const notificationHasCloseCls = 'h-notification-has-close';
const notificationContentCls = 'h-notification-content';
const notificationContainerCls = 'h-notification-container';
const notificationCloseCls = 'h-notification-close';
const notificationMateCls = 'h-notification-mate';
const notificationShowCls = 'h-notification-show';
const closeIcon = 'h-icon-close';

class Notification {
  constructor(orignalparam) {
    const that = this;
    let param = this.param = utils.extend({}, Default, orignalparam, true);
    let html = `<div class="${notificationContainerCls}">`;
    if (param.iconCloseButton) html += `<span class="${notificationCloseCls} ${closeIcon}"></span>`;
    if (param.title) html += `<header>${param.title}</header>`;
    html += `<div class="${notificationContentCls}"></div>`;

    // if (param.hasFooter) {
    //   let footeHtml = '';
    //   if (param.buttons) {
    //     if (!(param.buttons instanceof Array)) {
    //       param.buttons = [param.buttons];
    //     }
    //     for (const b of param.buttons) {
    //       footeHtml += `<button class='btn purple ${b.color || ''}`;
    //       footeHtml += `' tag='${param.buttons.indexOf(b)}'>${b.name}</button>`;
    //     }
    //   }
    //   if (param.closeButton && param.closeButtonName) footeHtml += `<button class="btn white closeButton">${param.closeButtonName}</button>`;
    //   html += `<footer>${footeHtml}</footer>`;
    // } else if (param.type == TYPE.DIALOG) {
    //   param.noPadding = true;
    // }

    html += '</div>';

    let $body = document.createElement(`div`);
    utils.addClass($body, notificationCls);
    $body.innerHTML = html;
    let $content = that.$content = $body.querySelector(`.${notificationContentCls}`);
    let $container = that.$container = $body.querySelector(`.${notificationContainerCls}`);
    that.$body = $body;
    let content = param.content;
    if (content.nodeType === 1) {
      $content.appendChild(content);
    } else if (utils.isFunction(content)) {
      const contentText = content.call(this);
      $content.innerHTML = contentText;
    } else {
      $content.innerHTML = content;
    }

    if (param.mate) {
      utils.addClass($body, notificationMateCls);
    }

    if (param.iconCloseButton) {
      utils.addClass($body, notificationHasCloseCls);
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

    document.body.appendChild($body);
    // $("").append($body);
    // let openedComponent = $('.systab_component.selected');
    // if (openedComponent.size() == 0 || param.global) openedComponent = $('body');
    // openedComponent.append($body);
    if (param.iconCloseButton) {
      $body.querySelector(`.${notificationCloseCls}`).onclick = function () {
        that.close();
      }
    }
      // $('.close, footer .closeButton', $body).on('click', function () {
      //   that.close();
      // });

    // if (param.buttons) {
    //   $('footer button[tag]', $body).on('click', function () {
    //     const tag = parseInt($(this).attr('tag'), 10);
    //     if (typeof param.buttons[tag].func == 'function') {
    //       param.buttons[tag].func.call(that, $body);
    //     }
    //   });
    // }
    // $body.fadeIn();
    // $body.children('div').animate({
    //   top: `${param.top}%`,
    // }, 400);

    window.setTimeout(function () {
      utils.addClass($body, notificationShowCls);
    }, 20);

    // if (param.plugin != undefined) {
    //   that.vue = new Vue({
    //     el: $content.get(0),
    //     template: `<div><plugin v-ref:${param.plugin.name}></plugin></div>`,
    //     data() {
    //       return $.extend({
    //         dialog: that,
    //       }, param.plugin.data, true)
    //     },
    //     methods: param.plugin.methods,
    //     components: {
    //       plugin: param.plugin.component,
    //     },
    //   })
    // }
    if (param.events && utils.isFunction(param.events.init)) {
      param.events.init.call(that, $content);
    }
    if (param.timeout) {
      window.setTimeout(function () {
        that.close();
      }, param.timeout);
    }
    if (param.closeOnMate) {
      $body.onclick = (event) => {
        if (event.target == event.currentTarget) {
          this.close();
        }
      }
    }
  }

  close() {
    let that = this;
    let param = this.param;
    const $body = this.$body;
    if (this.vm) {
      that.vm.$destroy();
    }

    if (param.events && utils.isFunction(param.events.close)) {
      param.events.close.call(that, that.$content);
    }
    utils.removeClass($body, notificationShowCls);
    $body.addEventListener("transitionend", () => {
      if ($body) {
        utils.removeDom($body);
      }
    });
  }
}

// const Tip = function() {
//   Tips(TYPE.TIP, ...arguments);
// }
// const Alert = function(content, time = 1500) {
//   content = `<i class='icon-alert'></i>` + content;
//   Tips(TYPE.ALERT, content, time);
// }

// const Color = {};
// Color.RED = 'red';
// Color.WHITE = 'white';
// Color.BLACK = 'black';
// Color.YELLOW = 'yellow';

// const Message = function(content, timeout, style) {
//   Tips(TYPE.MESSAGE, content, timeout, style, {
//     top: 0,
//   });
// }

// let Tips = function() {
//   if (arguments.length == 1) {
//     console.error('Tip方法参数错误', arguments);
//     return false;
//   }

//   let [type, content, timeout, style, otherParam] = arguments;

//   if (utils.isString(timeout)) {
//     const _s = style;
//     style = timeout;
//     timeout = _s;
//   }
//   style = style || '';
//   if (timeout === undefined) {
//     timeout = DEFAULT_timeout;
//   }

//   const param = {
//     type,
//     style,
//     timeout,
//     content,
//     width: null,
//     global: true,
//     hasFooter: false,
//     mate: false,
//     top: 10,
//     iconCloseButton: true
//   };
//   if (otherParam != undefined) {
//     $.extend(param, otherParam);
//   }

//   return new _Dialog(param);
// }

// const Confirm = function(content, func, calcelFunc) {
//   content = content || '';
//   func = func || emptyFunc;
//   content = `<i class='icon-alert'></i>` + content;
//   return new _Dialog({
//     type: TYPE.CONFIRM,
//     content,
//     iconCloseButton: false,
//     closeButtonName: '取消',
//     global: true,
//     width: 360,
//     buttons: [{
//       name: '确定',
//       func() {
//         func.call(this, ...arguments);
//         this.close();
//       },
//     }],
//     events: {
//       close() {
//         if (typeof calcelFunc == 'function') {
//           calcelFunc();
//         }
//       },
//     },
//   });
// }

export default function (param) {
  return new Notification(param);
}
