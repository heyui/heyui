<template>
  <div>
    <p>
      <button class="h-btn h-btn-s h-btn-blue"
              @click="add(datas)"><i class="h-icon-plus"></i><span>添加一行</span></button>
    </p>
    <Table :datas="datas" :columns="columns" checkbox>
      <template scope="props">
        <td>{{props.index}}</td>
        <td>{{props.data.id}}</td>
        <td>{{props.data.name}}</td>
        <td>{{props.data.age}}</td>
        <td>{{props.data.address}}</td>
      </template>
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: '序号', width: 100},
        { title: 'ID', width: 100, tooltip: true },
        { title: '姓名', tooltip: true, content: '测试'},
        { title: '年龄' },
        { title: '地址' },
      ],
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
    }
  }
}
</script>
