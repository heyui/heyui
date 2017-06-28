import autosize from '../plugins/autosize';

export default {
  inserted(el) {
    autosize(el);
  },
  update(el) {
    const evt = document.createEvent('Event');
    evt.initEvent('autosize:update', true, false);
    el.dispatchEvent(evt);
  }
}
