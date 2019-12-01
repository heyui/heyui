<style lang="less">
 .menu-demo-1-vue{
   transition: 0.2s width cubic-bezier(0.01, 0.71, 0.54, 1);
 }
</style>

<template>
  <div>
    <p>
      <SwitchList v-model="theme" :datas="{'h-menu-white': '白色', 'h-menu-dark': '黑色'}"></SwitchList>
    </p>
    <p><h-switch v-model="accordion" small>手风琴模式</h-switch></p>
    <p><h-switch v-model="inlineCollapsed" small>收起菜单</h-switch></p>
    <p><h-switch v-model="activeAll" small>所有的都可以选择</h-switch></p>
    <p>
      <button class="h-btn h-btn-s" @click="select('favor2-3')">选中"收藏-2-3"</button>
      <button class="h-btn h-btn-s" @click="select('task1-1')">选中"任务-1"</button>
      <button class="h-btn h-btn-s" @click="select('welcome')">选中"首页"</button>
    </p>
    <div class="bg-gray2-color" v-padding="20">
      <div class="menu-demo-1-vue" :style="{width: inlineCollapsed?'70px':'250px'}">
        <Menu :datas="data" :activeAll="activeAll" :className="theme" :inlineCollapsed="inlineCollapsed" ref="menu" :accordion="accordion" @select="triggerSelect" @click="triggerClick"></Menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordion: false,
      inlineCollapsed: false,
      theme: 'h-menu-dark',
      activeAll: false,
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
              key: 'favor2-1'
            },
            {
              title: '收藏收藏收藏收藏收藏收藏收藏收藏-2',
              key: 'favor3-2',
              children: [
                {
                  title: '收藏收藏收藏收藏收藏收藏收藏收藏-2-3',
                  key: 'favor2-3'
                },
                {
                  title: '收藏收藏收藏收藏收藏收藏收藏收藏-2-4',
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
              title: 'Baidu',
              icon: 'h-icon-bell',
              key: 'task1-1',
              href: 'http://www.baidu.com',
              nativeLink: true,
              target: '_blank'
            },
            {
              title: '首页',
              icon: 'h-icon-home',
              key: 'task1-2',
              href: { name: 'Home' }
            }
          ]
        }
      ]
    };
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
};
</script>
