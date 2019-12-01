<template>
  <div>
    <Table :datas="datas" stripe>
      <TableItem title="Index" prop="$index"></TableItem>
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age" unit="年"></TableItem>
      <TableItem title="Dict" prop="dictData" dict="simple"></TableItem>
      <TableItem title="Date" prop="date" :format="dateFormat"></TableItem>
      <TableItem title="Number" prop="money" :format="moneyFormat"></TableItem>
      <TableItem title="Render" :render="messageRender" prop="address"></TableItem>
      <TableItem title="Operate">
        <template slot-scope="{data}">
          {{data.name}}: Custom display
        </template>
      </TableItem>
    </Table>
  </div>
</template>

<script>
import manba from 'manba';

export default {
  data() {
    return {
      datas: [
        { id: 5, name: 'Test 5', dictData: null, age: 12, address: 'Shanghai', date: '2012-02-02', money: 0.322 },
        { id: 6, name: 'Test 6', dictData: 2, age: 13, address: 'Shanghai', date: '2012-02-02', money: 122.322 },
        { id: 7, name: 'Test 7', dictData: 3, age: 0, address: 'Shanghai', date: '2012-03-02', money: -12.00 },
        { id: 5, name: 'Test 5', dictData: 4, age: undefined, address: 'Shanghai', date: '2014-02-02', money: null },
        { id: 6, name: 'Test 6', dictData: 5, age: -1, address: 'Shanghai', date: null, money: 12.322 },
        { id: 7, name: 'Test 7', dictData: 6, age: null, address: 'Shanghai', date: '2012-02-02', money: 0 }
      ]
    };
  },
  methods: {
    messageRender(data) {
      return `${data.name}:${data.address}`;
    },
    dateFormat(value) {
      if (!value) {
        return null;
      } else {
        return manba(value).format('YYYY年MM月DD日');
      }
    },
    moneyFormat(value) {
      if (!value) {
        return 0;
      } else {
        return Number(value).toFixed(2);
      }
    }
  }
};
</script>
