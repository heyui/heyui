<template>
  <div :class="categoryCls" :disabled="disabled">
    <div class="h-category-show" @click="openPicker">
      <div v-if="multiple&&objects.length" class="h-category-multiple-tags"><span v-for="obj of objects" :key="obj.key"><span>{{obj.title}}</span><i
            class="h-icon-close" @click.stop="remove(obj)" v-if="!disabled"></i></span>
      </div>
      <div v-else-if="!multiple&&object" class="h-category-value-single">{{object.title}}</div>
      <div v-else class="h-category-placeholder">{{showPlaceholder}}</div>
      <i class="h-icon-down"></i>
    </div>
  </div>
</template>
<script>
  import config from '../../utils/config';
  import utils from '../../utils/utils';

  import categoryModal from './categoryModal';
import func from '../../utils/config';

  const prefix = 'h-category';

  export default {
    name: 'hCategory',
    props: {
      option: Object,
      multiple: {
        type: Boolean,
        default: false
      },
      type: {
        type: [String],
        default: 'key' //object
      },
      disabled: {
        type: Boolean,
        default: false
      },
      limit: Number,
      placeholder: {
        type: String,
      },
      filterable: {
        type: Boolean,
        default: true
      },
      value: [Number, String, Array, Object],
      config: String
    },
    data() {
      return {
        globalloading: false,
        loading: true,
        objects: [],
        object: null,
        categoryDatas: [],
        categoryObj: {},
        searchValue: null
      };
    },
    mounted() {
      this.initCategoryDatas();
    },
    watch: {
      value() {
        this.parse();
      },
      'option.datas': function () {
        this.initCategoryDatas();
      }
    },
    methods: {
      openPicker() {
        let that = this;
        if (this.disabled) return;
        this.$Modal({
          width: 600,
          hasDivider: true,
          component: {
            vue: categoryModal,
            data: {
              param: this.param,
              objects: [...this.objects],
              object: utils.copy(this.object),
              categoryDatas: this.categoryDatas,
              categoryObj: this.categoryObj,
              multiple: this.multiple,
              limit: this.limit,
              filterable: this.filterable
            }
          },
          events: {
            setvalue(modal, data) {
              that.objects = data.objects;
              that.object = data.object;
              that.setvalue();
            }
          }
        })
      },
      remove(obj) {
        this.objects.splice(this.objects.indexOf(obj), 1);
        this.setvalue();
      },
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
          this.object = this.getValue(this.value);
        }
      },
      getValue(item) {
        if (utils.isNull(item)) {
          return null
        }
        if (this.type == 'key') {
          let obj = this.categoryObj[item];
          return obj;
        } else {
          let obj = this.categoryObj[item[this.param.keyName]];
          return obj;
        }
      },
      dispose() {
        if (this.multiple) {
          return this.objects.map(item => this.type == 'key' ? item.key : item.value);
        } else if (this.object) {
          return this.type == 'key' ? this.object.key : this.object.value;
        }
        return null;
      },
      setvalue() {
        let value = this.dispose();
        this.$emit('input', value);
        this.$emit('change', utils.copy(this.multiple ? this.objects : this.object));
        let event = document.createEvent("CustomEvent");
        event.initCustomEvent("setvalue", true, true, value);
        this.$el.dispatchEvent(event);
      },
      initCategoryDatas() {
        let datas = [];
        let isInited = false;
        if (this.config) {
          let categoryObj = this.param.categoryObj;
          if (categoryObj) {
            isInited = true;
            this.categoryObj = categoryObj;
            this.categoryDatas = [...this.param.datas];
          }
        }
        if (!isInited) {
          if (utils.isArray(this.param.datas)) {
            datas = this.param.datas;
          }
          if (utils.isFunction(this.param.datas)) {
            datas = this.param.datas.call(null);
          }
          this.categoryDatas = this.initDatas(datas);
          if (this.config) {
            config.config(`category.configs.${this.config}.categoryObj`, this.categoryObj);
            config.config(`category.configs.${this.config}.datas`, this.categoryDatas);
          }
        }
        this.parse();
      },
      initDatas(datas) {
        let list = utils.copy(datas);
        if (this.param.dataMode == 'list' && datas.length > 0) {
          list = utils.generateTree(list, this.param);
        }
        return this.initTreeModeData(list);
      },
      initTreeModeData(list, parentKey) {
        let datas = [];
        for (let data of list) {
          let obj = {
            key: data[this.param.keyName],
            title: data[this.param.titleName],
            value: data,
            parentKey,
            status: {
              opened: false,
              selected: false,
              checkable: data.checkable === false ? false : true
            }
          };
          let children = data[this.param.childrenName] || [];
          obj[this.param.childrenName] = this.initTreeModeData(children, obj.key);
          this.categoryObj[obj.key] = obj;
          datas.push(obj);
        }
        return datas;
      },
    },
    computed: {
      showPlaceholder() {
        return this.placeholder || this.t('h.category.placeholder');
      },
      param() {
        if (this.config) {
          return utils.extend({}, config.getOption("category.default"), config.getOption(
            `category.configs.${this.config}`), this.option);
        } else {
          return utils.extend({}, config.getOption("category.default"), this.option);
        }
      },
      categoryCls() {
        return {
          [`${prefix}`]: true,
          [`${prefix}-input-border`]: true,
          [`${prefix}-no-autosize`]: true,
          [`${prefix}-multiple`]: this.multiple,
          [`${prefix}-disabled`]: this.disabled,
        }
      },
    }
  };
</script>