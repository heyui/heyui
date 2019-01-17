import select from '../select';
import Message from '../message'

export default function ({ text, showSuccessTip = "复制成功", showFailureTip = '复制失败', successCallback, failureCallback }) {
  const container = document.body;
  const isRTL = document.documentElement.getAttribute('dir') == 'rtl';
  const fakeElem = document.createElement('textarea');
  fakeElem.style.fontSize = '12pt';
  fakeElem.style.border = '0';
  fakeElem.style.padding = '0';
  fakeElem.style.margin = '0';
  fakeElem.style.position = 'absolute';
  fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
  let yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElem.style.top = `${yPosition}px`;
  fakeElem.setAttribute('readonly', '');
  fakeElem.value = text;
  container.appendChild(fakeElem);
  select(fakeElem);
  let succeeded;
  try {
    succeeded = document.execCommand('copy');
    if (showSuccessTip) {
      Message.success(showSuccessTip)
    }
    if (successCallback) {
      successCallback.call();
    }
  } catch (err) {
    succeeded = false;
    console.error(err)
    if (showFailureTip) {
      Message.error(showFailureTip)
    }
    if (failureCallback) {
      failureCallback.call();
    }
  }
}
