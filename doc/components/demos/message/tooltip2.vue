
<template>
  <div class="tooltip2-demo">
    <Row :space="10" v-width="300" style="margin-left:80px;">
      <Cell :width="8"><button class="h-btn" v-tooltip placement="top-start" content="提示语">上左</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="top" content="提示语">上中</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="top-end" content="提示语">上右</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="left-start" content="提示语">左上</button></Cell>
      <Cell :width="8"><button class="h-btn h-btn-text">中间</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="right-start" content="提示语">右上</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="left" content="提示语">左中</button></Cell>
      <Cell :width="8"><button class="h-btn h-btn-text">中间</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="right" content="提示语">右中</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="left-end" content="提示语">左下</button></Cell>
      <Cell :width="8"><button class="h-btn h-btn-text">中间</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="right-end" content="提示语">右下</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="bottom-start" content="提示语">下左</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="bottom" content="提示语">下中</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="bottom-end" content="提示语">下右</button></Cell>
    </Row>
    </div>
</template>
