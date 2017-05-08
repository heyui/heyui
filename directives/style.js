import utils from '../utils/utils';

export default {
  height(el, binding) {
    if (binding.value) {
      el.style.height = binding.value + (String(binding.value).endsWith("%") ? '' : "px");
    }
  },
  width(el, binding) {
    if (binding.value) {
      el.style.width = binding.value + (String(binding.value).endsWith("%") ? '' : "px");
    }
  },
  padding(el, binding) {
    if (binding.value) {
      el.style.padding = binding.value + (String(binding.value).endsWith("%") ? '' : "px");
    }
  },
  margin(el, binding) {
    if (binding.value) {
      el.style.margin = binding.value + (String(binding.value).endsWith("%") ? '' : "px");
    }
  },
  font(el, binding) {
    if (binding && binding.value) {
      el.style.fontSize = binding.value + "px";
    }
  },
  color(el, binding) {
    let color = binding.value || binding.arg || binding.expression;
    if (color.startsWith("#")) {
      el.style.color = color;
    } else {
      utils.addClass(el, `${color}-color`);
    }
  },
  bgColor(el, binding) {
    let color = binding.value || binding.arg;
    if (color.startsWith("#")) {
      el.style.backgroundColor = color;
    } else {
      utils.addClass(el, `bg-${color}-color`);
    }
  },
}
