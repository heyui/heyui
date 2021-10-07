import { createApp } from 'vue';

import Preview from 'heyui/plugins/image-preview/image-preview-modal';

let imagePreviewApp;

export default function(datas, index) {
  return createDom({ datas, index });
}

const createDom = props => {
  if (!imagePreviewApp) {
    const body = document.body;
    const dom = document.createElement('div');
    dom.setAttribute('id', 'image-preview');
    body.appendChild(dom);
    const app = createApp(Preview);
    imagePreviewApp = app.mount(dom);
  }
  imagePreviewApp.datas = props.datas || [];
  imagePreviewApp.index = props.index || 0;
  setTimeout(() => {
    imagePreviewApp.openModal = true;
  }, 10);
};
