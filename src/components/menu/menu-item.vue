<template>
  <li class="h-menu-li" :class="{'h-menu-li-opened':(status.opened.indexOf(data.key) != -1)}">
    <a :target="data.value.target" @click="triggerClick" v-if="data.value.href" class="h-menu-link" :href="href" >
      <MenuItemShow v-bind="$props" :mode="mode" @trigger="trigger"></MenuItemShow>
    </a>
    <MenuItemShow v-else v-bind="$props" :mode="mode" @trigger="trigger"></MenuItemShow>
    <ul v-if="data.children&&data.children.length>0"
        class="h-menu-ul">
      <hMenuItem v-for="child of data.children"
                  :key="child.key"
                  :data="child"
                  :param="param"
                  :status="status"
                  @trigger="trigger"></hMenuItem>
    </ul>
  </li>
</template>
<script>
import utils from 'heyui/src/utils/utils';
import MenuItemShow from './menu-item-show';

export default {
  name: 'hMenuItem',
  components: {
    MenuItemShow
  },
  props: {
    data: Object,
    param: Object,
    status: Object,
    inlineCollapsed: {
      type: Boolean,
      default: false
    },
    mode: String
  },
  data() {
    return {
    };
  },
  methods: {
    trigger(data) {
      this.$emit('trigger', data);
    },
    triggerClick(event) {
      if (this.data.value.nativeLink !== true && !(event.altKey || event.ctrlKey || event.shiftKey || event.metaKey)) {
        event.preventDefault();
      }
      this.trigger(this.data);
    }
  },
  computed: {
    href() {
      let href = this.data.value.href;
      if (href) {
        if (utils.isString(href)) {
          return href;
        } else if (this.$router) {
          return this.$router.resolve(href).href;
        }
      }
      return null;
    }
  }
};
</script>
