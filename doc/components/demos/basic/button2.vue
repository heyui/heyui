<style lang="less">
.button2-demo-vue{
  .buttons{
    >.h-btn, >.h-btn-group {
      margin-bottom: 10px;
    }
  }
}
</style>
<template>
  <div class="button2-demo-vue">
    <h4>Basic</h4>
    <div class="buttons">
      <Button>Default</Button>
      <Button color="primary">Main color</Button>
      <Button :text="true">Text button</Button>
      <Button :no-border="true">Text button 2</Button>
    </div>
    <h4>Colour</h4>
    <div class="buttons">
      <Button color="primary">Main button</Button>
      <Button color="yellow">YELLOW button</Button>
      <Button color="green">GREEN button</Button>
      <Button color="red">RED button</Button>
      <Button color="blue">BLUE button</Button>
      <Button color="gray">GRAY button</Button>
    </div>
    <h4>Hover Colour</h4>
    <div class="buttons">
      <Button text-color="primary">Main button</Button>
      <Button text-color="yellow">YELLOW button</Button>
      <Button text-color="green">GREEN button</Button>
      <Button text-color="red">RED button</Button>
      <Button text-color="blue">BLUE button</Button>
      <Button text-color="gray">GRAY button</Button>
    </div>
    <h4>Text Button</h4>
    <div class="buttons">
      <Button noBorder text-color="primary">Main button</Button>
      <Button noBorder text-color="yellow">YELLOW button</Button>
      <Button noBorder text-color="green">GREEN button</Button>
      <Button noBorder text-color="red">RED button</Button>
      <Button noBorder text-color="blue">BLUE button</Button>
      <Button noBorder text-color="gray">GRAY button</Button>
    </div>
    <h4>Block</h4>
    <div>
      <div v-width="300"><Button :block="true" text-color="red">Block button</Button></div>
    </div>
    <h4>Disabled</h4>
    <div class="buttons">
      <Button :disabled="true">Default</Button>
      <Button color="primary" :disabled="true">Main button</Button>
      <Button :text="true" :disabled="true">Text button</Button>
      <Button color="blue" :disabled="true" icon="h-icon-completed">Icon</Button>
    </div>
    <h4>Icon</h4>
    <div class="buttons">
      <Button icon="h-icon-inbox"></Button>
      <Button icon="h-icon-search" color="primary">Search</Button>
      <Button icon="h-icon-outbox" color="green">Upload</Button>
      <Button icon="h-icon-refresh" color="yellow">Refresh</Button>
    </div>
    <h4>Loading</h4>
    <div class="buttons">
      <Button color="primary" :loading='true'>Loading</Button>
      <Button color="green" :loading='loading1' @click.native="loading1=!loading1">Sumbit</Button>
      <Button text-color="red" icon="h-icon-trash" :loading='loading2' @click.native="loading2=!loading2">Delete</Button>
    </div>
    <h4>Circle</h4>
    <div class="buttons">
      <Button :circle="true" icon="h-icon-inbox"></Button>
      <Button :icon-circle='true' icon="h-icon-inbox"></Button>
      <Button color="primary" :circle="true" icon="h-icon-search">Search</Button>
      <Button color="yellow" :circle="true">YELLOW button</Button>
      <Button text-color="yellow" :circle="true">Text button</Button>
    </div>
    <h4>Sizes</h4>
    <div class="buttons">
      <Button size="l">Large</Button>
      <Button>Normal</Button>
      <Button size="s" icon="h-icon-inbox">Download</Button>
      <Button size="xs">Tiny</Button>
      <Button size="xs" :text="true">Share</Button>
      <Button size="xs" :text="true">Select</Button>
    </div>
    <h4>Button Group</h4>
    <div class="buttons">
      <ButtonGroup>
        <Button color="primary" v-tooltip content="后退" icon="h-icon-left"></Button>
        <Button color="primary" v-tooltip content="前进" icon="h-icon-right"></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon="h-icon-inbox">Create</Button>
        <Button icon="h-icon-trash" :disabled="true">Delete</Button>
        <Button icon="h-icon-refresh">Refresh</Button>
        <Button icon="h-icon-star">Favorite</Button>
      </ButtonGroup>
      <ButtonGroup :circle="true">
        <Button color="primary" icon="h-icon-left"></Button>
        <Button color="primary" icon="h-icon-right"></Button>
      </ButtonGroup>
    </div>
    <h4>Button Group Sizes</h4>
    <div class="buttons">
      <ButtonGroup size="l">
        <Button icon="h-icon-inbox">Create</Button>
        <Button icon="h-icon-trash">Delete</Button>
        <Button icon="h-icon-refresh">Refresh</Button>
        <Button icon="h-icon-star">Favorite</Button>
      </ButtonGroup>
      <ButtonGroup :circle="true" size="s">
        <Button icon="h-icon-left"></Button>
        <Button icon="h-icon-right"></Button>
      </ButtonGroup>
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
