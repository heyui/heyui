const getParent = function (vm) {
  let parent = vm.$parent;
  let filterTag = new Set(['Tree', 'hTree', 'h-tree']);
  while (parent != null && !filterTag.has(parent.$options._componentTag || parent.$options.name)) {
    parent = parent.$parent;
  }
  if (!parent) {
    console.error('[HeyUI Error] Tree Component: Please put TreeItem component in the Tree Component');
  }
  return parent;
};

export default {
  name: 'hTreeSlot',
  props: {
    data: Object
  },
  render(h) {
    let parent = getParent(this);
    if (parent.$scopedSlots && parent.$scopedSlots.item) {
      return h('div', {
        class: 'h-tree-item-slot'
      }, [
        parent.$scopedSlots.item({
          item: this.data
        })
      ]);
    }
    return h('span');
  }
};
