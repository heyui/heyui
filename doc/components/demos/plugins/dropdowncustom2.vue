
<style lang="less">
</style>
<template>
  <div>
    <ButtonGroup>
      <Button icon="h-icon-inbox">Create</Button>
      <DropdownCustom button>
        <span>Edit</span>
        <div slot="content" v-width="200" v-height="200">
          自定义
        </div>
      </DropdownCustom>
    </ButtonGroup>
    <ButtonGroup>
      <Button color="primary" icon="h-icon-inbox">Create</Button>
      <DropdownCustom class="h-btn-primary" button>
        <span>Edit</span>
        <div slot="content" v-width="200" v-height="200">
          自定义
        </div>
      </DropdownCustom>
    </ButtonGroup>
    <DropdownCustom button class="h-btn-primary">
      <span>开始</span>
      <div slot="content" v-width="200" v-height="200">
        自定义
      </div>
    </DropdownCustom>
  </div>
</template>
<script>

export default {
  data() {
    return {

    };
  },
  methods: {
  }
};
</script>
