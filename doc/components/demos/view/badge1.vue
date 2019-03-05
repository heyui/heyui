<template>
  <div>
    <ButtonGroup size="s">
      <Button icon="h-icon-plus" @click="count++"></Button>
      <Button icon="h-icon-minus" @click="count<=0||count--"></Button>
    </ButtonGroup>
    <i class="h-split"></i>
    <Badge :count="count"><div class="text-center">消息</div></Badge>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 2
    };
  }
};
</script>
