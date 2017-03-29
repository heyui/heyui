<style type="text/css" scoped>
  .h-row>div>div{
    padding: 8px;
    color: #FFF;
    border-radius: 3px;
    text-align: center;
    background-color: #808080;
  }
</style>
<template>
  <Row :space="9">
    <Col v-for="n in 8" :key="n" width="6"><div>{{n}}</div></Col>
    <Col><div>Top</div></Col>
    <Col width="6" ><div>Left</div></Col>
    <Col width="18" ><div>Right</div></Col>
    <Col width="18" ><div>Left</div></Col>
    <Col width="6" ><div>Right</div></Col>
  </Row>
</template>
