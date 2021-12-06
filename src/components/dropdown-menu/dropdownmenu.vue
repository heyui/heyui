<template>
  <DropdownCustom
    ref="dropdown"
    :button="button"
    :delay="delay"
    :class="dropdownmenuCls"
    :trigger="trigger"
    :equal-width="equalWidth"
    :toggle-icon="toggleIcon"
    :placement="placement"
    :disabled="disabled"
    :class-name="className"
    :offset="offset"
    :show-class="showCls"
    @show="showEvent"
    @hide="hideEvent"
  >
    <slot></slot>
    <template v-slot:content>
      <ul :class="groupCls" :style="groupStyle">
        <li
          v-for="option of options"
          :key="option[key]"
          class="h-dropdownmenu-item"
          :class="{ 'h-dropdownmenu-item-divider': !!option.divider, disabled: !!option.divider || option.disabled }"
          @click="click($event, option)"
        >
          <i v-if="option.icon" :class="option.icon"></i>
          <span>{{ option[title] }}</span>
          <Badge v-if="showCount && option.count" :count="option.count" :max-count="maxCount" position="right"></Badge>
        </li></ul
    ></template>
  </DropdownCustom>
</template>
<script>
import config from 'heyui/utils/config';
import DropdownCustom from 'heyui/components/dropdown-custom';
import Badge from 'heyui/components/badge';

const prefix = 'h-dropdownmenu';

export default {
  name: 'HDropdownMenu',
  components: {
    Badge,
    DropdownCustom
  },
  emits: ['show', 'hide', 'clickItem'],
  props: {
    dict: String,
    datas: [Array, Object],
    trigger: {
      type: String, // click,hover,contextMenu`
      default: 'click'
    },
    equalWidth: {
      type: Boolean,
      default: false
    },
    width: Number,
    toggleIcon: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    showCount: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxCount: {
      type: Number,
      default: 99
    },
    delay: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: 'h-dropdownmenu-default'
    },
    keyName: {
      type: String,
      default: () => config.getOption('dict', 'keyName')
    },
    titleName: {
      type: String,
      default: () => config.getOption('dict', 'titleName')
    },
    offset: [String, Number],
    button: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName,
      html: 'dropdownmenuHtml',
      isShow: false,
      el: null
    };
  },
  computed: {
    dropdownmenuCls() {
      return {
        [`${prefix}`]: true
      };
    },
    groupStyle() {
      let styles = {};
      if (this.width) {
        styles.width = `${this.width}px`;
      }
      return styles;
    },
    showCls() {
      return {
        [`${prefix}-show`]: true,
        'h-dropdownmenu-empty': !this.$slots.default
      };
    },
    groupCls() {
      return {
        [`${this.className}-dropdown`]: !!this.className,
        'h-dropdownmenu-group': true
      };
    },
    options() {
      if (!this.datas && !this.dict) {
        console.error('[HeyUI Error] Dropdownmenu Component: Datas or dict parameters need to be defined at least.');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      datas = config.initOptions(datas, this);
      return datas;
    }
  },
  mounted() {},
  beforeUnmount() {},
  methods: {
    click(event, option) {
      if (option.disabled) return;
      this.$emit('clickItem', option[this.key], option, event);
      this.$refs.dropdown.hide();
    },
    showEvent(event) {
      this.$emit('show', event);
    },
    hideEvent(event) {
      this.$emit('hide', event);
    }
  }
};
</script>
