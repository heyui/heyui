<template>
  <Tooltip ref="tooltip" :theme="theme" :disabled="disabled" :placement="placement" trigger="click">
    <slot></slot>
    <template v-slot:content>
      <div class="h-poptip">
        <div class="h-poptip-content"><i class="yellow-color h-icon-warn"></i><i class="h-poptip-split"></i>{{ content }}</div>
        <div class="clearfix">
          <div class="float-right">
            <button type="button" class="h-btn h-btn-text h-btn-xs" @click="close">{{ hlang('h.common.cancel') }}</button
            ><button type="button" class="h-btn h-btn-text h-btn-xs h-btn-primary" @click="trigger">{{ hlang('h.common.confirm') }}</button>
          </div>
        </div>
      </div>
    </template>
  </Tooltip>
</template>
<script>
import Tooltip from 'heyui/components/tooltip';
import Locale from 'heyui/mixins/locale';

export default {
  name: 'HPoptip',
  components: { Tooltip },
  emits: ['confirm'],
  mixins: [Locale],
  props: {
    content: String,
    placement: {
      type: String,
      default: 'top'
    },
    theme: {
      type: String,
      default: 'white'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$refs.tooltip.hide();
    },
    trigger() {
      this.$emit('confirm');
      this.close();
    }
  }
};
</script>
