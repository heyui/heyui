<style lang="less">
.button1-demo-vue{
  .buttons{
    >.h-btn, >.h-btn-group {
      margin-bottom: 10px;
    }
  }
}
</style>

<template>
  <div class="button1-demo-vue">
    <h4>基本</h4>
    <div class="buttons">
      <button class="h-btn">默认</button>
      <button class="h-btn h-btn-primary">主色系按钮</button>
      <button class="h-btn h-btn-text">文字按钮</button>
      <button class="h-btn h-btn-no-border">文字按钮2</button>
    </div>
    <h4>颜色</h4>
    <div class="buttons">
      <button class="h-btn h-btn-primary">主色系按钮</button>
      <button class="h-btn h-btn-yellow">YELLOW按钮</button>
      <button class="h-btn h-btn-green">GREEN按钮</button>
      <button class="h-btn h-btn-red">RED按钮</button>
      <button class="h-btn h-btn-blue">BLUE按钮</button>
      <button class="h-btn h-btn-gray">GRAY按钮</button>
    </div>
    <h4>hover颜色</h4>
    <div class="buttons">
      <button class="h-btn h-btn-text-primary">主色系按钮</button>
      <button class="h-btn h-btn-text-yellow">YELLOW按钮</button>
      <button class="h-btn h-btn-text-green">GREEN按钮</button>
      <button class="h-btn h-btn-text-red">RED按钮</button>
      <button class="h-btn h-btn-text-blue">BLUE按钮</button>
      <button class="h-btn h-btn-text-gray">GRAY按钮</button>
    </div>
    <h4>文字颜色</h4>
    <div class="buttons">
      <button class="h-btn h-btn-no-border h-btn-text-primary">主色系按钮</button>
      <button class="h-btn h-btn-no-border h-btn-text-yellow">YELLOW按钮</button>
      <button class="h-btn h-btn-no-border h-btn-text-green">GREEN按钮</button>
      <button class="h-btn h-btn-no-border h-btn-text-red">RED按钮</button>
      <button class="h-btn h-btn-no-border h-btn-text-blue">BLUE按钮</button>
    </div>
    <h4>block</h4>
    <div>
      <div v-width="300"><button class="h-btn h-btn-text-red h-btn-block">整行按钮</button></div>
    </div>
    <h4>禁用</h4>
    <div class="buttons">
      <button class="h-btn" disabled>默认</button>
      <button class="h-btn h-btn-primary" disabled>主色系按钮</button>
      <button class="h-btn h-btn-text" disabled>文字按钮</button>
      <button class="h-btn h-btn-blue" disabled><i class="h-icon-completed"></i><span>图标</span></button>
    </div>
    <h4>图标</h4>
    <div class="buttons">
      <button class="h-btn"><i class="h-icon-inbox"></i></button>
      <button class="h-btn h-btn-primary"><i class="h-icon-search"></i><span>查询</span></button>
      <button class="h-btn h-btn-green"><span>上传</span><i class="h-icon-outbox"></i></button>
      <button class="h-btn h-btn-yellow"><span>刷新</span><i class="h-icon-refresh"></i></button>
    </div>
    <h4>loading</h4>
    <div class="buttons">
      <button class="h-btn h-btn-primary h-btn-loading"><i class="h-icon-loading"></i><span>loading</span></button>
      <button class="h-btn h-btn-primary" :class="{'h-btn-loading':loading1}" @click="loading1=!loading1">
          <i class="h-icon-loading" v-if="loading1"></i><span>提交</span>
      </button>
      <button class="h-btn h-btn-text-red" :class="{'h-btn-loading':loading2}" @click="loading2=!loading2">
          <i class="h-icon-trash" v-if="!loading2"></i><i v-else class="h-icon-loading"></i><span>删除</span>
      </button>
    </div>
    <h4>圆角</h4>
    <div class="buttons">
      <button class="h-btn h-btn-circle"><i class="h-icon-inbox"></i></button>
      <button class="h-btn h-btn-icon-circle"><i class="h-icon-inbox"></i></button>
      <button class="h-btn h-btn-primary h-btn-circle"><i class="h-icon-search"></i><span>查询</span></button>
      <button class="h-btn h-btn-yellow h-btn-circle">YELLOW按钮</button>
      <button class="h-btn h-btn-text-yellow h-btn-circle">文字按钮</button>
    </div>
    <h4>大小</h4>
    <div class="buttons">
      <button class="h-btn h-btn-l">超大</button>
      <button class="h-btn">正常</button>
      <button class="h-btn h-btn-s"><i class="h-icon-inbox"></i><span>下载</span></button>
      <button class="h-btn h-btn-xs">超小</button>
      <button class="h-btn h-btn-text h-btn-xs">分享</button>
      <button class="h-btn h-btn-text h-btn-xs">选择</button>
    </div>
    <h4>按钮组</h4>
    <div class="buttons">
      <div class="h-btn-group">
        <button class="h-btn h-btn-primary"><i class="h-icon-left"></i></button>
        <button class="h-btn h-btn-primary"><i class="h-icon-right"></i></button>
      </div>
      <div class="h-btn-group">
        <button class="h-btn"><i class="h-icon-inbox"></i><span>新建</span></button>
        <button class="h-btn" disabled><i class="h-icon-trash"></i><span>删除</span></button>
        <button class="h-btn"><i class="h-icon-refresh"></i><span>刷新</span></button>
        <button class="h-btn"><i class="h-icon-star"></i><span>收藏</span></button>
      </div>
      <div class="h-btn-group h-btn-group-circle">
        <button class="h-btn h-btn-primary"><i class="h-icon-left"></i></button>
        <button class="h-btn h-btn-primary"><i class="h-icon-right"></i></button>
      </div>
    </div>
    <h4>按钮组大小</h4>
    <div class="buttons">
      <div class="h-btn-group h-btn-group-l">
        <button class="h-btn"><i class="h-icon-inbox"></i><span>新建</span></button>
        <button class="h-btn"><i class="h-icon-trash"></i><span>删除</span></button>
        <button class="h-btn"><i class="h-icon-refresh"></i><span>刷新</span></button>
        <button class="h-btn"><i class="h-icon-star"></i><span>收藏</span></button>
      </div>
      <div class="h-btn-group h-btn-group-circle h-btn-group-s">
        <button class="h-btn"><i class="h-icon-left"></i></button>
        <button class="h-btn"><i class="h-icon-right"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      loading1: false,
      loading2: false
    };
  }
};
</script>
