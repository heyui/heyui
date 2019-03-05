<template>
  <div>
    <p>{{value}}</p>
    <p>
      <Checkbox v-model="value" :datas="param">
        <template slot="item" slot-scope="{item}">
          <i :class="item.icon"></i>
          <span>{{item.key}}:{{item.title}}</span>
        </template>
      </Checkbox>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      param: [
        {
          icon: 'h-icon-home',
          title: 'select1',
          key: 'a1',
          other: 'Other values'
        },
        { icon: 'h-icon-user', title: 'select2', key: 'a2' },
        { icon: 'h-icon-task', title: 'select3', key: 'a3' }
      ]
    };
  }
};
</script>
