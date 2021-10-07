import { h } from 'vue';

const getParent = function(vm) {
  let parent = vm.$parent;
  while (parent && parent.$parent && parent.$.type.name !== 'HTree') {
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
  render() {
    let parent = getParent(this);
    if (parent && parent.$slots && parent.$slots.item) {
      return h(
        'div',
        {
          class: 'h-tree-item-slot'
        },
        [
          parent.$slots.item({
            item: this.data
          })
        ]
      );
    }
    return h('span');
  }
};
