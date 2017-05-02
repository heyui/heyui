<template>
  <div :class="autocompleteCls">
    <div class="h-autocomplete-show">
      <template v-if="multiple"><span v-for="obj of objects"
              :key="obj"><span>{{obj[title]}}</span><i class="h-icon-close"
           @click.stop="remove(obj)"></i></span>
        <input v-if="!disabled"
               type="text"
               class="h-autocomplete-input"
               @focus="focus"
               :value="showValue"
               @blur="blur"
               @keyup="handle"
               :placeholder="placeholder" />
        <i class="h-icon-loading"
           v-if="loading"></i>
      </template>
      <template v-if="!multiple">
        <input type="text"
               :disabled="disabled"
               class="h-autocomplete-input"
               @focus="focus"
               :value="showValue"
               @blur="blur"
               @keyup="handle"
               :placeholder="placeholder" />
        <i class="h-icon-loading"
           v-if="loading"></i>
      </template>
    </div>
  
    <!--:class="{'h-autocomplete-item-selected': result==nowSelected}"-->
    <div :class="groupCls">
      <ul class="h-autocomplete-ul">
        <li v-for="(result, index) of results"
            :key="result"
            class="h-autocomplete-item"
            :class="{'h-autocomplete-item-selected': index == nowSelected}"
            @click="picker(result)">
          <div v-if="!!result.html"
               v-html="result.html"></div>
          <template v-else>{{result.title}}</template>
        </li>
        <li v-if="results.length==0&&startResult"
            v-color:gray
            class="text-center">{{emptyContent}}</li>
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
    mustMatch: {
      type: Boolean,
      default: true
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
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: [Number, String, Array, Object],
    options: Object,
    show: String,
    emptyContent: {
      type: [String, Object],
      default: "未搜索到相关数据"
    }
  },
  data() {
    return {
      key: config.getOption('dict', 'key_field'),
      title: config.getOption('dict', 'title_field'),
      html: "autocomplete_rander_html",
      focusing: false,
      objects: [],
      object: { key: null, title: this.show, value: null },
      nowSelected: -1,
      tempValue: null,
      searchValue: null,
      loading: false,
      param: utils.extend({}, config.getOption("autocomplete.default"), this.options),
      loadDatas: []
    };
  },
  watch: {
    value() {
      // this.parse();
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
    parse() {
      if (this.multiple) {
        let os = [];
        if (utils.isArray(this.value) && this.value.length > 0) {
          for (let v of this.value) {
            os.push(this.getValue(v));
          }
        }
        this.objects = os;
      } else {
        let value = null;
        if (this.type == 'key') {
          value = {
            [this.param.key]: this.value,
            [this.param.title]: this.show,
          }
        } else {
          value = this.value;
        }
        utils.extend(this.object, this.getValue(value));
      }
    },
    dispose() {
      let value = null;
      if (this.multiple) {
        value = [];
        if (utils.isArray(this.objects) && this.objects.length > 0) {
          for (let o of this.objects) {
            value.push(this.type == 'key' ? o.key : o.value);
          }
        }
      } else {
        value = this.type == 'key' ? this.object.key : this.object.value;
        if (utils.isNull(this.object.value)) {
          if (!this.mustMatch) {
            if (utils.isNull(this.object.value) && utils.isFunction(this.param.getEmpty)) {
              value = this.param.getEmpty.call(this.param, this.object.title);
            }
          } else {
            this.object.title = null;
          }
        }
      }
      return value;
    },
    getValue(item) {
      return this.param.getValue.call(this.param, item);
    },
    focus() {
      this.focusing = true;
      if (this.multiple) this.searchValue = null;
    },
    blur(event) {
      this.focusing = false;
      let value = event.target.value;
      if (value == '') {
        this.object.key = null;
        this.object.title = null;
        this.object.value = null;
      }
      setTimeout(() => {
        value = event.target.value;
        if (value != this.object.title) {
          this.setvalue();
        }
      }, 100);
    },
    handle(event) {
      if (this.dropdown) {
        this.dropdown.show();
      }
      if (event.code == 'ArrowUp') {
        if (this.nowSelected > 0) {
          this.nowSelected -= 1;
        }
      } else if (event.code == 'ArrowDown') {
        if (this.nowSelected < this.results.length - 1) {
          this.nowSelected += 1;
        }
      } else if (event.code == 'Enter') {
        if (this.nowSelected >= 0) {
          this.add(this.results[this.nowSelected]);
          this.setvalue();
        }
      } else {
        let value = event.target.value;
        this.tempValue = value;
        if (value.length >= this.param.minWord) {
          if (utils.isFunction(this.param.loadData)) {
            this.loading = true;
            this.param.loadData.call(this.param, value, (datas) => {
              if (event.target.value === value) {
                this.loading = false;
                this.loadDatas = datas;
                if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
              }
            });
          }
        }
        this.searchValue = value;
        if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
      }
    },
    add(data) {
      if (this.multiple) {
        this.objects.push(utils.copy(data));
      } else {
        this.object = utils.copy(data);
      }
    },
    remove(object) {
      this.objects.splice(this.objects.indexOf(object), 1);
      this.setvalue();
    },
    picker(data) {
      // log('picker');
      this.add(data);
      this.setvalue();
    },
    setvalue() {
      if (this.disabled) return;
      this.nowSelected = -1;
      this.tempValue = null;
      let value = this.dispose();
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if (this.dropdown.popperInstance) this.dropdown.hide();
    },
    update() {
      this.parse();
    }
  },
  computed: {
    showValue() {
      return this.tempValue == null ? this.object.title : this.tempValue;
    },
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
    startResult() {
      return this.param.minWord == 0 ? true : (!utils.isNull(this.searchValue) && this.searchValue.length >= this.param.minWord);
    },
    results() {
      // if (!this.startResult) {
        // if (this.dropdown) {
        //   this.dropdown.disabled();
        //   this.dropdown.hide();
        // }
        // return [];
      // }
      // if (this.dropdown) {
      //   this.dropdown.enabled();
      //   if (this.dropdown.popperInstance) {
      //     this.dropdown.popperInstance.show();
      //   } else {
      //     this.dropdown.show();
      //   }
      // }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      if (utils.isNull(datas)) {
        datas = this.loadDatas;
      } else {
        datas = utils.initOptions(datas, this);
        if (this.searchValue) {
          let searchValue = this.searchValue.toLocaleLowerCase();
          datas = datas.filter((item) => {
            return (item[this.html] || item[this.title]).toLocaleLowerCase().indexOf(searchValue) != -1;
          });
        }
      }
      if (this.objects.length > 0) {
        let keyArray = utils.getArray(this.objects, 'key');
        datas = datas.filter((item) => {
          return keyArray.indexOf(item.key) == -1;
        });
      }
      if (this.maxList) {
        datas.splice(0, this.maxList);
      }
      let results = [];
      for (let data of datas) {
        results.push(this.getValue(data));
      }
      return results;
    }
  }
};
</script>