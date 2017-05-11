<template>
  <div class="doc">
    <h2>DropdownMenu 下拉菜单</h2>
    <h3>基本调用</h3>
    <DropdownMenu @onclick="trigger"
                  :datas="param1"><span>菜单menu</span></DropdownMenu>
  
    <h3>不同调用</h3>
    <div>
      <DropdownMenu @onclick="trigger"
                    :datas="param2"
                    placement="bottom-end">
        <Button>菜单menu2</Button>
      </DropdownMenu>
    </div>
  
    <h3>不同位置</h3>
    <div>
      <DropdownMenu @onclick="trigger"
                    :datas="param2"
                    placement="bottom-end"><span>菜单menu2</span></DropdownMenu>
    </div>
  
    <h3>不同触发</h3>
    <div>
      <DropdownMenu @onclick="trigger"
                    :datas="param3"
                    trigger="hover"><span>菜单menu3</span></DropdownMenu>
    </div>
  
    <h3>不添加下拉icon</h3>
    <div>
      <DropdownMenu @onclick="trigger"
                    :datas="param3"
                    trigger="hover"
                    :toggleIcon="false"><span class="text-hover">菜单menu3</span></DropdownMenu>
    </div>
  
    <h3>和dom同样宽度</h3>
    <div>
      <DropdownMenu @onclick="trigger"
                    :datas="param1"
                    :equal-width="true">
        <p style="width:150px">菜单menu</p>
      </DropdownMenu>
    </div>
  
    <h3>自定义宽度</h3>
    <div>
      <DropdownMenu @onclick="trigger"
                    :datas="param4"
                    :width="200">
        <p>菜单menu</p>
      </DropdownMenu>
    </div>
  
    <h3>添加未读数</h3>
    <div>
      <DropdownMenu @onclick="trigger"
                    :datas="param4"
                    :show-count="true"
                    :max-count="100"
                    :width="200">
        <p>菜单menu</p>
      </DropdownMenu>
    </div>
  
  </div>
</template>

<script>

export default {
  data() {
    return {
      param1: ["测试1", "测试2", "测试3"],
      param2: [{ title: "测试1", key: 'test1' }, { title: "测试2", key: 'test2' }, { title: "测试3", key: 'test3' }],
      param3: [{ title: "测试1", key: 'test1', icon: 'h-icon-home' }, { title: "测试2", key: 'test2', disabled: true, icon: 'h-icon-complete' }, { divider: true }, { title: "测试3", key: 'test3', icon: 'h-icon-bell' }],
      param4: [{ title: "测试1", key: 'test1', count: 4 }, { title: "测试2", key: 'test2', disabled: true, count: 100 }, { divider: true }, { title: "测试3", key: 'test3', count: 90 }]
    }
  },
  methods: {
    trigger(code) {
      this.$Message.info(`您点击了${code}`);
    }
  },
  components: {
  }
}
</script>
