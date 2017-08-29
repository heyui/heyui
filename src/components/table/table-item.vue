<script>
import utils from '../../utils/utils';
export default {
  name: 'tableItem',
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
    placement: String,
    content: String
  },
  data(){
    return {};
  },
  beforeMount(){
    this.init();
  },
  beforeDestroy(){
    this.init();
  },
  render(h) {
    let directives = [];
    let attrs = {};
    if( this.tooltip ){
      directives.push({
        name: 'tooltip',
      });
      if(!utils.isNull(this.content)){
        attrs.content = this.content;
      }
      if(this.placement){
        attrs.placement = this.placement;
      }
    }
    return h(
      'th', {
        'class': {
          [`text-${this.align}`]: !!this.align
        },
        directives, attrs
      }, [this.title]
    )
  },
  methods: {
    init() {
      let parent = this.$parent;
      if (parent.$options._componentTag == 'Table') {
        parent.refresh();
      }
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

