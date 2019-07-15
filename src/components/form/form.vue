<template>
  <div :class="formCls">
    <slot></slot>
  </div>
</template>
<script>
import Validator from 'heyui/src/plugins/validator';
import utils from 'heyui/src/utils/utils';
import ScrollIntoView from 'heyui/src/plugins/scroll-into-view';
import Message from 'heyui/src/plugins/message';

const prefixCls = 'h-form';

const findDomUtil = function (target, utilDom) {
  let now = target;
  while (now != utilDom) {
    if (utils.hasClass(now, 'h-form-item') && now.getAttribute('prop')) {
      return now;
    }
    now = now.parentElement;
  }
  return null;
};

export default {
  name: 'hForm',
  props: {
    top: {
      type: Number
    },
    topOffset: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'single' // inline,single,twocolumn
    },
    model: [Object, Array],
    labelWidth: {
      type: Number,
      default: 80
    },
    rules: Object,
    labelPosition: {
      type: String,
      default: 'right' // left,right
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showErrorTip: {
      type: Boolean,
      default: false
    },
    validOnChange: {
      type: Boolean,
      default: true
    }
  },
  provide: function () {
    return {
      validField: this.validField,
      requireds: this.requireds,
      removeProp: this.removeProp,
      setConfig: this.setConfig,
      updateErrorMessage: this.updateErrorMessage,
      updateProp: this.updateProp,
      labelWidth: this.labelWidth,
      params: this.childParams
    };
  },
  data() {
    return {
      messages: {},
      dynamicRequireds: [],
      requireds: [],
      validator: null,
      childParams: {
        mode: this.mode
      }
    };
  },
  beforeMount() {
    if (this.model && this.rules) this.validator = new Validator(this.rules);
  },
  destroyed() {
    if (this.validator) {
      this.validator.destroy();
    }
  },
  mounted() {
    this.initRequires();
    this.$nextTick(() => {
      this.$el.addEventListener('blur', (event) => {
        if (event.target.tagName == 'INPUT' || event.target.tagName == 'TEXTAREA') {
          this.trigger(event.target);
        }
      }, true);
      this.$el.addEventListener('setvalue', (event) => {
        this.trigger(event.target);
      });
    });
  },
  watch: {
    mode() {
      this.childParams.mode = this.mode;
    },
    rules: {
      handler() {
        if (this.validator) {
          if (this.rules) this.validator.updateRule(this.rules);
          this.dynamicRequireds.forEach(item => {
            this.validator.setConfig(item, { required: true });
          });
        } else if (this.model && this.rules) {
          this.validator = new Validator(this.rules);
        }
        this.initRequires();
      },
      deep: true
    }
  },
  methods: {
    initRequires() {
      this.requireds.splice(0);
      if (this.rules) {
        let validRequiredProps = utils.toArray(this.rules.rules, 'key').filter(item => item.required === true).map(item => item.key);
        this.requireds.push(...(this.rules.required || []), ...validRequiredProps, ...this.dynamicRequireds);
      }
    },
    reset() {
      console.warn('[HeyUI WARNING] Form Component: form.reset() will be decapitated, please use method form.resetValid()');
      for (let m in this.messages) {
        this.messages[m].valid = true;
      }
    },
    resetValid() {
      for (let m in this.messages) {
        this.messages[m].valid = true;
      }
    },
    trigger(target) {
      if (!this.validOnChange) {
        return false;
      }
      let formItem = findDomUtil(target, this.$el);
      if (formItem && formItem.getAttribute('validable') == 'true') {
        this.validField(formItem.getAttribute('prop'));
      }
    },
    validField(prop) {
      if (!prop || !this.validator || !this.model) {
        return {
          valid: true
        };
      }
      let returnResult = this.validator.validField(prop, this.model, {
        next: (result) => {
          utils.extend(true, this.messages, result);
        }
      });
      utils.extend(true, this.messages, returnResult);
      return utils.extend({}, this.messages[prop]);
    },
    validFieldJs(prop, next) {
      if (!prop || !this.validator || !this.model) {
        return {
          valid: true
        };
      }
      let defaultM = this.messages[prop];
      let returnResult = this.validator.validField(prop, this.model, {
        next: () => {
          next(utils.extend({}, defaultM, returnResult[prop]));
        }
      });
      return utils.extend({}, defaultM, returnResult[prop]);
    },
    setConfig(prop, options) {
      let index = this.dynamicRequireds.indexOf(prop);
      if (options.required) {
        if (index == -1) {
          this.dynamicRequireds.push(prop);
        }
      } else if (index > -1) {
        this.dynamicRequireds.splice(index, 1);
      }
      this.initRequires();
      if (!this.validator) return false;
      this.validator.setConfig(prop, options);
    },
    updateErrorMessage(prop, label) {
      let message = {
        valid: true,
        message: null,
        label
      };
      if (this.messages[prop]) {
        Object.assign(this.messages[prop], message);
        return this.messages[prop];
      }
      this.messages[prop] = message;
      return this.messages[prop];
    },
    updateProp(prop, oldProp) {
      let message = utils.copy(this.messages[oldProp]);
      if (utils.isNull(message)) {
        message = {
          valid: true,
          message: null
        };
      }
      this.messages[prop] = message;
      return message;
    },
    removeProp(prop) {
      let index = this.dynamicRequireds.indexOf(prop);
      if (index > -1) {
        this.dynamicRequireds.splice(index, 1);
      }
      this.setConfig(prop, { required: false });
    },
    renderMessage(returnResult) {
      let isSuccess = true;
      for (let r in returnResult) {
        if (!returnResult[r].valid) {
          isSuccess = false;
          break;
        }
      }
      utils.extend(true, this.messages, returnResult);
      let result = {
        result: isSuccess,
        messages: utils.toArray(this.messages, 'prop').filter(item => !item.valid)
      };
      return result;
    },
    tipError(result) {
      if (result && !result.result) {
        let m = result.messages[0];
        if (this.showErrorTip) {
          if (m.type == 'base') {
            Message.error(`${m.label}${m.message}`);
          } else {
            Message.error(`${m.message}`);
          }
        }
        this.$nextTick(() => {
          let firstError = this.$el.querySelector(`.h-form-item-valid-error[prop='${m.prop}']`);
          if (firstError) {
            ScrollIntoView(firstError, {
              time: 500,
              align: {
                top: this.top,
                topOffset: this.topOffset
              }
            });
          }
        });
      }
    },
    validAsync() {
      return new Promise((resolve) => {
        let returnResult = this.valid((result) => {
          let asyncResult = this.renderMessage(result);
          if (returnResult && returnResult.result) {
            this.tipError(asyncResult);
          }
          resolve(asyncResult);
        });
      });
    },
    valid(next) {
      if (!this.validator || !this.model) {
        return {
          result: true,
          messages: []
        };
      }
      let returnResult = this.validator.valid(this.model, (result) => {
        utils.extend(true, this.messages, result);
      }, (result) => {
        if (next) {
          next.call(null, result);
        }
      });
      let result = this.renderMessage(returnResult);
      this.tipError(result);
      return result;
    }
  },
  computed: {
    formCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${this.mode}`]: true,
        [`${prefixCls}-label-${this.labelPosition}`]: !!this.labelPosition,
        [`${prefixCls}-readonly`]: this.readonly
      };
    }
  }
};
</script>
