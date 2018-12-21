<template>
  <div>
    <p><h-switch v-model="accordion" small>开启手风琴模式</h-switch></p>
    <p>
      <button class="h-btn h-btn-s" @click="select('favor2-3')">选中"收藏-2-3"</button>
      <button class="h-btn h-btn-s" @click="select('task1-1')">选中"任务-1"</button>
      <button class="h-btn h-btn-s" @click="select('welcome')">选中"首页"</button>
    </p>
    <Menu :datas="data" ref="menu" :accordion="accordion" v-width="250" @select="triggerSelect" @click="triggerClick"></Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordion: false,
      data: [
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
          count: 100,
          children: [
            {
              title: '收藏-1',
              key: 'favor2-1',
              count: 20,
            },
            {
              title: '收藏-2',
              key: 'favor3-2',
              children: [
                {
                  title: '收藏-2-3',
                  key: 'favor2-3'
                },
                {
                  title: '收藏-2-4',
                  key: 'favor3-4'
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
              title: '任务-1',
              icon: 'h-icon-bell',
              key: 'task1-1'
            },
            {
              title: '任务-2',
              icon: 'h-icon-home',
              key: 'task1-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    select(key) {
      this.$refs.menu.select(key);
    },
    triggerClick(data) {
      console.log(data);
    },
    triggerSelect(menu) {
      this.$Message.info(`选中${menu.title}`);
    }
  }
}
</script>
