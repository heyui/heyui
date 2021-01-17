<style lang="less">
.button1-demo-vue {
  .buttons {
    > .h-btn,
    > .h-btn-group {
      margin-bottom: 10px;
    }
  }
}
</style>

<template>
  <div class="button1-demo-vue">
    <h4>Basic</h4>
    <div class="buttons">
      <button class="h-btn">Default</button>
      <button class="h-btn h-btn-primary">Main color button</button>
      <button class="h-btn h-btn-text">Text button</button>
      <button class="h-btn h-btn-no-border">Text button 2</button>
    </div>
    <h4>Colour</h4>
    <div class="buttons">
      <button class="h-btn h-btn-primary">Main color button</button>
      <button class="h-btn h-btn-yellow">YELLOW button</button>
      <button class="h-btn h-btn-green">GREEN button</button>
      <button class="h-btn h-btn-red">RED button</button>
      <button class="h-btn h-btn-blue">BLUE button</button>
      <button class="h-btn h-btn-gray">GRAY button</button>
    </div>
    <h4>Hover Colour</h4>
    <div class="buttons">
      <button class="h-btn h-btn-text-primary">Main color button</button>
      <button class="h-btn h-btn-text-yellow">YELLOW button</button>
      <button class="h-btn h-btn-text-green">GREEN button</button>
      <button class="h-btn h-btn-text-red">RED button</button>
      <button class="h-btn h-btn-text-blue">BLUE button</button>
      <button class="h-btn h-btn-text-gray">GRAY button</button>
    </div>
    <h4>Background transparent</h4>
    <div class="buttons bg-gray3-color" style="padding: 10px 10px 0;">
      <button class="h-btn h-btn-text-primary h-btn-transparent">Main color button</button>
      <button class="h-btn h-btn-text-yellow h-btn-transparent">YELLOW button</button>
      <button class="h-btn h-btn-text-green h-btn-transparent">GREEN button</button>
      <button class="h-btn h-btn-text-red h-btn-transparent">RED button</button>
      <button class="h-btn h-btn-text-blue h-btn-transparent">BLUE button</button>
      <button class="h-btn h-btn-text-gray h-btn-transparent">GRAY button</button>
    </div>
    <h4>Text color</h4>
    <div class="buttons">
      <button class="h-btn h-btn-no-border h-btn-text-primary">Main color button</button>
      <button class="h-btn h-btn-no-border h-btn-text-yellow">YELLOW button</button>
      <button class="h-btn h-btn-no-border h-btn-text-green">GREEN button</button>
      <button class="h-btn h-btn-no-border h-btn-text-red">RED button</button>
      <button class="h-btn h-btn-no-border h-btn-text-blue">BLUE button</button>
    </div>
    <h4>block</h4>
    <div>
      <div v-width="300"><button class="h-btn h-btn-text-red h-btn-block">Entire line button</button></div>
    </div>
    <h4>Disable</h4>
    <div class="buttons">
      <button class="h-btn" disabled>default</button>
      <button class="h-btn h-btn-primary" disabled>Main color button</button>
      <button class="h-btn h-btn-text" disabled>Text button</button>
      <button class="h-btn h-btn-blue" disabled><i class="h-icon-completed"></i><span>Icon</span></button>
    </div>
    <h4>Icon</h4>
    <div class="buttons">
      <button class="h-btn"><i class="h-icon-inbox"></i></button>
      <button class="h-btn h-btn-primary"><i class="h-icon-search"></i><span>Inquire</span></button>
      <button class="h-btn h-btn-green"><span>Upload</span><i class="h-icon-outbox"></i></button>
      <button class="h-btn h-btn-yellow"><span>Refresh</span><i class="h-icon-refresh"></i></button>
    </div>
    <h4>Loading</h4>
    <div class="buttons">
      <button class="h-btn h-btn-primary h-btn-loading"><i class="h-icon-loading"></i><span>loading</span></button>
      <button class="h-btn h-btn-primary" :class="{'h-btn-loading':loading1}" @click="loading1=!loading1">
          <i class="h-icon-loading" v-if="loading1"></i><span>submit</span>
      </button>
      <button class="h-btn h-btn-text-red" :class="{'h-btn-loading':loading2}" @click="loading2=!loading2">
          <i class="h-icon-trash" v-if="!loading2"></i><i v-else class="h-icon-loading"></i><span>delete</span>
      </button>
    </div>
    <h4>Circle</h4>
    <div class="buttons">
      <button class="h-btn h-btn-circle"><i class="h-icon-inbox"></i></button>
      <button class="h-btn h-btn-icon-circle"><i class="h-icon-inbox"></i></button>
      <button class="h-btn h-btn-primary h-btn-circle"><i class="h-icon-search"></i><span>Inquire</span></button>
      <button class="h-btn h-btn-yellow h-btn-circle">YELLOW button</button>
      <button class="h-btn h-btn-text-yellow h-btn-circle">Text button</button>
    </div>
    <h4>Size</h4>
    <div class="buttons">
      <button class="h-btn h-btn-l">oversized</button>
      <button class="h-btn">normal</button>
      <button class="h-btn h-btn-s"><i class="h-icon-inbox"></i><span>download</span></button>
      <button class="h-btn h-btn-xs">tiny</button>
      <button class="h-btn h-btn-text h-btn-xs">share it</button>
      <button class="h-btn h-btn-text h-btn-xs">select</button>
    </div>
    <h4>Button group</h4>
    <div class="buttons">
      <div class="h-btn-group">
        <button class="h-btn h-btn-primary"><i class="h-icon-left"></i></button>
        <button class="h-btn h-btn-primary"><i class="h-icon-right"></i></button>
      </div>
      <div class="h-btn-group">
        <button class="h-btn"><i class="h-icon-inbox"></i><span>New</span></button>
        <button class="h-btn" disabled><i class="h-icon-trash"></i><span>Delete</span></button>
        <button class="h-btn"><i class="h-icon-refresh"></i><span>Refresh</span></button>
        <button class="h-btn"><i class="h-icon-star"></i><span>Collection</span></button>
      </div>
      <div class="h-btn-group h-btn-group-circle">
        <button class="h-btn h-btn-primary"><i class="h-icon-left"></i></button>
        <button class="h-btn h-btn-primary"><i class="h-icon-right"></i></button>
      </div>
    </div>
    <h4>Button group size</h4>
    <div class="buttons">
      <div class="h-btn-group h-btn-group-l">
        <button class="h-btn"><i class="h-icon-inbox"></i><span>New</span></button>
        <button class="h-btn"><i class="h-icon-trash"></i><span>Delete</span></button>
        <button class="h-btn"><i class="h-icon-refresh"></i><span>efresh</span></button>
        <button class="h-btn"><i class="h-icon-star"></i><span>Collection</span></button>
      </div>
      <div class="h-btn-group h-btn-group-circle h-btn-group-s">
        <button class="h-btn"><i class="h-icon-left"></i></button>
        <button class="h-btn"><i class="h-icon-right"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      loading1: false,
      loading2: false
    };
  }
};
</script>
