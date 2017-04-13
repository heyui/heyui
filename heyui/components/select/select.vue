<template>
  <div class="h-select">
    <div class="h-select-input">
      <div class="h-select-value">
        <div v-if="mutiple&&objects"><span v-for="obj of objects" :key="obj"><span>{{obj[title]}}</span><i class="h-icon-close" @click.stop="setvalue(obj)"></i></span></div>
        <div v-if="!mutiple&&codes&&objects">{{objects[title]}}</div>
      </div>
      <i class=""></i>
    </div>
    <div :class="groupCls">
      <ul class="h-select-ul">
        <li v-for="option of options" :key="option" class="h-select-item" @click="setvalue(option)" :class="getLiCls(option)">
          <div v-if="!!render" v-html="option[html]"></div>
          <template v-else>{{option[title]}}</template>
          <i v-if="mutiple" class="h-icon-check"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Tooltip from '../../plugins/tooltip';

const prefix = 'h-select';

const watch = (obj, attr, callback) => {
  if (typeof obj.defaultValues == 'undefined') {
    obj.defaultValues = {};
    for (let p in obj) {
      if (typeof obj[p] !== 'object') {
        obj.defaultValues[p] = obj[p];
      }
    }
  }
  if (typeof obj.setAttr == 'undefined') {
    obj.setAttr = function (attr, value) {
      if (this[attr] != value) {
        this.defaultValues[attr] = this[attr];
        this[attr] = value;
        return callback(this);
      }
      return this;             
    };
  }
}

export default {
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    mutiple: {
      type: Boolean,
      default: false
    },
    datas: {
      type: [Array, Object],
      default: []
    },
    type: {
      type: [String],
      default: 'key'  //object
    },
    nullOption: {
      type: Boolean,
      default: true
    },
    placeholder: String,
    render: Function,
    value: [Number, String, Array, Object]
  },
  data() {
    return {
      key: config.key_field,
      title: config.title_field,
      html: config.render_field,
      codes: null,
      objects: null,
      optionsMap: {}
    };
  },
  watch: {
    values() {
      this.parse();
    }
  },
  beforeMount() {
    this.parse();
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el.querySelector('.h-select-input');
      let content = this.$el.querySelector('.h-select-group');
      let observer = new MutationObserver(() => {
        // log(1);
        log(1);
        content.style.width = this.$el.offsetWidth + 'px';
      });
      // log();
      content.style.width = this.$el.offsetWidth + 'px';
      observer.observe(this.$el, { attributesFilter: ['style', 'class'], attributes: true });
      this.tooltip = new Tooltip(el, {
        content,
        trigger: 'click',
        triggerOnBody: true,
        html: true,
        template: `<div role="select" class="h-select-dropdown"><div class="h-select-arrow"></div><div class="h-select-inner"></div></div>`,
        arrowSelector: '.h-select-arrow, .h-select__arrow',
        innerSelector: '.h-select-inner, .h-select__inner',
        container: document.body,
        delay: 300,
        onUpdate: () => {
          
        }
      });
    });
  },
  methods: {
    setObjects() {
      if (this.mutiple) {
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
      if (this.mutiple) {
        let values = this.value || [];
        this.codes = values.map((item) => {
          return this.type == 'key' ? item : item[this.key];
        })
      } else {
        this.codes = this.value;
      }
      this.setObjects();
    },
    setvalue(option) {
      if (this.readonly) return;
      let code = option[this.key];
      if (this.mutiple) {
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
    },
    getLiCls(option) {
      let code = option[this.key];
      if (utils.isNull(code)) return {};
      return { [`${prefix}-item-selected`]: (this.mutiple ? this.codes.includes(code) : this.codes == code) };
    }
  },
  filters: {
    showText(key, value) {
      return value.includes(key);
    }
  },
  computed: {
    groupCls() {
      return {
        'h-select-group': true,
        [`${prefix}-mutiple`]: this.mutiple
      }
    },
    options() {
      // config.key_field
      // config.title_field
      let options = [];
      if (utils.isObject(this.datas)) {
        options = utils.toArray(this.datas, config.key_field, config.title_field);
      } else if (utils.isArray(this.datas)) {
        if (this.datas.length == 0) {
          options = [];
        } else {
          let data0 = this.datas[0];
          if (utils.isObject(data0)) {
            options = utils.copy(this.datas);
          } else {
            options = this.datas.map((item) => {
              return { [`${config.key_field}`]: item, [`${config.title_field}`]: item };
            })
          }
        }
      }
      if (this.render) {
        options.forEach((item) => {
          options[config.render_field] = this.render.call(null, item);
        })
      }
      this.optionsMap = utils.toObject(options, this.key);
      if (!this.mutiple && this.nullOption) {
        options.unshift({ [`${config.key_field}`]: null, [`${config.title_field}`]: '请选择' });
      }
      return options;
    }
  }
};
</script>