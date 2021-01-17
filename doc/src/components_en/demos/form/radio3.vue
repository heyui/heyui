<template>
  <div>
    <p>Custom key, title field name</p>
    <div>
      <Radio v-model="value4" :datas="param4" keyName="code" titleName="name"></Radio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value4: 'a1',
      param4: [
        { name: 'select 0', code: 0 },
        { name: 'select 1', code: 'a1', other: 'Other values' },
        { name: 'select 2', code: 'a2' },
        { name: 'select 3', code: 'a3' }
      ]
    };
  }
};
</script>
