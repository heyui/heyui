const map = (typeof Map === 'function') ? new Map() : (function () {
  const keys = [];
  const values = [];

  return {
    has(key) {
      return keys.indexOf(key) > -1;
    },
    get(key) {
      return values[keys.indexOf(key)];
    },
    set(key, value) {
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        values.push(value);
      }
    },
    delete(key) {
      const index = keys.indexOf(key);
      if (index > -1) {
        keys.splice(index, 1);
        values.splice(index, 1);
      }
    }
  };
})();

const createEvent = (name) => {
  const evt = document.createEvent('Event');
  evt.initEvent(name, true, false);
  return evt;
};

function assign(ta) {
  if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

  let heightOffset = null;
  let clientWidth = ta.clientWidth;
  let cachedHeight = null;

  function init() {
    const style = window.getComputedStyle(ta, null);

    if (style.resize === 'vertical') {
      ta.style.resize = 'none';
    } else if (style.resize === 'both') {
      ta.style.resize = 'horizontal';
    }

    if (style.boxSizing === 'content-box') {
      heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
    } else {
      heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    }
    if (isNaN(heightOffset)) {
      heightOffset = 0;
    }

    update();
  }

  function changeOverflow(value) {
    {
      const width = ta.style.width;
      ta.style.width = '0px';
      ta.style.width = width;
    }

    ta.style.overflowY = value;
  }

  function getParentOverflows(el) {
    const arr = [];

    while (el && el.parentNode && el.parentNode instanceof Element) {
      if (el.parentNode.scrollTop) {
        arr.push({
          node: el.parentNode,
          scrollTop: el.parentNode.scrollTop
        });
      }
      el = el.parentNode;
    }

    return arr;
  }

  function resize() {
    const originalHeight = ta.style.height;
    const overflows = getParentOverflows(ta);
    const docTop = document.documentElement && document.documentElement.scrollTop;

    ta.style.height = 'auto';

    let endHeight = ta.scrollHeight + heightOffset;

    if (ta.scrollHeight === 0) {
      ta.style.height = originalHeight;
      return;
    }

    ta.style.height = endHeight + 'px';

    clientWidth = ta.clientWidth;

    overflows.forEach(el => {
      el.node.scrollTop = el.scrollTop;
    });

    if (docTop) {
      document.documentElement.scrollTop = docTop;
    }
  }

  function update() {
    resize();

    const styleHeight = Math.round(parseFloat(ta.style.height));
    const computed = window.getComputedStyle(ta, null);
    var actualHeight = Math.round(parseFloat(computed.height));

    if (actualHeight !== styleHeight) {
      if (computed.overflowY !== 'visible') {
        changeOverflow('visible');
        resize();
        actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
      }
    } else {
      if (computed.overflowY !== 'hidden') {
        changeOverflow('hidden');
        resize();
        actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
      }
    }

    if (cachedHeight !== actualHeight) {
      cachedHeight = actualHeight;
      const evt = createEvent('autosize:resized');
      try {
        ta.dispatchEvent(evt);
      } catch (err) {}
    }
  }

  const pageResize = () => {
    if (ta.clientWidth !== clientWidth) {
      update();
    }
  };

  const destroy = (style => {
    window.removeEventListener('resize', pageResize, false);
    ta.removeEventListener('input', update, false);
    ta.removeEventListener('keyup', update, false);
    ta.removeEventListener('autosize:destroy', destroy, false);
    ta.removeEventListener('autosize:update', update, false);

    Object.keys(style).forEach(key => {
      ta.style[key] = style[key];
    });

    map.delete(ta);
  }).bind(ta, {
    height: ta.style.height,
    resize: ta.style.resize,
    overflowY: ta.style.overflowY,
    overflowX: ta.style.overflowX,
    wordWrap: ta.style.wordWrap
  });

  ta.addEventListener('autosize:destroy', destroy, false);

  if ('onpropertychange' in ta && 'oninput' in ta) {
    ta.addEventListener('keyup', update, false);
  }

  window.addEventListener('resize', pageResize, false);
  ta.addEventListener('input', update, false);
  ta.addEventListener('autosize:update', update, false);
  ta.style.overflowX = 'hidden';
  ta.style.wordWrap = 'break-word';

  map.set(ta, {
    destroy,
    update
  });

  init();
}

function destroy(ta) {
  const methods = map.get(ta);
  if (methods) {
    methods.destroy();
  }
}

function update(ta) {
  const methods = map.get(ta);
  if (methods) {
    methods.update();
  }
}

let autosize = null;

if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
  autosize = el => el;
  autosize.destroy = el => el;
  autosize.update = el => el;
} else {
  autosize = (el, options) => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], x => assign(x, options));
    }
    return el;
  };
  autosize.destroy = el => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], destroy);
    }
    return el;
  };
  autosize.update = el => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], update);
    }
    return el;
  };
}

export default autosize;
