<template>
  <div class="doc">
    <h2>Tabs 标签页</h2>

    <h3>基本调用</h3>
    <p>Tabs控件只支持简单的tab生成，点击切换。默认给<code>h-tabs-default</code>样式，可以自己做自定义Tabs。</p>
    <p>tab选中时添加class<code>h-tabs-selected</code></p>
    <div>
      <Tabs :datas="param" default-select="module1" @change="change"></Tabs>
    </div>


    <h3>使用内置的样式</h3>
    <div>
      <Tabs :datas="param" class-name="h-tabs-card" default-select="module1" @change="change"></Tabs>
    </div>

    <h3>使用内置的样式</h3>
    <div v-width="150">
      <Tabs :datas="param" class-name="h-tabs-menu" default-select="module1" @change="change"></Tabs>
    </div>

    <h3>使用内置的样式</h3>
    <div v-width="150">
      <Tabs :datas="param" class-name="h-tabs-menu2" default-select="module1" @change="change"></Tabs>
    </div>

    <h3>自定义Tabs</h3>
    <div v-width="150">
      <Tabs :datas="param2" class-name="h-tabs-menu" default-select="module1" @change="change">
        <template scope="props" slot="item"><span>{{props.tab.title}}</span><Badge :count="props.tab.count" :max-count="99" position="right"></Badge></template>
      </Tabs>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      param: {
        module1: "模块1",
        module2: "模块2",
        module3: "模块3",
      },
      param2: [{
        key: "module1",
        title: "模块1",
        count: 12
      }, {
        key: "module2",
        title: "模块2",
        count: 14
      }, {
        key: "module3",
        title: "模块3",
        count: 2
      }]
    }
  },
  methods: {
    change(data) {
      this.$Message.info(`切换至${data.title}`, 1000);
    }
  }
}
</script>
