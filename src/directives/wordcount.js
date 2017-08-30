import utils from '../utils/utils';

const wordcount = function(total, el, remainDom) {
  let v = el.value.length;
  let remain = total - v;
  if (remain >= 0) {
    remainDom.innerText = v;
    utils.removeClass(remainDom, 'red-color')
  } else {
    remainDom.innerText = `您已超出${Math.abs(remain)}个字`;
    utils.addClass(remainDom, 'red-color')
  }
}

export default {
  inserted(el, binding) {
    if (utils.isNumber(binding.value)) {
      let total = binding.value;
      let wordElement = document.createElement("p");
      wordElement.innerHTML = `<span class='float-right'><span class='h-wordcount-remain-size'></span> / <span class='h-wordcount-total-size'>${total}</span></span>`
      utils.addClass(wordElement, 'h-wordcount');
      let parent = el.parentNode;
      if (parent.lastChild == el) {
        parent.append(wordElement);
      } else {
        parent.insertBefore(el.nextElementSibling, wordElement);
      }
      let remainDom = parent.querySelector('.h-wordcount-remain-size');
      el.remainDom = remainDom;
      wordcount(total, el, remainDom);
      el.addEventListener("input", () => {
        wordcount(total, el, remainDom);
      });
    }
  },
  update(el, binding, vnode, voldnode) {
    let total = binding.value;
    if (el.remainDom && vnode && voldnode && vnode.data.domProps.value != voldnode.data.domProps.value) {
      wordcount(total, el, el.remainDom);
    }
  },
  unbind(el) {
    let nextnode = el.nextElementSibling;
    if (nextnode && utils.hasClass(nextnode, 'h-word-count')) {
      nextnode.parentNode.removeChild(nextnode);
    }
  }
}
