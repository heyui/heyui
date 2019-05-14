<template>
  <div :class="selectCls">
    <div :class="showCls">
      <template v-if="multiple">
        <div class="h-select-multiple-tags">
          <span v-for="obj of objects" :key="obj[keyName]">
            <span>{{obj[titleName]}}</span><i class="h-icon-close-min" @click.stop="setvalue(obj)" v-if="!disabled"></i>
          </span>
          <input v-if="filterable"
                type="text"
                class="h-select-search-input h-input" v-model="searchInput"
                :disabled="disabled"
               @keyup="handle"
               @blur="blurHandle"
               @keypress.enter="enterHandle"
                :placeholder="showPlaceholder" />
        </div>
        <div v-if="!hasValue&&!filterable" class="h-select-placeholder">{{showPlaceholder}}</div>
      </template>
      <template v-else>
        <template v-if="filterable">
          <input
                type="text"
                @keyup="handle"
                @blur="blurHandle"
                :disabled="disabled"
                @keypress.enter="enterHandle"
                :class="{'h-select-search-input-value': hasValue}"
                class="h-select-search-input h-select-single-search-input h-input" v-model="searchInput"
                :placeholder="hasValue?'':showPlaceholder" />
          <div class="h-select-filterable-value" @click="focusSearchInput" v-if="hasValue&&searchInput===''">{{singleValue}}</div>
        </template>
        <template v-else>
          <div class="h-select-value-single" v-if="hasValue">
            <template v-if="hasValue">
              <div v-if="!$scopedSlots.show" class="h-select-value-single">{{singleValue}}</div>
              <slot v-else :value="objects" name="show"></slot>
            </template>
          </div>
          <div v-else class="h-select-placeholder">{{showPlaceholder}}</div>
        </template>
      </template>
      <i class="h-icon-down"></i>
    </div>
    <div :class="groupCls">
      <div class="h-select-group-container" v-if="isShow">
        <div class="h-select-list">
          <slot name="top" :results="filterOptions"></slot>
          <ul class="h-select-ul">
            <template v-for="(option, index) of filterOptions">
            <li v-if="!option.hidden"
                :key="option[keyName]"
                @click="setvalue(option)"
                :class="getLiCls(option, index)">
              <div v-if="!!optionRender"
                  v-html="option[html]"></div>
              <template v-else-if="!$scopedSlots.item">{{option[titleName]}}</template>
              <slot v-else :item="option" name="item"></slot>
              <i v-if="multiple"
                class="h-icon-check"></i>
            </li>
            </template>
            <li v-if="filterOptions.length==0" class="h-select-ul-empty">{{showEmptyContent}}</li>
          </ul>
          <slot name="bottom" :results="filterOptions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from 'heyui/src/utils/config';
import utils from 'heyui/src/utils/utils';
import Dropdown from 'heyui/src/plugins/dropdown';
import Locale from 'heyui/src/mixins/locale';
import Message from 'heyui/src/plugins/message';

const prefix = 'h-select';

export default {
  name: 'hSelect',
  mixins: [ Locale ],
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    datas: [Array, Object],
    type: {
      type: [String],
      default: 'key' // object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    limit: {
      type: Number
    },
    nullOption: {
      type: Boolean,
      default: true
    },
    nullOptionText: {
      type: String
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    emptyContent: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean,
      default: false
    },
    equalWidth: {
      type: Boolean,
      default: true
    },
    keyName: {
      type: String,
      default: () => config.getOption('dict', 'keyName')
    },
    titleName: {
      type: String,
      default: () => config.getOption('dict', 'titleName')
    },
    optionRender: Function,
    value: [Number, String, Array, Object],
    className: String
  },
  data() {
    return {
      html: 'select_render_html',
      codes: [],
      objects: {},
      searchInput: '',
      nowSelected: -1,
      isShow: false,
      content: null
    };
  },
  watch: {
    datas() {
      this.parse();
    },
    value() {
      this.parse();
    },
    disabled() {
      if (this.dropdown) {
        if (this.disabled) {
          this.dropdown.disabled();
        } else {
          this.dropdown.enabled();
        }
      }
    },
    searchInput() {
      this.nowSelected = -1;
    },
    nowSelected() {
      this.$nextTick(() => {
        if (this.content && this.nowSelected > -1) {
          let dom = this.content.querySelector('.h-select-item-picked');
          let uldom = this.content.querySelector('.h-select-list');
          if (dom && uldom) {
            if (
              dom.offsetTop + dom.offsetHeight - uldom.scrollTop >
              uldom.offsetHeight
            ) {
              uldom.scrollTop =
                dom.offsetTop + dom.offsetHeight - uldom.offsetHeight;
            } else if (dom.offsetTop - uldom.scrollTop < 0) {
              uldom.scrollTop = dom.offsetTop;
            }
          }
        }
      });
    }
  },
  beforeMount() {
    this.parse();
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
    this.$nextTick(() => {
      let el = this.el = this.$el.querySelector('.h-select-show');
      let content = this.content = this.$el.querySelector('.h-select-group');
      let that = this;
      this.dropdown = new Dropdown(el, {
        content,
        disabled: this.disabled,
        equalWidth: this.equalWidth,
        trigger: 'click foucs',
        triggerOnce: this.filterable,
        events: {
          show() {
            that.isShow = true;
          }
        }
      });
    });
  },
  methods: {
    focusSearchInput() {
      this.$el.querySelector('.h-select-search-input').focus();
    },
    handle(event) {
      let code = event.keyCode || event.which || event.charCode;
      if (code == 38) {
        if (this.nowSelected > 0) {
          this.nowSelected -= 1;
        }
      } else if (code == 40) {
        if (this.nowSelected < this.filterOptions.length - 1) {
          this.nowSelected += 1;
        }
      }
    },
    enterHandle(event) {
      event.preventDefault();
      if (this.nowSelected >= 0) {
        this.setvalue(this.filterOptions[this.nowSelected], 'enter');
        if (!this.multiple) {
          event.target.blur();
        }
      }
    },
    blurHandle(event) {
      this.nowSelected = -1;
      setTimeout(() => {
        this.searchInput = '';
      }, 300);
    },
    search(value) {
      this.searchInput = value;
    },
    setObjects() {
      if (this.multiple) {
        let os = [];
        for (let code of this.codes) {
          if (this.optionsMap[code] == null) {
            continue;
          }
          os.push(this.optionsMap[code]);
        }
        this.objects = os;
      } else {
        this.objects = this.optionsMap[this.codes];
      }
    },
    parse() {
      if (this.multiple) {
        let values = this.value || [];
        if (!utils.isArray(values)) {
          console.warn(`[HeyUI WARNING] Select Component: value '${values}' can't be a value of a multiple select`);
          values = [];
        }
        this.codes = values.map((item) => {
          return this.type == 'key' ? this.getValue(item) : item[this.keyName];
        }).filter(item => item !== null);
      } else {
        if (this.type == 'key') {
          this.codes = this.getValue(this.value);
        } else {
          if (utils.isObject(this.value)) {
            this.codes = this.value[this.keyName];
          } else {
            this.codes = null;
          }
        }
      }
      this.setObjects();
    },
    getValue(value) {
      return utils.isNull(value) ? null : value;
    },
    setvalue(option, trigger) {
      if (this.disabled) return;
      if (option.disabled || option.isLabel) return;
      let code = option[this.keyName];
      if (this.multiple) {
        if (!utils.isNull(this.limit) && !this.isIncludes(code) && this.codes.length >= this.limit) {
          Message.error(this.t('h.select.limitSize', [this.limit]));
          return;
        }
        this.codes = utils.toggleValue(this.codes, code);
      } else {
        this.codes = code;
      }
      this.setObjects();
      let value = this.type == 'key' ? this.codes : this.objects;
      this.$emit('input', value);
      this.$emit('change', this.objects);
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, this.objects);
      this.$el.dispatchEvent(event);
      this.nowSelected = -1;
      if (this.multiple) {
        this.searchInput = '';
        this.$nextTick(() => {
          this.dropdown.update();
        });
      } else {
        this.dropdown.hide();
        setTimeout(() => {
          this.searchInput = '';
        }, 100);
      }
    },
    isIncludes(code) {
      return this.codes.some(item => item == code);
    },
    getLiCls(option, index) {
      let code = option[this.keyName];
      if (option.isLabel) {
        return {
          [`${prefix}-item-label`]: option.isLabel
        };
      } else {
        return {
          [`${prefix}-item-disabled`]: option.disabled,
          [`${prefix}-item`]: true,
          [`${prefix}-item-selected`]: (this.multiple ? this.isIncludes(code) : this.codes == code),
          [`${prefix}-item-picked`]: (this.nowSelected == index)
        };
      }
    }
  },
  filters: {
    showText(key, value) {
      return value.includes(key);
    }
  },
  computed: {
    hasNullOption() {
      return this.nullOption && !this.multiple;
    },
    hasValue() {
      if (this.multiple) {
        return this.codes.length > 0;
      } else {
        return !utils.isNull(this.codes) && this.objects;
      }
    },
    singleValue() {
      if (this.hasValue) {
        return this.objects[this.titleName];
      } else {
        return null;
      }
    },
    showEmptyContent() {
      return this.emptyContent || this.t('h.select.emptyContent');
    },
    hasLabel() {
      return this.options.some(item => item.isLabel);
    },
    showNullOptionText() {
      return this.nullOptionText || this.t('h.select.nullOptionText');
    },
    showPlaceholder() {
      return this.placeholder || this.t('h.select.placeholder');
    },
    // showSearchPlaceHolder() {
    //   return this.searchPlaceHolder || this.t('h.select.searchPlaceHolder');
    // },
    selectCls() {
      let autosize = this.autosize || !!this.noBorder;
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-input-no-border`]: this.noBorder,
        [`${prefix}-multiple`]: this.multiple,
        [`${prefix}-no-autosize`]: !autosize,
        [`${prefix}-disabled`]: this.disabled
      };
    },
    showCls() {
      return {
        [`${prefix}-show`]: true,
        [`${this.className}-show`]: !!this.className
      };
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true,
        [`${prefix}-group-has-label`]: this.hasLabel,
        [`${prefix}-multiple`]: this.multiple,
        [`${prefix}-single`]: !this.multiple,
        [`${this.className}-dropdown`]: !!this.className
      };
    },
    optionsMap() {
      let optionsMap = utils.toObject(this.options, this.keyName);
      delete optionsMap.null;
      return optionsMap;
    },
    filterOptions() {
      if (this.searchInput) {
        if (this.dropdown) this.dropdown.update();
        let searchValue = this.searchInput.toLocaleLowerCase();
        return this.options.filter((item) => {
          return (item[this.html] || item[this.titleName]).toLocaleLowerCase().indexOf(searchValue) != -1;
        });
      }
      return this.options;
    },
    options() {
      if (!this.datas && !this.dict) {
        console.error('[HeyUI Error] Select Component: Datas or dict parameters need to be defined at least.');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      datas = config.initOptions(datas, this);
      if (!this.multiple && this.hasNullOption) {
        datas.unshift({
          [`${this.keyName}`]: null,
          [`${this.titleName}`]: this.showNullOptionText,
          [`${this.html}`]: this.showNullOptionText
        });
      }
      return datas;
    }
  }
};
</script>
