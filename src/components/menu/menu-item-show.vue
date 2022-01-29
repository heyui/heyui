<template>
  <div
    class="h-menu-show"
    :class="{ 'h-menu-show-disabled': data.status.disabled, 'h-menu-li-selected': data.key && status.selected == data.key }"
    @click="togglemenu(data)"
  >
    <span v-show="data.icon" class="h-menu-show-icon"><i :class="data.icon"></i></span>
    <span class="h-menu-show-desc">{{ data.title }}</span>
    <span v-if="data.count" class="h-menu-show-count"><Badge :count="data.count" :max-count="99"></Badge></span>
    <span v-if="mode != 'horizontal' && data.children && data.children.length > 0" class="h-menu-show-expand">
      <i class="h-icon-angle-down"></i>
    </span>
  </div>
</template>
<script>
import tooltip from 'heyui/directives/tooltip';

export default {
  name: 'HMenuItemShow',
  directives: { tooltip },
  emits: ['clickItem'],
  props: {
    data: Object,
    param: Object,
    status: Object,
    mode: String
  },
  data() {
    return {};
  },
  methods: {
    togglemenu(data) {
      this.$emit('clickItem', { type: 'togglemenuEvent', data });
    }
  }
};
</script>
