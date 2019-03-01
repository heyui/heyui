import utils from '../utils/utils';
import locale from '../locale';

const wordlimit = function (el, total, vnode) {
  let v = el.value.length;
  if (v > total) {
    el.value = el.value.substring(0, total);
    if (vnode.context && vnode.context.$Message) {
      vnode.context.$Message.error(locale.t('h.wordlimit.warn', [total]));
    }
  }
};
export default {
  inserted(el, binding, vnode) {
    if (utils.isNumber(binding.value)) {
      let total = binding.value;
      wordlimit(el, total);
      el.addEventListener('input', () => {
        wordlimit(el, total, vnode);
      });
      for (let d of vnode.data.directives) {
        if (d.name == 'model') {
          vnode.context.$watch(d.expression, function () {
            wordlimit(el, total, vnode);
          });
          break;
        }
      }
    }
  }
  // update(el, binding, vnode, voldnode) {
  //   let total = binding.value;
  //   if (vnode && voldnode && vnode.data.domProps.value != voldnode.data.domProps.value) {
  //     wordlimit(el, total, vnode);
  //   }
  // },
};
