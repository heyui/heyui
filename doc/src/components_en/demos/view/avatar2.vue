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
    <Avatar type="male">
      <div style="font-size: 16px;" class="text-ellipsis">Carl Sagan</div>
      <p class="dark2-color">description</p>
    </Avatar>
    <Avatar type="female">
      <div style="font-size: 16px;" class="text-ellipsis">Nicolaus Copernicus</div>
      <p class="dark2-color">description</p>
    </Avatar>
    </Cell>
    <Cell :width="12">
    <Avatar type="male" shape="square">
      <div style="font-size: 16px;" class="text-ellipsis">Isaac Newton</div>
      <p class="dark2-color">description</p>
    </Avatar>
    <Avatar type="female" shape="square">
      <div style="font-size: 16px;" class="text-ellipsis">Johannes Kepler</div>
      <p class="dark2-color">description</p>
    </Avatar>
    </Cell>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      src: '/static/images/avatar-female.png'
    };
  }
};
</script>
