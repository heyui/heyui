import Utils from '../utils/utils';

export default {
  height: (el, binding) => {
    if (binding.value) {
      el.style.height = binding.value + "px";
    }
  },
  width: (el, binding) => {
    if (binding.value) {
      el.style.width = binding.value + "px";
    }
  },
  font: (el, binding) => {
    if (binding.value) {
      el.style.fontSize = binding.value + "px";
    }
  },
  color: (el, binding) => {
    let color = binding.value || binding.arg || binding.expression;
    if (color.startsWith("#")) {
      el.style.color = color;
    } else {
      Utils.addClass(el, `${color}-color`);
    }
  },
  bgColor: (el, binding) => {
    let color = binding.value || binding.arg;
    if (color.startsWith("#")) {
      el.style.backgroundColor = color;
    } else {
      Utils.addClass(el, `bg-${color}-color`);
    }
  },
}
