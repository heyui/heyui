<template>
  <div class="doc">
    <h2>Menu 菜单</h2>
    <h3>基本黑色</h3>
    <div v-width="250">
      <Menu :datas="data1"></Menu>
    </div>
    <h3>白色</h3>
    <div v-width="250">
      <Menu :datas="data1" className="h-menu-white"></Menu>
    </div>
    <h3>自定义</h3>
    <div v-width="250">
      <Menu :datas="data1" className="h-menu-custom"></Menu>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data1: [
        {
          title: '首页',
          key: 'welcome',
          icon: 'h-icon-home'
        },
        {
          title: '查询',
          key: 'search',
          icon: 'h-icon-search'
        },
        {
          title: '收藏',
          key: 'favor',
          icon: 'h-icon-star',
          children: [
            {
              title: '类型-1',
              key: '2-1'
            },
            {
              title: '类型-2',
              key: '3-2',
              children: [
                {
                  title: '类型-2-3',
                  key: '2-3'
                },
                {
                  title: '类型-2-4',
                  key: '3-4'
                }
              ]
            }
          ]

        },
        {
          title: '任务',
          icon: 'h-icon-task',
          key: 'task',
          children: [
            {
              title: '模块1-1',
              icon: 'h-icon-bell',
              key: '1-1'
            },
            {
              title: '模块1-2',
              icon: 'h-icon-home',
              key: '1-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>
