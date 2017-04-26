<template>
  <div :class="selectCls">
    <div :class="inputCls">
      <div class="h-select-value">
        <div v-if="multiple&&objects"
             class="h-select-multiple-tags"><span v-for="obj of objects"
                :key="obj"><span>{{obj[title]}}</span><i class="h-icon-close"
             @click.stop="setvalue(obj)"></i></span>
        </div>
        <div v-if="!multiple&&codes&&objects">{{objects[title]}}</div>
        <div v-if="!codes||codes.length==0"
             class="h-select-placeholder">{{placeholder}}</div>
      </div>
      <i class="h-icon-down"></i>
    </div>
    <div :class="groupCls">
      <ul class="h-select-ul">
        <li v-for="option of options"
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
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

const prefix = 'h-select';

export default {
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
    autosize: {
      type: Boolean,
      default: false
    },
    nullOption: {
      type: Boolean,
      default: true
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    render: Function,
    value: [Number, String, Array, Object]
  },
  data() {
    return {
      key: config.getOption('dict', 'key_field'),
      title: config.getOption('dict', 'title_field'),
      html: "select_rander_html",
      codes: null,
      objects: null,
      hasNullOption: this.nullOption && !this.multiple
      // optionsMap: {}
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
      let el = this.$el.querySelector('.h-select-input');
      let content = this.$el.querySelector('.h-select-group');
      this.dropdown = new Dropdown(el, {
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
        this.objects = this.optionsMap[this.codes];
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
        if (!utils.isNull(this.limit) && !this.codes.includes(code) && this.codes.length >= this.limit) {
          this.$Message.error(`您最多可以选${this.limit}个选项`);
          return;
        }
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
    },
    getLiCls(option) {
      let code = option[this.key];
      if (utils.isNull(code)) return {};
      return { [`${prefix}-item-selected`]: (this.multiple ? this.codes.includes(code) : this.codes == code) };
    }
  },
  filters: {
    showText(key, value) {
      return value.includes(key);
    }
  },
  computed: {
    selectCls() {
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
      }
    },
    inputCls() {
      return {
        [`${prefix}-input`]: true
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
      // let options = [];
      // if (utils.isObject(datas)) {
      //   options = utils.toArray(datas, this.key, this.title);
      // } else if (utils.isArray(datas)) {
      //   if (datas.length == 0) {
      //     options = [];
      //   } else {
      //     let data0 = datas[0];
      //     if (utils.isObject(data0)) {
      //       options = utils.copy(datas);
      //     } else {
      //       options = datas.map((item) => {
      //         return { [`${this.key}`]: item, [`${this.title}`]: item };
      //       })
      //     }
      //   }
      // }
      // if (this.render) {
      //   options.forEach((item) => {
      //     item[this.html] = this.render.call(null, item);
      //   })
      // }
      // if (!this.mutiple && this.hasNullOption) {
      //   options.unshift({ [`${this.key}`]: null, [`${this.title}`]: '请选择', [`${this.html}`]: '请选择' });
      // }
      // return options;
    }
  }
};
</script>