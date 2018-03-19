<template>
  <div>
    <p>
      <button class="h-btn h-btn-s h-btn-blue"
              @click="add(datas)"><i class="h-icon-plus"></i><span>添加一行</span></button>
    </p>
    <Table :height="200" :datas="datas" stripe checkbox @sort="triggerSort">
      <TableItem title="序号" :tooltip="true"><template slot-scope="props">{{props.index}}</template></TableItem>
      <TableItem title="姓名1" prop="name" :tooltip="true" :sort="true"></TableItem>
      <TableItem title="年龄2" prop="age" :tooltip="true" content="测试" placement="right"></TableItem>
      <TableItem title="地址" align="center">
        <template slot-scope="props">
          <div v-tooltip>{{props.data.address}}</div>
        </template>
      </TableItem>
      <TableItem title="操作" :width="100">
        <template slot-scope="props">
          <DropdownCustom :datas="menus" placement="bottom-end">
            <span>更多</span>
            <div slot="content" v-width="200">
              <div v-padding="20">
                <img :width="80" :height="80" style="border-radius:80px;float:left" src="http://www.ch-un.com/images/head.jpg">
                <div style="height:80px;margin-left:90px;line-height:80px;">LAN</div>
              </div>
            </div>
          </DropdownCustom>
        </template>
      </TableItem>
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: {
        demo1: '测试1',
        demo2: '测试3',
        demo3: '测试4',
        demo4: '测试5',
      },
      datas: [
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
      ]
    }
  },
  methods: {
    remove(datas, data) {
      datas.splice(datas.indexOf(data), 1);
    },
    add(datas) {
      datas.push({ id: 7, name: '添加', age: 12, address: "然后添加的" });
    },
    onselect(data) {
      log(data);
    },
    triggerSort(data) {
      this.datas.sort((a, b)=>{
        let ad = a[data.prop], bd = b[data.prop];
        let index = ad == bd ? 0 : (ad > bd) ? 1 : -1;
        return data.type == 'asc' ? index: -index;
      })
    }
  }
}
</script>
