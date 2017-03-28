const assert = require('assert');
const vueHighlightJS = require('./index');

const vueStub = {
  directive: function directive(name, options) {
    assert.equal(typeof name, 'string');
    assert.equal(typeof options, 'object');
    assert.equal(typeof options.bind, 'function');
    assert.equal(typeof options.componentUpdated, 'function');
  },
};

assert.equal(typeof vueHighlightJS.install, 'function');
vueHighlightJS.install(vueStub);
