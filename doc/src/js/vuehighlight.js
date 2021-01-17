'use strict';

const hljs = require('highlight.js');

const vueHighlightJS = {};
vueHighlightJS.install = function install(Vue) {
  Vue.directive('highlightjs', {
    deep: true,
    bind: function bind(el, binding) {
      // on first bind, highlight all targets
      const targets = el.querySelectorAll('code');
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i];

        if (binding.value) {
          // if a value is directly assigned to the directive, use this
          // instead of the element content.
          target.textContent = binding.value;
        }

        hljs.highlightBlock(target);
      }
    },
    componentUpdated: function componentUpdated(el, binding) {
      // after an update, re-fill the content and then highlight
      const targets = el.querySelectorAll('code');

      for (let i = 0; i < targets.length; i += 1) {
        const target = targets[i];
        if (binding.value) {
          target.textContent = binding.value;
          hljs.highlightBlock(target);
        }
      }
    }
  });
};

module.exports = vueHighlightJS;
