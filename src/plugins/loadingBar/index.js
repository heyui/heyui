import utils from '../../utils/utils';

const prefixCls = 'h-loadingbar';

class LoadingBar {
  constructor() {
    this.dom = null;
    this.timeout = null;
    this.inner = null;
    this.width = 0;
  }

  initDom() {
    this.dom = document.createElement('div');
    this.dom.innerHTML = `<div class="${prefixCls}"><div class="${prefixCls}-inner"></div></div>`;
    document.body.appendChild(this.dom);
    this.inner = this.dom.querySelector(`.${prefixCls}-inner`);
  }

  start() {
    if (!this.dom) {
      this.initDom();
    }
    utils.addClass(this.inner, 'loading');
    this.loading(5, 90);
  }

  loading(step, end, callback) {
    if (this.width >= end) {
      if (utils.isFunction(callback)) {
        callback.call(this);
      }
      return;
    }
    let nowStep = step;
    if (this.width / end > 0.7) {
      nowStep = step / 10;
    }
    if (this.timeout) clearTimeout(this.timeout);

    this.width = this.width + nowStep;
    this.width = Math.min(100, this.width);
    this.width = Math.max(0, this.width);
    this.inner.style.width = `${this.width}%`;

    this.timeout = setTimeout(() => {
      this.loading(step, end, callback);
    }, 200);
  }

  success() {
    this.end(1);
  }

  end(success) {
    if (!this.dom) {
      this.initDom();
    }
    this.loading(100, 100, () => {
      if (!success) {
        utils.addClass(this.inner, 'error');
      }
      setTimeout(() => {
        utils.removeClass(this.inner, 'loading');
        utils.removeClass(this.inner, 'error');
        this.inner.style.width = '0';
        this.width = 0;
      }, 200);
    });
  }

  fail() {
    this.end(0);
  }
}

const $loadingBar = new LoadingBar();

function loadingBar() {
  return $loadingBar;
}

loadingBar.start = () => {
  $loadingBar.start();
};

loadingBar.success = () => {
  $loadingBar.success();
};

loadingBar.percent = (value) => {
  $loadingBar.percent(value);
};

loadingBar.fail = () => {
  $loadingBar.fail();
};

export default loadingBar;
