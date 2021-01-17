<style lang="less" scoped>
  .h-row>div>div{
    padding: 8px;
    color: #FFF;
    border-radius: 3px;
    text-align: center;
    background-color: @gray-color;
  }
</style>
<template>
  <Row :space="9">
    <Cell v-for="n in 8" :key="n" width="6"><div>{{n}}</div></Cell>
    <Cell width="24"><div>Top</div></Cell>
    <Cell width="6" ><div>Left</div></Cell>
    <Cell width="18" ><div>Right</div></Cell>
    <Cell width="18" ><div>Left</div></Cell>
    <Cell width="6" ><div>Right</div></Cell>
  </Row>
</template>
