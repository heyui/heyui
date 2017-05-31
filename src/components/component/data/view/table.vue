<template>
  <div class="doc">
    <h2>Table 表格</h2>
    <h3>基本调用</h3>
    <p>
      <button class="h-btn h-btn-s h-btn-blue"
              @click="add(datas1)"><i class="h-icon-plus"></i><span>添加一行</span></button>
    </p>
    <Table :columns="columns"
           :datas="datas1">
      <template scope="props" slot="tr">
          <td>{{props.data.name}}</td>
          <td>{{props.data.age}}</td>
          <td>{{props.data.address}}</td>
          <td>
            <button class="h-btn h-btn-s h-btn-red" @click="remove(datas1, props.data)"><i class="h-icon-trash"></i></button>
          </td>
        </tr>
      </template>
    </Table>

    <h3>checkbox</h3>
    <Table :columns="columns"
           :datas="datas1" checkbox @select="check">
      <template scope="props" slot="tr">
          <td>{{props.data.name}}</td>
          <td>{{props.data.age}}</td>
          <td>{{props.data.address}}</td>
          <td>
            <button class="h-btn h-btn-s h-btn-red" @click="remove(datas1, props.data)"><i class="h-icon-trash"></i></button>
          </td>
        </tr>
      </template>
    </Table>

    <h3>固定的table</h3>
    <p>固定的高度和宽度，内部内容超出时使用scroll。</p>
    <p>
      <button class="h-btn h-btn-s h-btn-blue"
              @click="add(datas)"><i class="h-icon-plus"></i><span>添加一行</span></button>
    </p>
    <Table :columns="columns1"
           :datas="datas"
           :height="400">
      <template scope="props"
                slot="tr">
          <td @click="remove(datas, props.data)">
            <button class="h-btn h-btn-s h-btn-red"><i class="h-icon-trash"></i></button>
          </td>
          <td>{{props.data.id}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.age}}</td>
          <td>{{props.data.address}}</td>
      </template>
      <div slot="empty">暂时无数据</div>
    </Table>
  
    <h3>固定的列</h3>
    <Table :columns="columns2"
           :datas="datas1"
           :height="400"
           border checkbox @select="check">
      <template scope="props"
                slot="tr">
          <td>{{props.data.id}}</td>
          <td><p>{{props.data.name}}</p></td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.age}}</td>
          <td>{{props.data.address}}</td>
          <td>
            <button class="h-btn h-btn-s h-btn-red" @click="remove(datas1, props.data)"><i class="h-icon-trash"></i></button>
          </td>
      </template>
    </Table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      columns: [
        { title: '姓名' },
        { title: '年龄' },
        { title: '地址' },
        { title: '操作', width: 100 },
      ],
      columns1: [
        { title: 'id', width: 150 },
        { title: '姓名1', width: 150 },
        { title: '姓名2', width: 450 },
        { title: '姓名3', width: 450 },
        { title: '姓名4', width: 150 },
        { title: '姓名5', width: 450 },
        { title: '姓名6', width: 450 },
        { title: '姓名7', width: 150 },
        { title: '年龄', width: 150 },
        { title: '地址', width: 150 },
        { title: '操作', width: 100 },
      ],
      columns2: [
        { title: 'id', fixed: 'left', width: 150 },
        { title: '姓名1', width: 150 },
        { title: '姓名2', width: 450 },
        { title: '姓名3', width: 450 },
        { title: '姓名4', width: 150 },
        { title: '姓名5', width: 450 },
        { title: '姓名6', width: 450 },
        { title: '姓名7', width: 150 },
        { title: '年龄', width: 150 },
        { title: '地址', width: 150 },
        { title: '操作', width: 100, fixed: 'right' },
      ],
      datas: [
        { id: 1, name: '测试1', age: 12, address: "上海" },
        { id: 2, name: '测试2', age: 12, address: "上海" },
        { id: 3, name: '测试3', age: 12, address: "上海" },
        { id: 4, name: '测试4', age: 12, address: "上海" },
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
      ],
      datas1: [
        { id: 1, name: '测试1', age: 12, address: "上海" },
        { id: 2, name: '测试2', age: 12, address: "上海" },
        { id: 3, name: '测试3', age: 12, address: "上海" },
        { id: 4, name: '测试4', age: 12, address: "上海" },
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
    check(data) {
      log(data);
    }
  },
  components: {
  }
}
</script>
