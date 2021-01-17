<template>
  <div>
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">title</span>
        <div class="h-panel-right">
          <Search placeholder="Inquire" v-width="200"></Search><i class="h-split"></i><button class="h-btn h-btn-green h-btn-m">Inquire</button>
        </div>
      </div>
      <div class="h-panel-bar">
        <Checkbox v-model="selectAll">select all</Checkbox><i class="h-split"></i>
        <span class="link" :disabled="!selectAll">download</span><i class="h-split" v-width="10"></i><span class="link" :disabled="!selectAll">share it</span>
        <i class="h-split"></i>
        <DropdownMenu :disabled="!selectAll" dict="simple" class-name="h-text-dropdown"><span :disabled="!selectAll">More</span></DropdownMenu>
      </div>
      <div class="h-panel-body">
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectAll: false
    };
  }
};
</script>
