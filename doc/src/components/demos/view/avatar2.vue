<style lang="less">
.h-avatar-type-female .h-avatar-image{
  background-image: url('../../../static/images/avatar-female.png');
  background-color: #00ddce;
}
.h-avatar-type-male .h-avatar-image{
  background-image: url('../../../static/images/avatar-male.png');
  background-color: #ffa154;
}
</style>

<template>
  <Row>
    <Cell :width="12">
      <Avatar type="male" noInfo></Avatar>
      <Avatar type="female" :src="src" noInfo></Avatar>
    </Cell>
    <Cell :width="12">
      <Avatar type="male" :src="src" shape="square" noInfo></Avatar>
      <Avatar type="female" shape="square" noInfo></Avatar>
    </Cell>
  </Row>
</template>

<script>

export default {
  data() {
    return {
      src: 'https://i1.go2yd.com/image.php?url=0Kvq81cKR1'
    };
  }
};
</script>
