<style lang="less" scoped>
.h-row-flex > div {
  color: #fff;
  border-radius: 3px;
  text-align: center;
  background-color: @gray-color;
}
</style>
<template>
  <div>
    <p>Default horizontal alignment</p>
    <Row :space-x="10" type="flex" v-height="50">
      <Cell v-width="50">left</Cell>
      <Cell v-width="100">center</Cell>
      <Cell :flex='1'>right</Cell>
    </Row>
    <blockquote>Direction:row(default), column, row-reverse, column-reverse</blockquote>
    <p>direction: column</p>
    <Row type="flex" direction="column" v-height="150" :space-y="10">
      <Cell v-height="30"> top </Cell>
      <Cell v-height="30"> middle </Cell>
      <Cell :flex='1'> bottom </Cell>
    </Row>
    <blockquote>Justify: start, end, center, space-around, space-between</blockquote>
    <p>justify: end</p>
    <Row type="flex" justify="end" :space="10">
      <Cell :width='4' v-for='n in 4' :key='n'>{{n}}</Cell>
    </Row>
    <p>justify: space-around</p>
    <Row type="flex" justify="space-around" :space="10">
      <Cell :width='4' v-for='n in 4' :key='n'>{{n}}</Cell>
    </Row>
    <blockquote>Align:top, middle, bottom</blockquote>
    <p>align: bottom</p>
    <Row type="flex" align="bottom" :space="10">
      <Cell :width='4' v-for='n in 4' :key='n' v-height='n*15'>{{n}}</Cell>
    </Row>
    <p>align: top</p>
    <Row type="flex" align="top" :space="10">
      <Cell :width='4' v-for='n in 4' :key='n' v-height='n*15'>{{n}}</Cell>
    </Row>
  </div>
</template>
