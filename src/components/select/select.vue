<template>
  <div :class="selectCls">
    <div :class="showCls">
      <div v-if="multiple&&objects&&objects.length"
            class="h-select-multiple-tags"><span v-for="obj of objects"
              :key="obj"><span>{{obj[title]}}</span><i class="h-icon-close"
            @click.stop="setvalue(obj)" v-if="!disabled"></i></span>
      </div>
      <div v-else-if="!multiple&&codes!=null&&objects" class="h-select-value-single">{{objects[title]}}</div>
      <div v-else class="h-select-placeholder">{{showPlaceholder}}</div>
      <i class="h-icon-down"></i>
    </div>
    <div :class="groupCls">
      <div class="h-select-group-container" v-if="isShow">
        <Search v-if="filterable" class="h-select-search-input" :placeholder="showSearchPlaceHolder" trigger-type="input" @onsearch="search" position="front"></Search>
        <div class="h-select-list">
          <ul class="h-select-ul">
            <li v-for="option of filterOptions"
                :key="option"
                class="h-select-item"
                @click="setvalue(option)"
                :class="getLiCls(option)">
              <div v-if="!!render"
                  v-html="option[html]"></div>
              <template v-else>{{option[title]}}</template>
              <i v-if="multiple"
                class="h-icon-check"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';
import Locale from '../../mixins/locale';

const prefix = 'h-select';

export default {
  name: 'hSelect',
  mixins: [ Locale ],
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    datas: [Array, Object],
    type: {
      type: [String],
      default: 'key'  //object
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
      type: String,
      // default: "请选择"
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      // default: "请选择"
    },
    searchPlaceHolder: {
      type: String,
      // default: "请输入筛选文本"
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
    render: Function,
    value: [Number, String, Array, Object]
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName,
      html: "select_rander_html",
      codes: [],
      objects: {},
      hasNullOption: this.nullOption && !this.multiple,
      searchInput: '',
      isShow: false
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
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  beforeMount() {
    this.parse();
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el.querySelector('.h-select-show');
      let content = this.$el.querySelector('.h-select-group');
      let that = this;
      this.dropdown = new Dropdown(el, {
        content,
        disabled: this.disabled,
        equalWidth: this.equalWidth,
        events: {
          show(){
            that.isShow = true;
          }
        }
      });
    });
  },
  methods: {
    search(value) {
      this.searchInput = value;
    },
    setObjects() {
      if (this.multiple) {
        let os = [];
        for (let code of this.codes) {
          if(this.optionsMap[code] == null) {
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
        this.codes = values.map((item) => {
          return this.type == 'key' ? this.getValue(item) : item[this.key];
        }).filter(item=>item!==null)
      } else {
        if (this.type == 'key') {
          this.codes = this.getValue(this.value);
        } else {
          if (utils.isObject(this.value)) {
            this.codes = this.value[this.key];
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
    setvalue(option) {
      if (this.readonly) return;
      let code = option[this.key];
      if (this.multiple) {
        if (!utils.isNull(this.limit) && !this.isIncludes(code) && this.codes.length >= this.limit) {
          this.$Message.error(`您最多可以选${this.limit}个选项`);
          return;
        }
        this.codes = utils.toggleValue(this.codes, code);
      } else {
        this.codes = code;
      }
      this.setObjects();
      let value = this.type == 'key' ? this.codes : this.objects;
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.objects);
      this.$el.dispatchEvent(event);
      if (this.multiple) {
        this.dropdown.update();
      } else {
        this.dropdown.hide();
      }
    },
    isIncludes(code){
      return this.codes.some(item=>item == code);
    },
    getLiCls(option) {
      let code = option[this.key];
      if (utils.isNull(code)) return {};
      return { [`${prefix}-item-selected`]: (this.multiple ? this.isIncludes(code) : this.codes == code) };
    }
  },
  filters: {
    showText(key, value) {
      return value.includes(key);
    }
  },
  computed: {
    showNullOptionText() {
      return this.nullOptionText || this.t('h.select.nullOptionText');
    },
    showPlaceholder() {
      return this.placeholder || this.t('h.select.placeholder');
    },
    showSearchPlaceHolder() {
      return this.searchPlaceHolder || this.t('h.select.searchPlaceHolder');
    },
    selectCls() {
      let autosize = this.autosize || !!this.noBorder;
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-input-no-border`]: this.noBorder,
        [`${prefix}-multiple`]: this.multiple,
        [`${prefix}-no-autosize`]: !autosize,
        [`${prefix}-disabled`]: this.disabled,
      }
    },
    showCls() {
      return {
        [`${prefix}-show`]: true
      }
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true,
        [`${prefix}-multiple`]: this.multiple
      }
    },
    optionsMap() {
      let optionsMap = utils.toObject(this.options, this.key);
      delete optionsMap.null;
      return optionsMap;
    },
    filterOptions() {
      if (this.searchInput) {
        if (this.dropdown) this.dropdown.update();
        let searchValue = this.searchInput.toLocaleLowerCase();
        return this.options.filter((item) => {
          return (item[this.html] || item[this.title]).toLocaleLowerCase().indexOf(searchValue) != -1;
        });
      }
      return this.options;
    },
    options() {
      if (!this.datas && !this.dict) {
        log.error('Select组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      datas = utils.initOptions(datas, this);
      if (!this.mutiple && this.hasNullOption) {
        datas.unshift({
          [`${this.key}`]: null,
          [`${this.title}`]: this.showNullOptionText,
          [`${this.html}`]: this.showNullOptionText
        });
      }
      return datas;
    }
  }
};
</script>