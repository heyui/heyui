
<template>
  <div class="tooltip2-demo">
    <Row :space="10" v-width="300" style="margin-left:80px;">
      <Cell :width="8"><button class="h-btn" v-tooltip placement="top-start" content="hint">Upper left</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="top" content="hint">In the middle</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="top-end" content="hint">Up right</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="left-start" content="hint">upper left</button></Cell>
      <Cell :width="8"><button class="h-btn h-btn-text">intermediate</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="right-start" content="hint">Upper right</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="left" content="hint">Left middle</button></Cell>
      <Cell :width="8"><button class="h-btn h-btn-text">intermediate</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="right" content="hint">Right middle</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="left-end" content="hint">Bottom left</button></Cell>
      <Cell :width="8"><button class="h-btn h-btn-text">intermediate</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="right-end" content="hint">Bottom right</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="bottom-start" content="hint">Lower left</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="bottom" content="hint">Lower middle</button></Cell>
      <Cell :width="8"><button class="h-btn" v-tooltip placement="bottom-end" content="hint">Next right</button></Cell>
    </Row>
  </div>
</template>
