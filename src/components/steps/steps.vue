<template>
  <div :class="stepsCls">
    <div v-for="(a, index) of arr" :key="index" :class="{'h-steps-process':index == stepIndex, 'h-steps-actived':index < stepIndex, 'h-steps-item': true, 'h-steps-item-first': index==0, 'h-steps-item-last': index+1 == arr.length}">
      <div class="h-steps-content">
        <div class="h-steps-icon">
          <slot :item="a" :index="index" name="icon" v-if="$scopedSlots.icon"></slot>
          <span v-else-if="a.icon" class="h-steps-icon-custom"><i :class="a.icon"></i></span>
          <span v-else class="h-steps-index">
            <i class="h-steps-index-num">{{index+1}}</i>
            <i class="h-icon-check h-steps-success"></i>
          </span>
        </div>
        <div class="h-steps-words">
          <div class="h-steps-title">
            <slot :item="a" :index="index" name="title" v-if="$scopedSlots.title"></slot>
            <template v-else>
              {{a[title]}}
            </template>
          </div>
          <div class="h-steps-desc">
            <slot :item="a" :index="index" name="desc" v-if="$scopedSlots.desc"></slot>
            <template v-else-if="a.desc">
              {{a.desc}}
            </template>
          </div>
        </div>
      </div>
      <div class="h-steps-tail"></div>
    </div>
  </div>
</template>
<script>
import config from 'heyui/src/utils/config';
import utils from 'heyui/src/utils/utils';

const prefix = 'h-steps';

export default {
  name: 'hSteps',
  props: {
    dict: String,
    datas: [Object, Array],
    step: {
      type: [String, Number],
      default: 0
    },
    keyName: {
      type: String,
      default: () => config.getOption('dict', 'keyName')
    },
    titleName: {
      type: String,
      default: () => config.getOption('dict', 'titleName')
    },
    contentLayout: {
      type: String,
      default: 'vertical' // transverse
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  computed: {
    stepsCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-${this.contentLayout}`]: true
      };
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
      return index;
    },
    arr() {
      if (!this.datas && !this.dict) {
        console.error('[HeyUI Error] Steps Component: Datas or dict parameters need to be defined at least.');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      return config.initOptions(datas, this);
    }
  }
};
</script>
