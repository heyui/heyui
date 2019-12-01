import Preview from 'heyui/src/plugins/image-preview/image-preview-modal';
import Modal from 'heyui/src/plugins/modal';

export default function (datas, index) {
  return Modal({
    className: 'h-image-preview-modal',
    component: {
      vue: Preview,
      datas: {
        isShow: true,
        datas,
        index
      }
    }
  });
}
