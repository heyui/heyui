<template>
  <div>
    <ButtonGroup size="s">
      <Button icon="plus" @click="count++"></Button>
      <Button icon="minus" @click="count<=0||count--"></Button>
    </ButtonGroup>
    <Badge :count="count"><div v-width="40" class="text-center">消息</div></Badge>
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
