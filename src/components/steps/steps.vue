<template>
  <div :class="stepsCls">
    <div v-for="(a, index) of arr" :class="{'h-steps-actived':index <= stepIndex, 'h-steps-item': true, 'h-steps-item-first': index==0, 'h-steps-item-last': index+1 == arr.length}">
      <div class="h-steps-tail" :class="{'h-steps-tail-actived': index+1 <= stepIndex}"></div>
      <div class="h-steps-content">
        <div class="h-steps-icon">
          <span v-if="a.icon" class="h-steps-icon-custom"><i :class="a.icon"></i></span>
          <span v-else class="h-steps-index">
            <i class="h-steps-index-num">{{index+1}}</i>
            <i class="h-icon-check h-steps-success"></i>            
          </span>
        </div>
        <div class="h-steps-words">
          <div class="h-steps-title">{{a[title]}}</div>
          <div class="h-steps-desc" v-if="a.desc">{{a.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

const prefix = 'h-steps';

export default {
  props: {
    dict: String,
    datas: [Object, Array],
    step: {
      type: [String, Number],
      default: 0
    },
    className: {
      type: String,
      default: 'h-tabs-default'
    }
  },
  data() {
    return {
      key: config.getOption('dict', 'keyName'),
      title: config.getOption('dict', 'titleName')
    }
  },
  computed: {
    stepsCls() {
      return {
        [`${prefix}`]: true
      }
    },
    stepIndex() {
      if (utils.isNumber(this.step)) {
        return this.step;
      }
      let index = 0;
      for (let a of this.arr) {
        if (a[this.key] == this.step) {
          return index;
        }
        index = index + 1;
      }
    },
    arr() {
      if (!this.datas && !this.dict) {
        log.error('Tab组件: datas或者dict参数最起码需要定义其中之一');
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