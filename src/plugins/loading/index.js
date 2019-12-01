import utils from 'heyui/src/utils/utils';

const loadingCls = 'h-loading';
let LoadingDom = null;

function Loading(content = '') {
  if (!LoadingDom) {
    let template = `<div class="${loadingCls} ${loadingCls}-full-screen">
      <div class="${loadingCls}-circular">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>
        </svg>
        <p class="${loadingCls}-text">${content}</p></div>
      </div>
    </div>`;
    let genDom = window.document.createElement('div');
    genDom.innerHTML = template;
    LoadingDom = genDom.childNodes[0];
    document.body.appendChild(LoadingDom);
  } else {
    LoadingDom.querySelector(`.${loadingCls}-text`).innerText = content;
  }
  utils.addClass(LoadingDom, `${loadingCls}-loading`);
  utils.addClass(LoadingDom, `${loadingCls}-visible`);
}

function loading(content) {
  Loading(content);
}

loading.close = () => {
  if (LoadingDom) {
    utils.removeClass(LoadingDom, `${loadingCls}-loading`);
    setTimeout(() => {
      utils.removeClass(LoadingDom, `${loadingCls}-visible`);
    }, 500);
  }
};

loading.open = (content) => {
  Loading(content);
};

export default loading;
