<template>
  <div :class="autocompleteCls">
    <div class="h-autocomplete-show"
         :class="{'focusing':focusing}">
      <template v-if="multiple"><span v-for="obj of objects"
              :key="obj"><span>{{obj.title}}</span><i class="h-icon-close"
           @click.stop="remove(obj)"
           v-if="!disabled"></i></span>
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
        <li v-if="results.length==0"
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
    },
    config: String
  },
  data() {
    let param = {};
    if (this.config) {
      param = utils.extend({}, config.getOption("autocomplete.default"), config.getOption(`autocomplete.configs.${this.config}`), this.options);
    } else {
      param = utils.extend({}, config.getOption("autocomplete.default"), this.options);
    }
    return {
      html: "autocomplete_rander_html",
      focusing: false,
      objects: [],
      object: { key: null, title: this.show, value: null },
      nowSelected: -1,
      tempValue: null,
      searchValue: null,
      oldValue: this.value,
      loading: false,
      content: null,
      param,
      loadDatas: []
    };
  },
  watch: {
    value() {
      if (this.oldValue == this.value) {
        return;
      }
      this.parse();
    },
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    },
    nowSelected() {
      this.$nextTick(() => {
        if (this.content && this.nowSelected > -1) {
          let dom = this.content.querySelector('.h-autocomplete-item-selected');
          let uldom = this.content.querySelector('.h-autocomplete-ul');
          if (dom && uldom) {
            if ((dom.offsetTop + dom.offsetHeight) - this.content.scrollTop > this.content.offsetHeight) {
              this.content.scrollTop = (dom.offsetTop + dom.offsetHeight) - this.content.offsetHeight;
            } else if (dom.offsetTop - this.content.scrollTop < 0) {
              this.content.scrollTop = dom.offsetTop;
            }
          }
        }
      })
    }
  },
  beforeMount() {
    this.parse();
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el.querySelector('.h-autocomplete-show');
      this.content = this.$el.querySelector('.h-autocomplete-group');
      this.dropdown = new Dropdown(el, {
        trigger: '',
        triggerOnce: true,
        content: this.content,
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
      let inputValue = null;
      if (!this.mustMatch) {
        if (this.type == 'key') {
          inputValue = this.showValue;
        } else {
          inputValue = { [this.param.title]: this.showValue };
        }
      }
      if (this.multiple) {
        value = [];
        if (!utils.isNull(this.showValue)) {
          if (this.type == 'key') {
            this.objects.push(inputValue);
          } else {
            this.objects.push(this.getValue(inputValue));
          }
        }
        if (utils.isArray(this.objects) && this.objects.length > 0) {
          for (let o of this.objects) {
            value.push(this.type == 'key' ? o.key : o.value);
          }
        }
      } else {
        value = this.type == 'key' ? this.object.key : this.object.value;
        if (utils.isNull(value) && !utils.isNull(inputValue)) {
          value = inputValue;
        }
      }
      return value;
    },
    getValue(item) {
      if (utils.isFunction(this.param.getValue)) {
        return this.param.getValue.call(this.param, item);
      } else {
        return utils.getValue(item, this.param);
      }
    },
    focus(event) {
      this.focusing = true;
      if (this.multiple) this.searchValue = null;
      this.search(event.target);
    },
    blur(event) {
      this.focusing = false;
      let value = event.target.value;
      setTimeout(() => {
        value = event.target.value || null;
        if (value != this.object.title) {
          this.setvalue();
        }
      }, 100);
    },
    handle(event) {
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
        } else if (this.multiple) {
          this.setvalue();
        }
      } else {
        this.search(event.target);
      }
    },
    search(target) {
      let value = target.value;
      this.tempValue = value || null;
      if (value != this.object.title) {
        this.object.key = null;
        this.object.title = null;
        this.object.value = null;
      }
      if (value.length >= this.param.minWord) {
        if (this.dropdown) {
          this.dropdown.show();
        }
        if (utils.isFunction(this.param.loadData)) {
          this.loading = true;
          this.param.loadData.call(this.param, value, (datas) => {
            if (target.value === value) {
              this.loading = false;
              this.loadDatas = datas;
              if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
            }
          });
        }
      }
      this.searchValue = value;
      if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
    },
    add(data) {
      if (this.multiple) {
        this.objects.push(utils.copy(data));
      } else {
        this.object = utils.copy(data);
      }
      this.tempValue = null;
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
      let value = this.oldValue = this.dispose();
      if (this.mustMatch || this.object.key || this.multiple) {
        this.tempValue = null;
      }
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if (this.dropdown.popperInstance) this.dropdown.hide();
    },
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
    results() {
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      if (utils.isNull(datas)) {
        datas = this.loadDatas;
      } else {
        datas = utils.initOptions(datas, this);
        if (this.searchValue) {
          let searchValue = this.searchValue.toLowerCase();
          datas = datas.filter((item) => {
            return (item.html || item.title).toLowerCase().indexOf(searchValue) != -1;
          });
        }
      }
      if (this.objects.length > 0) {
        let keyArray = utils.getArray(this.objects, 'key').filter(item => !utils.isNull(item));
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