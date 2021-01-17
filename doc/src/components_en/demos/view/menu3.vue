<style lang="less">
@menu-prefix: ~"@{prefix}menu";
.menu-custom {
  background: @white-color;
  .@{menu-prefix} {
    &-show {
      translate: font-size, color 0.3s;
      &:hover {
        // background: @yellow-color;
        font-size: 16px;
        color: @yellow-color;
      }
    }
    &-li {
      &-selected {
        font-size: 16px;
        font-weight: bold;
        // background: @yellow-color;
        color: @yellow-color;
      }
    }
  }
}
</style>

<template>
  <div v-bg-color:gray4 v-padding="20">
    <Menu :datas="data" v-width="250" className="menu-custom"></Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          children: [
            {
              title: 'Types of-1',
              key: '2-1'
            },
            {
              title: 'Types of-2',
              key: '3-2',
              children: [
                {
                  title: 'Types of-2-3',
                  key: '2-3'
                },
                {
                  title: 'Types of-2-4',
                  key: '3-4'
                }
              ]
            }
          ]
        },
        {
          title: 'Task',
          icon: 'h-icon-task',
          key: 'task',
          children: [
            {
              title: 'Module 1-1',
              icon: 'h-icon-bell',
              key: '1-1'
            },
            {
              title: 'Module 1-2',
              icon: 'h-icon-home',
              key: '1-2'
            }
          ]
        }
      ]
    };
  }
};
</script>
