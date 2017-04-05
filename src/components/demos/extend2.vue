<template>
  <div>
    <h4>颜色</h4>
    <div>
      <div>
        <span v-color:primary >主色系</span>
        <span v-color:green >绿色</span>
        <span v-color:yellow >黄色</span>
        <span v-color:red >红色</span>
        <span v-color:blue >蓝色</span>
      </div>
      <div>
        <span v-color:dark >暗黑</span>
        <span v-color:gray >灰</span>
        <span v-color:gray1 >灰1</span>
        <span v-color:gray2 >灰2</span>
        <span v-color:gray3 >灰3</span>
        <span v-color:gray4 >灰4</span>
      </div>
      <div>
        <span v-bg-color:primary v-color:white>背景主色系</span>
        <span v-bg-color:green v-color:white>背景绿色</span>
        <span v-bg-color:yellow v-color:white>背景黄色</span>
        <span v-bg-color:red v-color:white>背景红色</span>
        <span v-bg-color:blue v-color:white>背景蓝色</span>
      </div>
      <div>
        <span v-bg-color:dark v-color:white>背景暗黑</span>
        <span v-bg-color:gray v-color:white 背景>灰</span>
        <span v-bg-color:gray1 v-color:white>背景灰1</span>
        <span v-bg-color:gray2 >背景灰2</span>
        <span v-bg-color:gray3 >背景灰3</span>
        <span v-bg-color:gray4 >背景灰4</span>
      </div>
    </div>
    <h4>自定义颜色</h4>
      <div>
        <span v-bg-color:#ff49e9 v-color:white>背景自定义</span>
        <span v-color="'#ff49e9'" >自定义颜色</span>
      </div>
    <h4>字体大小</h4>
    <div>
      <div v-font="18">18px</div>
      <div v-font="16">16px</div>
      <div v-font="14">14px</div>
      <div v-font="12">12px</div>
    </div>
    <h4>高度，宽度</h4>
    <div>
      <div v-height="30" v-bg-color:gray2>高度30px</div>
      <div v-width="100" v-bg-color:gray1>宽度100px</div>
    </div>
  </div>
</template>
