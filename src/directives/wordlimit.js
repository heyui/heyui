import utils from '../utils/utils';



export default {
  inserted(el, binding) {
    if (utils.isNumber(binding.value)) {
      let total = binding.value;
      const wordcount = function() {
        let v = el.value.length;
        if (v > total) {
          el.value = el.value.substring(0, total);
        }
      }
      wordcount();
      el.addEventListener("input", () => {
        wordcount();
      });
    }
  }
}
