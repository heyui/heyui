<style lang="less" scoped>
.color-spans > div > div {
  border-radius: 3px;
  padding: 25px 20px;
  &.first {
    border-radius: 3px 3px 0 0;
  }
  &.h-row {
    padding: 0;
  }
  .second {
    height: 40px;
  }
}
.first-h3 {
  margin-top: 10px;
}
</style>
<template>
  <div>
    <h3 class="first-h3">Primary</h3>
    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-primary-color white-color first">
          <p>Primary</p>
        </div>
        <Row>
          <Cell :width="12">
            <div class="bg-primary1-color second"> </div>
          </Cell>
          <Cell :width="12">
            <div class="bg-primary2-color second"> </div>
          </Cell>
        </Row>
      </Cell>
    </Row>

    <h3>基础色 / Basic Color</h3>
    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-blue-color white-color">
          <p>Blue</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-green-color white-color">
          <p>Green</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-yellow-color white-color">
          <p>Yellow</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-red-color white-color">
          <p>Red</p>
        </div>
      </Cell>
    </Row>

    <h3>文本 / Text</h3>
    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-dark-color white-color">
          <p>Dark</p>
        </div>
      </Cell>
      <Cell :width="18"><div><p>&nbsp;</p></div></Cell>
      <Cell :width="6">
        <div class="bg-dark1-color white-color">
          <p>Dark1</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-dark2-color white-color">
          <p>Dark2</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-dark3-color white-color">
          <p>Dark3</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-dark4-color white-color">
          <p>Dark4</p>
        </div>
      </Cell>
    </Row>

    <h3>背景色 / Background</h3>
    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-gray-color">
          <p>Gray</p>
        </div>
      </Cell>
      <Cell :width="18"><div><p>&nbsp;</p></div></Cell>
      <Cell :width="6">
        <div class="bg-gray1-color">
          <p>Gray1</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-gray2-color">
          <p>Gray2</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-gray3-color">
          <p>Gray3</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-gray4-color">
          <p>Gray4</p>
        </div>
      </Cell>
    </Row>
  </div>
</template>
