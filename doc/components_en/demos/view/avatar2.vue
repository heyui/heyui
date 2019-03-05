<style lang="less">
.h-avatar-type-org .h-avatar-image {
  background-image: url("../../../static/images/avatar-org.png");
}
.h-avatar-type-female .h-avatar-image {
  background-image: url("../../../static/images/avatar-female.png");
  background-color: #e2e2e2;
}
.h-avatar-type-male .h-avatar-image {
  background-image: url("../../../static/images/avatar-male.png");
  background-color: #e2e2e2;
}
</style>

<template>
  <Row>
    <Cell :width="12">
    <Avatar type="org">
      <div style="font-size: 16px;">Tangmen</div>
      <p class="dark2-color">description</p>
    </Avatar>
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
    <Avatar type="org" shape="square">
      <div style="font-size: 16px;">Marie Curie</div>
      <p class="dark2-color">description</p>
    </Avatar>
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
      src: 'https://pic.52112.com/icon/256/20180507/15471/722194.png'
    };
  }
};
</script>
