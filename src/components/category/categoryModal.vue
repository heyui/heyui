<template>
  <div class="h-category-modal">
    <header class="relative" v-if="params.title">{{params.title}}
    </header>
    <div>
      <div class="h-panel-bar">
        <div class="h-category-multiple-tags" v-if="param.multiple" style="padding-right: 180px">
          <span v-for="tag of param.objects" :key="tag"><span>{{tag.title}}</span><i class="h-icon-close"
            @click.stop="remove(tag)"></i></span>
            <i class="gray-color" v-if="param.objects.length==0">暂时无数据</i>
        </div>
        <div v-else>
          <span v-if="param.object">{{param.object.title}}</span>
          <i v-else class="gray-color">暂时无数据</i>
        </div>
        <Search v-if="param.filterable" v-model="searchText" trigger="input" class="h-panel-right"></Search>
      </div>
      <!-- <div class="h-panel-bar" v-if="param.filterable">
        
      </div> -->
      <Tabs v-if="searchText == ''" v-font="13" :datas="tabs" v-model="tab" keyName="key" titleName="title" @change="focusTab"></Tabs>
      <div class="h-panel-body">
        <Row :space="10">
          <template  v-if="searchText==''">
            <Col :width="8" v-for="data of list" :key="data">
                <div class="text-ellipsis h-category-item" @click="openNew(data)"><Checkbox v-if="data.status.checkable" :checked="param.objects.indexOf(data)>-1||param.object===data" @click.native="change(data, $event)"></Checkbox><i class="h-split"></i>{{data.title}} <span v-if="data.children.length">({{data.children.length}})</span></div>
            </Col>
          </template>
         <Col v-else :width="8" v-for="data of searchlist" :key="data">
            <div class="text-ellipsis h-category-item" @click.stop="change(data)"><Checkbox v-if="data.status.checkable" :checked="param.objects.indexOf(data)>-1||param.object===data" @click.native="change(data, $event)"></Checkbox><i class="h-split"></i>{{data.title}}</div>
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
const topMenu = "-------";

export default {
  props: {
    param: Object
  },
  data() {
    return {
      params: this.param.param,
      list: this.param.categoryDatas,
      searchText: '',
      tabs: [{title: "全部", key: topMenu}],
      tab: topMenu,
      tabIndex: 0
    };
  },
  mounted() {
  },
  methods: {
    change(data,event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if(data.status.checkable === false) {
        return;
      }
      if (this.param.multiple) {
        if(this.param.objects.length >= this.param.limit && this.param.objects.indexOf(data) == -1) {
          this.$Message.error(`您最多可以选择${this.param.limit}条数据。`);
          return;
        }
        this.param.objects = utils.toggleValue(this.param.objects, data);
      } else {
        this.param.object = data;
      }
    },
    openNew(data) {
      if (data.children&&data.children.length) {
        this.tabs.splice(this.tabIndex+1, 1, data);
        this.tab = data.key;
        this.list = data.children;
      } else {
        this.change(data);
      }
    },
    remove(obj) {
      this.param.objects.splice(this.param.objects.indexOf(obj), 1);
    },
    focusTab(tab, index){
      this.tab = tab.key;
      this.tabIndex = index;
      if(tab.key === topMenu){
        this.list = this.param.categoryDatas;
      }else{
        this.list = tab.children;
      }
    },
    confirm() {
      this.$emit('event', 'setvalue', this.param);
      this.close();
    },
    close() {
      this.$emit("close");
    }
  },
  computed: {
    searchlist() {
      let list = [];
      for(let key in this.param.categoryObj){
        let item = this.param.categoryObj[key];
        if(item.status.checkable && item.title.indexOf(this.searchText) != -1){
          list.push(item);
        }
      }
      return list;
    }
  }
};
</script>
