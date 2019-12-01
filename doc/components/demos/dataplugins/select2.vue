<template>
  <div>
    <p><h-switch v-model="deletable" small>可删除 / Can be deleted</h-switch></p>
    <p>value: {{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param"  :deletable="deletable"></Select></div>

    <p>使用 null-option 清空选择 / Empty the content with the null-option option</p>
    <div v-width="300">
      <Select v-model="select" :datas="param" null-option-text="不限 / Unlimited"></Select>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      deletable: false,
      select: 'Option 1',
      param: ['Option 1', 'Option 2', 'Choose 3']
    };
  }
};
</script>
