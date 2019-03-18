<template>
  <div :class="treepickerCls" :disabled="disabled">
    <div class="h-treepicker-show" :class="showCls">
      <template v-if="multiple&&objects.length">
        <div v-if="showCount" class="h-treepicker-value-single">{{'h.treepicker.selectDesc' |
          hlang([valuebak.length])}}</div>
        <div v-else class="h-treepicker-multiple-tags">
          <span v-for="obj of objects" :key="obj[param.keyName]">
            <span>{{obj[param.titleName]}}</span>
            <i class="h-icon-close" @click.stop="remove(obj)" v-if="!disabled"></i>
          </span>
        </div>
      </template>
      <div v-else-if="!multiple&&object" class="h-treepicker-value-single">{{object[param.titleName]}}</div>
      <div v-else class="h-treepicker-placeholder">{{'h.treepicker.placeholder' | hlang(null, placeholder)}}</div>
      <i class="h-icon-down"></i>
    </div>
    <div class="h-treepicker-group" :class="groupCls">
      <div class="h-treepicker-body">
        <Tree ref="tree" @loadDataSuccess="loadDataSuccess" :toggleOnSelect="toggleOnSelect" :option="option" :multiple="multiple"
          v-model="valuebak" :chooseMode="chooseMode" @select="select" @choose="choose" :filterable="filterable"
          :config="config"></Tree>
      </div>
      <div class="h-treepicker-footer">
        <button class="h-btn h-btn-text h-btn-s" @click="clear">{{'h.common.clear' | hlang}}</button>
        <button class="h-btn h-btn-primary h-btn-s" @click="confirm">{{'h.common.confirm' | hlang}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

import Tree from '../tree';

const prefix = 'h-treepicker';

export default {
  name: 'hTreePicker',
  component: {
    Tree
  },
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'key'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: Number,
    placeholder: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: false
    },
    chooseMode: {
      type: String,
      default: 'all'
    },
    showCount: {
      type: Boolean,
      default: false
    },
    toggleOnSelect: {
      type: Boolean,
      default: true
    },
    value: [Number, String, Array, Object],
    config: String,
    className: String
  },
  data() {
    return {
      objects: [],
      object: null,
      dropdown: null,
      valuebak: null
    };
  },
  beforeDestroy() {
    let el = this.el;
    if (el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    this.parse();
    this.$nextTick(() => {
      if (this.inline) return;
      let el = (this.el = this.$el.querySelector(
        `.${prefix}>.h-treepicker-show`
      ));
      let content = this.$el.querySelector(`.h-treepicker-group`);

      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        triggerOnce: true,
        content,
        disabled: this.disabled
      });

      if (this.disabled) {
        this.dropdown.disabled();
      }
    });
  },
  watch: {
    value() {
      this.parse();
    },
    disabled() {
      if (!this.dropdown) {
        return false;
      }

      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  methods: {
    refresh() {
      if (this.$refs.tree) {
        return this.$refs.tree.refresh();
      }
    },
    loadDataSuccess() {
      this.parse();
      this.$emit('loadDataSuccess');
    },
    getChoose() {
      if (this.$refs.tree) {
        return this.$refs.tree.getChoose();
      }
      return [];
    },
    getFullChoose() {
      if (this.$refs.tree) {
        return this.$refs.tree.getFullChoose();
      }
      return [];
    },
    select(data) {
      this.object = data;
      this.$emit('select', data);
      if (!this.multiple) this.setvalue();
    },
    choose(data) {
      this.objects = data;
      this.$emit('choose', data);
      if (this.multiple) this.setvalue();
    },
    chooseAll() {
      if (this.$refs.tree) {
        this.$refs.tree.chooseAll();
      }
    },
    remove(obj) {
      let index = this.objects.indexOf(obj);
      this.objects.splice(index, 1);
      this.valuebak.splice(index, 1);
      this.setvalue();
      this.triggerChange();
    },
    updateShow(data) {
      if (utils.isObject(data) && !this.multiple) {
        this.object = data;
      }
      if (utils.isArray(data) && this.multiple) {
        this.objects = data;
      }
      this.setvalue();
    },
    parse() {
      if (this.type == 'key') {
        this.valuebak = utils.copy(this.value);
        this.$nextTick(() => {
          if (this.multiple) {
            this.objects = this.$refs.tree.getChoose();
          } else {
            this.object = this.$refs.tree.getSelect();
          }
        });
      } else {
        if (this.multiple) {
          this.valuebak = (this.value || []).map(
            item => item[this.param.keyName]
          );
          this.objects = utils.copy(this.value);
        } else {
          this.valuebak = this.value ? this.value[this.param.keyName] : null;
          this.object = utils.copy(this.value);
        }
      }
    },
    dispose() {
      if (this.multiple) {
        return this.objects.map(item => this.type == 'key' ? item[this.param.keyName] : item).filter(item => {
          return item !== undefined;
        });
      } else if (this.object) {
        return this.type == 'key' ? this.object[this.param.keyName] : this.object;
      }
      return null;
    },
    clear() {
      this.object = null;
      this.objects = [];
      this.setvalue();
      this.triggerChange();
      this.$refs.tree.searchTree(null);
      this.dropdown.hide();
    },
    confirm() {
      this.setvalue();
      this.triggerChange();
      this.dropdown.hide();
    },
    setvalue() {
      let value = this.dispose();
      this.$emit('input', value);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      this.$nextTick(() => {
        if (this.dropdown) this.dropdown.update();
      });
    },
    triggerChange() {
      this.$nextTick(() => {
        this.$emit(
          'change',
          utils.copy(this.multiple ? this.objects : this.object)
        );
      });
    }
  },
  computed: {
    param() {
      if (this.config) {
        return utils.extend({},
          config.getOption('tree.default'),
          config.getOption(`tree.configs.${this.config}`),
          this.option
        );
      } else {
        return utils.extend({}, config.getOption('tree.default'), this.option);
      }
    },
    showCls() {
      return {
        [`${this.className}-show`]: !!this.className
      };
    },
    groupCls() {
      return {
        [`${this.className}-dropdown`]: !!this.className
      };
    },
    treepickerCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: true,
        [`${prefix}-no-autosize`]: true,
        [`${prefix}-multiple`]: this.multiple,
        [`${prefix}-disabled`]: this.disabled
      };
    }
  }
};
</script>
