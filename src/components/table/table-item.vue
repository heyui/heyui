<template>
  <th :class="cls" @click="triggerSort()">
    <div v-if="tooltip" v-tooltip :placement="placement" :content="content || title">{{title}}</div>
    <div v-else>{{title}}</div>
    <div class="h-table-sort-handler" v-if="sort">
      <div class="h-table-sort-asc" v-if="sortStatus.type == 'asc' && sortStatus.prop == prop" :class="{'sort-selected': sortStatus.type == 'asc' && sortStatus.prop == prop}"><i class="h-icon-top"></i></div>
      <div class="h-table-sort-desc" v-else :class="{'sort-selected': sortStatus.type == 'desc' && sortStatus.prop == prop}"><i class="h-icon-down"></i></div>
    </div>
  </th>
</template>

<script>
import utils from '../../utils/utils';
export default {
  name: 'hTableItem',
  props: {
    title: String,
    width: Number,
    fixed: String,
    label: String,
    prop: String,
    align: String,
    tooltip: {
      type: Boolean,
      default: false
    },
    sort: {
      type: Boolean,
      default: false
    },
    placement: String,
    content: String
  },
  data(){
    return {
      sortStatus: {type: null, prop: null}
    };
  },
  beforeMount(){
    this.init();
  },
  beforeDestroy(){
    this.init();
  },
  // render(h) {
  //   let directives = [];
  //   let attrs = {};
  //   if( this.tooltip ){
  //     directives.push({
  //       name: 'tooltip',
  //     });
  //     if(!utils.isNull(this.content)){
  //       attrs.content = this.content;
  //     }
  //     if(this.placement){
  //       attrs.placement = this.placement;
  //     }
  //   }
  //   return h(
  //     'th', {
  //       'class': {
  //         [`text-${this.align}`]: !!this.align
  //       },
  //       directives, attrs
  //     }, [this.title]
  //   )
  // },
  methods: {
    triggerSort() {
      if(!this.sort) return false;
      let sort = utils.copy(this.sortStatus);
      if(this.sortStatus.type && this.sortStatus.prop == this.prop) {
        sort.type = this.sortStatus.type == 'asc' ? 'desc' : 'asc';
      } else {
        sort.type = 'desc';
        sort.prop = this.prop
      }
      let parent = this.$parent;
      if (parent.$options._componentTag == 'hTable') {
        this.sortStatus = parent.triggerSort(sort);
      }
    },
    init() {
      let parent = this.$parent;
      if (parent.$options._componentTag == 'hTable') {
        parent.refresh();
      }
    }
  },
  computed: {
    cls() {
      return {
        [`text-${this.align}`]: !!this.align,
        pointer: this.sort
      };
    }
  },
  watch: {
    title(){
      this.init();
    },
    width(){
      this.init();
    },
    fixed(){
      this.init();
    },
    label(){
      this.init();
    },
    prop(){
      this.init();
    },
    align(){
      this.init();
    },
  }
}
</script>

