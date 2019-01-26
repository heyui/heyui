import Modal from '../modal';
import Preview from '../../components/imagepreview/preview';

export default function(datas, index) {
  return this.$Modal({
    className: 'h-image-preview-modal',
    component: {
      vue: Preview,
      datas: {
        isShow: true,
        datas,
        index
      }
    }
  })
}
