<template>
  <div :class="autocompleteCls">
    <div class="h-autocomplete-show">
      <div v-if="multiple"
            class="h-autocomplete-multiple-tags"><span v-for="obj of objects"
              :key="obj"><span>{{obj[title]}}</span><i class="h-icon-close"
            @click.stop="setvalue(obj)"></i></span>
            <input v-if="!readonly" type="text"
              class="h-autocomplete-input"
              @focus="focusing=true"
              v-model="inputvalue"
              @blur="focusing=false"
              @keyup.enter="add" :placeholder="placeholder" />
      </div>
      <div v-if="!multiple">
        <input type="text" v-if="!readonly"
              class="h-autocomplete-input"
              v-model="searchValue"
              @keyup.enter="add" :placeholder="placeholder" /></div>
    </div>
    <div :class="groupCls">
      <ul class="h-autocomplete-ul">
        <li v-for="option of options"
            :key="option"
            class="h-autocomplete-item"
            @click="setvalue(option)"
            :class="{'h-autocomplete-item-selected': option[key]==nowSelected}">
          <div v-if="!!render"
               v-html="option[html]"></div>
          <template v-else>{{option[title]}}</template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

const prefix = 'h-autocomplete';

export default {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'key'  //object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    datas: [Array, Object],
    dict: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: [Number, String, Array, Object],
    options: Object,
    title: String
  },
  data() {
    return {
      key: config.getOption('dict', 'key_field'),
      title: config.getOption('dict', 'title_field'),
      html: "autocomplete_rander_html",
      focusing: false,
      codes: [],
      objects: {},
      nowSelected: null,
      searchValue: '',
      param: utils.extend({}, config.getOption("autocomplete.default"), this.options)
    };
  },
  watch: {
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
      let el = this.$el.querySelector('.h-autocomplete-show');
      let content = this.$el.querySelector('.h-autocomplete-group');
      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        triggerOnce: true,
        content,
        disabled: this.disabled,
        equalWidth: true,
        container: document.body
      });
    });
  },
  methods: {
    setObjects() {
      if (this.multiple) {
        let os = [];
        for (let code of this.codes) {
          os.push(this.optionsMap[code]);
        }
        this.objects = os;
      } else {
        this.objects = this.optionsMap[this.codes] || {};
      }
    },
    parse() {
      if (this.multiple) {
        let values = this.value || [];
        this.codes = values.map((item) => {
          return this.type == 'key' ? item : item[this.key];
        })
      } else {
        if (this.type == 'key') {
          this.codes = this.value;
        } else if (utils.isObject(this.value)) {
          this.codes = this.value[this.key];
        }
      }
      this.setObjects();
    },
    setvalue(option) {
      if (this.readonly) return;
      let code = option[this.key];
      if (this.multiple) {
        utils.toggleValue(this.codes, code);
      } else {
        this.codes = code;
      }
      this.setObjects();
      let value = this.type == 'key' ? this.codes : this.objects;
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if (this.multiple) {
        if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
      } else {
        this.dropdown.hide();
      }
    }
  },
  filters: {
    showText(key, value) {
      return value.includes(key);
    }
  },
  computed: {
    autocompleteCls() {
      let autosize = !!this.noBorder;
      if (!autosize) {
        autosize = this.autosize;
      }
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-multiple`]: this.multiple,
        [`${prefix}-no-autosize`]: !autosize,
        [`${prefix}-disabled`]: this.disabled,
        focusing: this.focusing
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
    options() {
      if (!this.datas && !this.dict) {
        log.error('Select组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      return utils.initOptions(datas, this);
    }
  }
};
</script>