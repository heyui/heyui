
export default function(text){
  const container = document.body;
  const isRTL = document.documentElement.getAttribute('dir') == 'rtl';


  const removeFake = () => {
    container.removeEventListener('click', fakeHandlerCallback);
    fakeHandler = null;
    fakeHandlerCallback = null;
  };

  removeFake();

  const fakeHandlerCallback = () => removeFake();
  const fakeHandler = container.addEventListener('click', fakeHandlerCallback) || true;


  const fakeElem = document.createElement('textarea');
  fakeElem.style.fontSize = '12pt';
  fakeElem.style.border = '0';
  fakeElem.style.padding = '0';
  fakeElem.style.margin = '0';
  fakeElem.style.position = 'absolute';
  fakeElem.style[ isRTL ? 'right' : 'left' ] = '-9999px';
  let yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElem.style.top = `${yPosition}px`;
  fakeElem.setAttribute('readonly', '');
  fakeElem.value = text;
  container.appendChild(fakeElem);
  // this.selectedText = select(fakeElem);
  this.copyText();
  let succeeded;

  try {
      succeeded = document.execCommand(this.action);
  }
  catch (err) {
      succeeded = false;
  }
}