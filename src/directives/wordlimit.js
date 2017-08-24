import utils from '../utils/utils';

export default {
  inserted(el, binding, vnode) {
    if (utils.isNumber(binding.value)) {
      let total = binding.value;
      const wordcount = function() {
        let v = el.value.length;
        if (v > total) {
          el.value = el.value.substring(0, total);
          if (vnode.context && vnode.context.$Message) {
            vnode.context.$Message.error(`您最多可以输入${total}个字`);
          }
        }
      }
      wordcount();
      el.addEventListener("input", () => {
        wordcount();
      });
    }
  }
}
