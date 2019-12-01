<template>
  <div :class="sliderCls">
    <div class="h-slider-container">
      <div class="h-slider-line" @mousedown="choosePosition"></div>
      <div class="h-slider-track" @mousedown="choosePosition" :style="computedTrackStyle"></div>
      <div class="h-slider-node h-slider-start-node" @click.stop @mousedown="mousedown('start', $event)" v-if="hasStart" :style="{'left': nodePosition.start}"></div>
      <div class="h-slider-node h-slider-end-node" @click.stop @mousedown="mousedown('end', $event)" :style="{'left': nodePosition.end}"></div>
      <span class="h-slider-end-node-value h-tooltip-inner-content" v-if="showtip">{{showContent(values.end)}}</span>
      <span class="h-slider-start-node-value h-tooltip-inner-content" v-if="showtip&&hasStart">{{showContent(values.start)}}</span>
    </div>
  </div>
</template>
<script>
import utils from 'heyui/src/utils/utils';
import Tooltip from 'heyui/src/plugins/tooltip';

const prefix = 'h-slider';

export default {
  name: 'hSlider',
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: [Number, Object],
      default: 0
    },
    show: Function,
    multiple: {
      type: Boolean,
      default: false
    },
    showtip: {
      type: Boolean,
      default: true
    },
    range: {
      default: () => ({
        start: 0,
        end: 100
      })
    },
    trackStyle: Object
  },
  data() {
    return {
      eventControl: {
        type: null,
        x: null,
        init: null
      },
      tooltip: {
        start: null,
        end: null
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.showtip) return;
      if (this.hasStart) {
        let startNode = this.$el.querySelector('.h-slider-start-node');
        this.tooltip.start = new Tooltip(startNode, {
          content: this.$el.querySelector('.h-slider-start-node-value'),
          theme: this.theme,
          html: true,
          trigger: 'manual hover',
          container: document.body,
          placement: this.placement
        });
      }
      let endNode = this.$el.querySelector('.h-slider-end-node');
      this.tooltip.end = new Tooltip(endNode, {
        content: this.$el.querySelector('.h-slider-end-node-value'),
        theme: this.theme,
        html: true,
        trigger: 'manual hover',
        container: document.body,
        placement: this.placement
      });
    });
  },
  methods: {
    choosePosition(event) {
      if (this.multiple) {
        return;
      }
      this.eventControl.type = 'end';
      let nodePosition = this.$el.querySelector('.h-slider-end-node').getBoundingClientRect();
      this.eventControl.x = nodePosition.left + (nodePosition.width / 2);
      this.eventControl.init = this.values['end'];
      this.mousemove(event);
      document.body.addEventListener('mousemove', this.mousemove);
      document.body.addEventListener('mouseup', this.mouseup);
      document.body.addEventListener('click', this.click);
    },
    showContent(value) {
      if (this.show) {
        return this.show.call(null, value);
      } else {
        return value || this.range.start;
      }
    },
    mousedown(type, event) {
      if (this.readonly) return;
      utils.addClass(event.target, 'h-slider-node-dragging');
      this.eventControl.type = type;
      this.eventControl.x = event.clientX;
      this.eventControl.init = this.values[type];
      document.body.addEventListener('mousemove', this.mousemove);
      document.body.addEventListener('mouseup', this.mouseup);
      document.body.addEventListener('click', this.click);
      if (this.tooltip[type]) this.tooltip[type].show();
    },
    mouseup(event) {
      event.stopPropagation();
      if (this.readonly) return;
      document.body.removeEventListener('mousemove', this.mousemove);
      document.body.removeEventListener('mouseup', this.mouseup);
      setTimeout(() => {
        document.body.removeEventListener('click', this.click);
      }, 200);
      let draggingNode = this.$el.querySelector('.h-slider-node-dragging');
      if (draggingNode) {
        utils.removeClass(draggingNode, 'h-slider-node-dragging');
      }
      let type = this.eventControl.type;
      if (this.tooltip[type]) {
        this.tooltip[type].hide();
      }
    },
    click(event) {
      event.stopPropagation();
    },
    mousemove(event) {
      if (this.readonly) return;
      let position = event.clientX - this.eventControl.x;
      if (position == 0) return;
      let nowPosition = position / this.$el.querySelector('.h-slider-line').clientWidth;
      nowPosition = parseInt(nowPosition * (this.range.end - this.range.start), 10);
      nowPosition = this.eventControl.init + nowPosition;
      let positionStep = nowPosition % this.step;
      if (positionStep != 0) {
        nowPosition = nowPosition - positionStep;
      }
      nowPosition = Math.max(nowPosition, this.range.start);
      nowPosition = Math.min(nowPosition, this.range.end);
      let nowValue = null;
      let type = this.eventControl.type;
      if (!this.hasStart) {
        nowValue = nowPosition;
        this.$emit('input', nowValue);
        this.$emit('change', nowValue);
        type = 'end';
      } else {
        nowValue = {};
        if (this.values.start > nowPosition && type == 'end') {
          type = 'start';
          nowValue = utils.extend(this.values, { start: nowPosition, end: this.values.start });
        } else if (this.values.end < nowPosition && type == 'start') {
          type = 'end';
          nowValue = utils.extend(this.values, { start: this.values.end, end: nowPosition });
        } else {
          nowValue = utils.extend(this.values, { [type]: nowPosition });
        }
      }

      if (this.eventControl.type != type) {
        utils.removeClass(this.$el.querySelector('.h-slider-node-dragging'), 'h-slider-node-dragging');
        utils.addClass(this.$el.querySelector(`.h-slider-${type}-node`), 'h-slider-node-dragging');
        if (this.tooltip[this.eventControl.type]) {
          this.tooltip[this.eventControl.type].hide();
        }
        this.eventControl.type = type;
      }

      this.$emit('input', nowValue);
      this.$emit('change', nowValue);
      let evt = document.createEvent('CustomEvent');
      evt.initCustomEvent('setvalue', true, true, nowValue);
      this.$el.dispatchEvent(evt);
      if (this.tooltip[type]) {
        this.tooltip[type].show();
        this.tooltip[type].update();
      }
    }
  },
  computed: {
    hasStart() {
      return this.multiple;
    },
    computedTrackStyle() {
      let dis = this.range.end - this.range.start;
      return Object.assign({
        left: `${parseInt((this.values.start - this.range.start) / dis * 100, 10)}%`,
        right: `${parseInt((this.range.end - this.values.end) / dis * 100, 10)}%`
      }, this.trackStyle);
    },
    nodePosition() {
      let dis = this.range.end - this.range.start;
      return {
        start: `${parseInt((this.values.start - this.range.start) / dis * 100, 10)}%`,
        end: `${100 - parseInt((this.range.end - this.values.end) / dis * 100, 10)}%`
      };
    },
    values() {
      if (!this.multiple) {
        return {
          start: this.range.start,
          end: this.value || this.range.start
        };
      }
      return utils.extend({
        start: this.range.start,
        end: this.range.start
      }, this.value);
    },
    sliderCls() {
      return {
        [`${prefix}`]: true
      };
    }
  }
};
</script>
