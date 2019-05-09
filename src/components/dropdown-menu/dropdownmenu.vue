<template>
  <DropdownCustom :button="button" ref="dropdown" @show="showEvent" :delay="delay" @hide="hideEvent" :class="dropdownmenuCls" :trigger="trigger" :equalWidth="equalWidth" :toggleIcon="toggleIcon"
  :placement="placement" :disabled="disabled" :className="className" :offset="offset" showClass="h-dropdownmenu-show">
    <slot></slot>
    <ul slot="content" :class="groupCls" :style="groupStyle">
      <li class="h-dropdownmenu-item"
          :class="{'h-dropdownmenu-item-divider':!!option.divider,'disabled': !!option.divider || option.disabled}"
          v-for="option of options"
          @click="onclick($event, option)" :key="option[key]">
        <div v-if="option[html]"
              v-html="option[html]"></div>
        <template v-else>
          <i v-if="option.icon"
              :class="option.icon"></i>
          <span>{{option[title]}}</span>
        </template>
        <Badge v-if="showCount&&option.count"
                :count="option.count"
                :max-count="maxCount"
                position="right"></Badge>
      </li>
    </ul>
  </DropdownCustom>
</template>
<script>
import config from 'heyui/src/utils/config';
import DropdownCustom from 'heyui/src/components/dropdown-custom';
import Badge from 'heyui/src/components/badge';

const prefix = 'h-dropdownmenu';

export default {
  name: 'hDropdownMenu',
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
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    onclick(event, option) {
      if (option.disabled) return;
      this.$emit('onclick', option[this.key], option, event);
      this.$emit('click', option[this.key], option, event);
      this.$refs.dropdown.hide();
    },
    showEvent(event) {
      this.$emit('show', event);
    },
    hideEvent(event) {
      this.$emit('hide', event);
    }
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
        [`${prefix}-disabled`]: !!this.disabled,
        [this.className]: true
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
  components: {
    Badge,
    DropdownCustom
  }
};
</script>
