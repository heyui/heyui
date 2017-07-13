<template>
  <div class="h-category-modal">
    <header v-if="params.title">{{params.title}}</header>
    <div>
      <div class="h-panel-bar">
        <div class="h-category-multiple-tags" v-if="param.multiple">
          <span v-for="tag of param.objects" :key="tag"><span>{{tag.title}}</span><i class="h-icon-close"
            @click.stop="remove(tag)"></i></span>
        </div>
        <div v-else>
          <span v-if="param.object">{{param.object.title}}</span>
        </div>
      </div>
      <div class="h-panel-bar">
        <Search v-model="search" trigger="input"></Search>
      </div>
      <Tabs v-font="13" :datas="tabs" v-model="tab" keyName="key" titleName="title" @change="focusTab"></Tabs>
      <div class="h-panel-body">
        <Row :space="10">
         <Col :width="8" v-for="data of list" :key="data">
            <div class="text-ellipsis h-category-item" @click="openNew(data)"><Checkbox v-if="param.multiple&&!data.status.disabled" :checked="param.objects.indexOf(data)>-1||param.object===data" @click.native="change(data, $event)"></Checkbox><i class="h-split"></i>{{data.title}}</div>
         </Col>
        </Row>
      </div>
    </div>
    <footer>
      <Button color="primary" @click="confirm">确认</Button>
      <Button @click="close">取消</Button>
    </footer>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  props: {
    param: Object
  },
  data() {
    return {
      params: this.param.param,
      list: this.param.categoryDatas,
      search: '',
      tabs: [{title: "全部", key: '----'}],
      tab: '----'
    };
  },
  mounted() {
  },
  methods: {
    change(data,event) {
      event.stopPropagation();
      event.preventDefault();
      if (this.param.multiple) {
        this.param.objects = utils.toggleValue(this.param.objects, data);
      } else {
        this.param.object = data;
      }
    },
    openNew(data) {
      if(data.children&&data.children.length){
        this.tabs.push(data);
        this.tab = data.key;
        this.list = data.children;
      }
    },
    remove(obj) {
      this.param.objects.splice(this.objects.indexOf(obj), 1);
    },
    focusTab(tab, index){
      this.tab = tab.key;
      this.tabs.splice(index+1, 1);
      if(tab.key === '----'){
        this.list = this.param.categoryDatas;
      }else{
        this.list = tab.children;
      }
    },
    confirm() {

    },
    close() {
      this.$emit("close");
    }
  },
  computed: {
  }
};
</script>
