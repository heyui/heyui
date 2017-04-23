<template>
  <Row :space="10" v-width="400" style="margin-left:80px;">
    <Col :width="8"><button class="h-btn" v-tooltip placement="top-start" content="提示语">上左</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="top" content="提示语">上中</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="top-end" content="提示语">上右</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="left-start" content="提示语">左上</button></Col>
    <Col :width="8"><button class="h-btn h-btn-text">中间</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="right-start" content="提示语">右上</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="left" content="提示语">左中</button></Col>
    <Col :width="8"><button class="h-btn h-btn-text">中间</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="right" content="提示语">右中</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="left-end" content="提示语">左下</button></Col>
    <Col :width="8"><button class="h-btn h-btn-text">中间</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="right-end" content="提示语">右下</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="bottom-start" content="提示语">下左</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="bottom" content="提示语">下中</button></Col>
    <Col :width="8"><button class="h-btn" v-tooltip placement="bottom-end" content="提示语">下右</button></Col>
  </Row>
</template>