<template>
  <div class="doc">
    <h2>Badge 徽标数</h2>
    <h3>基本应用</h3>
    <p>一般<code>count</code>为0的时候不展示</p>
    <p>&nbsp;</p>
    <div>
      <ButtonGroup size="s">
        <Button icon="plus" @click="count++"></Button>
        <Button icon="minus" @click="count<=0||count--"></Button>
      </ButtonGroup>
      <Badge :count="count"><div v-width="40" class="text-center">消息</div></Badge>
    </div>

    <h3>数字为0的时候也展示</h3>
    <p>&nbsp;</p>
    <div>
      <Badge :count="100" :max-count="99"><div v-width="50" class="text-center">消息</div></Badge>
      &nbsp;&nbsp;&nbsp;
      <Badge :count="1000" :max-count="999"><div v-width="50" class="text-center">消息</div></Badge>
    </div>

    <h3>最大显示数</h3>
    <p>设置<code>count</code>为0的时候也展示</p>
    <p>&nbsp;</p>
    <div>
      <Badge :count="0" :showZero="true"><div v-width="40" class="text-center">消息</div></Badge>
    </div>

    <h3>提示小红点</h3>
    <p>&nbsp;</p>
    <div>
      <Badge :count="1" :dot="true">消息</Badge>
      &nbsp;&nbsp;&nbsp;
      <Badge :count="1" :dot="true"><Button size="s">消息</Button></Badge>
    </div>

    <h3>不同展示方式</h3>
    <p>&nbsp;</p>
    <div v-width="200">
      <div style="position:relative;padding:5px;">
        Menu 1
        <Badge :count="20" position="right"></Badge>
      </div>
      <div style="position:relative;padding:5px;">
        Menu2
        <Badge :count="100" :max-count="99" position="right"></Badge>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      count: 2
    }
  }
}
</script>
