<style lang="less" scoped>
.h-row-flex>div {
  color: #FFF;
  border-radius: 3px;
  text-align: center;
  background-color: @gray-color;
}
</style>
<template>
  <div>
    <p>默认横向排列</p>
    <Row :space-x="10" type="flex" v-height="50">
      <Col v-width="50"> left </Col>
      <Col v-width="100"> center</Col>
      <Col :flex='1'> right </Col>
    </Row>
    <blockquote>direction方向:row(默认), column, row-reverse, column-reverse</blockquote>
    <p>direction: column</p>
    <Row type="flex" direction="column" v-height="150" :space-y="10">
      <Col v-height="30"> top </Col>
      <Col v-height="30"> middle </Col>
      <Col :flex='1'> bottom </Col>
    </Row>
    <blockquote>justify排列方式: start, end, center, space-around, space-between</blockquote>
    <p>justify: end</p>
    <Row type="flex" justify="end" :space="10">
      <Col :width='4' v-for='n in 4' :key='n'>{{n}}</Col>
    </Row>
    <p>justify: space-around</p>
    <Row type="flex" justify="space-around" :space="10">
      <Col :width='4' v-for='n in 4' :key='n'>{{n}}</Col>
    </Row>
    <blockquote>align对齐方式:top, middle, bottom</blockquote>
    <p>align: bottom</p>
    <Row type="flex" align="bottom" :space="10">
      <Col :width='4' v-for='n in 4' :key='n' v-height='n*15'>{{n}}</Col>
    </Row>
    <p>align: top</p>
    <Row type="flex" align="top" :space="10">
      <Col :width='4' v-for='n in 4' :key='n' v-height='n*15'>{{n}}</Col>
    </Row>
  </div>
</template>
