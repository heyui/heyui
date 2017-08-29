<template>
  <div>
    <p>
      <button class="h-btn h-btn-s h-btn-blue"
              @click="add(datas)"><i class="h-icon-plus"></i><span>添加一行</span></button>
    </p>
    <Table :datas="datas" :columns="columns">
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: 'ID' , prop: 'id', width: 100, tooltip: true },
        { title: '姓名' , prop: 'name', tooltip: true, content: '测试'},
        { title: '年龄' , prop: 'age' },
        { title: '地址' , prop: 'address' },
      ],
      datas: [
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
      ],
      remove(datas, data) {
        datas.splice(datas.indexOf(data), 1);
      },
      add(datas) {
        datas.push({ id: 7, name: '添加', age: 12, address: "然后添加的" });
      },
    }
  }
}
</script>
