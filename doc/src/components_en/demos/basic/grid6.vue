<style lang="less" scoped>
.h-row>div>div {
  color: #FFF;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  background-color: @gray-color;
}
</style>
<template>
  <div>
    <Row :space="10">
      <Cell :xs='24' :sm='12' :md='8' :lg='4' :xl='2' v-for='n in 12' :key='n'><div>{{n}}</div></Cell>
    </Row>
  </div>
</template>
