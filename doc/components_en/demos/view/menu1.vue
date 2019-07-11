<style lang="less">
.menu-demo-1-vue {
  transition: 0.2s width cubic-bezier(0.01, 0.71, 0.54, 1);
}
</style>

<template>
  <div>
    <p><SwitchList v-model="theme" :datas="{'h-menu-white': 'white', 'h-menu-dark': 'black'}"></SwitchList></p>
    <p><h-switch v-model="accordion" small>Accordion mode</h-switch></p>
    <p><h-switch v-model="inlineCollapsed" small>Collapse menu</h-switch></p>
    <p><h-switch v-model="activeAll" small>Every item is optional.</h-switch></p>
    <p>
      <button class="h-btn h-btn-s" @click="select('favor2-3')">Check "Collection-2-3"</button>
      <button class="h-btn h-btn-s" @click="select('task1-1')">Check "Task-1"</button>
      <button class="h-btn h-btn-s" @click="select('welcome')">Check "Home"</button>
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
      // mode: 'false',
      data: [
        {
          title: 'Home',
          key: 'welcome',
          icon: 'h-icon-home'
        },
        {
          title: 'Inquire',
          key: 'search',
          icon: 'h-icon-search'
        },
        {
          title: 'Collection',
          key: 'favor',
          icon: 'h-icon-star',
          count: 100,
          children: [
            {
              title: 'Collection-1',
              key: 'favor2-1'
            },
            {
              title: 'Collection-2',
              key: 'favor3-2',
              children: [
                {
                  title: 'Collection-2-3',
                  key: 'favor2-3'
                },
                {
                  title: 'Collection-2-4',
                  key: 'favor3-4'
                }
              ]
            }
          ]
        },
        {
          title: 'task',
          icon: 'h-icon-task',
          key: 'task',
          children: [
            {
              title: 'task-1',
              icon: 'h-icon-bell',
              key: 'task1-1'
            },
            {
              title: 'task-2',
              icon: 'h-icon-home',
              key: 'task1-2'
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
      this.$Message.info(`Selected ${menu.title}`);
    }
  }
};
</script>
