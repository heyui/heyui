<template>
  <div>
    <blockquote>颜色</blockquote>
    <div>
      <div>
        <span v-color:primary >Main</span>
        <span v-color:green >Green</span>
        <span v-color:yellow >Yellow</span>
        <span v-color:red >Red</span>
        <span v-color:blue >Blue</span>
      </div>
      <div>
        <span v-color:dark >Dark</span>
        <span v-color:gray >Gray</span>
        <span v-color:gray1 >Gray 1</span>
        <span v-color:gray2 >Gray 2</span>
        <span v-color:gray3 >Gray 3</span>
        <span v-color:gray4 >Gray 4</span>
      </div>
      <div>
        <span v-bg-color:primary v-color:white>Background primary color</span>
        <span v-bg-color:green v-color:white>Background green</span>
        <span v-bg-color:yellow v-color:white>Background yellow</span>
        <span v-bg-color:red v-color:white>Background red</span>
        <span v-bg-color:blue v-color:white>Background blue</span>
      </div>
      <div>
        <span v-bg-color:dark v-color:white>Background dark</span>
        <span v-bg-color:gray v-color:white>Background gray default</span>
        <span v-bg-color:gray1 v-color:white>Background gray 1</span>
        <span v-bg-color:gray2 >Background gray 2</span>
        <span v-bg-color:gray3 >Background gray 3</span>
        <span v-bg-color:gray4 >Background gray 4</span>
      </div>
    </div>
    <blockquote>Custom color</blockquote>
      <div>
        <span v-bg-color:#ff49e9 v-color:white>Background customization</span>
        <span v-color="'#ff49e9'" >Custom color</span>
      </div>
    <blockquote>Font size</blockquote>
    <div>
      <div v-font="18">18px</div>
      <div v-font="16">16px</div>
      <div v-font="14">14px</div>
      <div v-font="12">12px</div>
    </div>
    <blockquote>width, height, padding, margin</blockquote>
    <div>
      <div v-height="30" v-bg-color:gray2>height 30px</div>
      <div v-width="100" v-bg-color:gray1>width 100px</div>
      <div v-padding="30" v-bg-color:gray2>padding 30px</div>
      <div v-margin="30" v-bg-color:gray2>margin 30px</div>
    </div>
  </div>
</template>
