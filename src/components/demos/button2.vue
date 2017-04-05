<template>
  <div>
    <h4>基本</h4>
    <div>
      <Button>默认</Button>
      <Button color="primary">主要按钮</Button>
      <Button :text="true">文字按钮</Button>
    </div>
    <h4>颜色</h4>
    <div>
      <Button color="yellow">YELLOW按钮</Button>
      <Button color="green">GREEN按钮</Button>
      <Button color="red">RED按钮</Button>
      <Button color="blue">BLUE按钮</Button>
    </div>
    <h4>hover颜色</h4>
    <div>
      <Button text-color="yellow">YELLOW按钮</Button>
      <Button text-color="green">GREEN按钮</Button>
      <Button text-color="red">RED按钮</Button>
      <Button text-color="blue">BLUE按钮</Button>
    </div>
    <h4>禁用</h4>
    <div>
      <Button :disabled="true">默认</Button>
      <Button color="primary" :disabled="true">主要按钮</Button>
      <Button :text="true" :disabled="true">文字按钮</Button>
      <Button color="blue" :disabled="true" icon="completed">图标</Button>
    </div>
    <h4>图标</h4>
    <div>
      <Button icon="inbox"></Button>
      <Button icon="search" color="primary">查询</Button>
      <Button icon="outbox" color="green">上传</Button>
      <Button icon="refresh" color="yellow">刷新</Button>
    </div>
    <h4>loading</h4>
    <div>
      <Button color="primary" :loading='true'>loading</Button>
      <Button color="green" :loading='loading1' @click.native="loading1=!loading1">提交</Button>
      <Button text-color="red" icon="trash" :loading='loading2' @click.native="loading2=!loading2">点击删除</Button>
    </div>
    <h4>圆角</h4>
    <div>
      <Button :circle="true" icon="inbox"></Button>
      <Button :icon-circle='true' icon="inbox"></Button>
      <Button color="primary" :circle="true" icon="search">查询</Button>
      <Button color="yellow" :circle="true">YELLOW按钮</Button>
      <Button text-color="yellow" :circle="true">文字按钮</Button>
    </div>
    <h4>大小</h4>
    <div>
      <Button size="l">超大</Button>
      <Button>正常</Button>
      <Button size="s" icon="inbox">下载</Button>
      <Button size="xs">超小</Button>
      <Button size="xs" :text="true">超小</Button>
    </div>
    <h4>按钮组</h4>
    <div>
      <ButtonGroup>
        <Button color="primary" icon="left"></Button>
        <Button color="primary" icon="right"></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon="inbox">新建</Button>
        <Button icon="trash">删除</Button>
        <Button icon="refresh">刷新</Button>
        <Button icon="star">收藏</Button>
      </ButtonGroup>
      <ButtonGroup :circle="true">
        <Button color="primary" icon="left"></Button>
        <Button color="primary" icon="right"></Button>
      </ButtonGroup>
    </div>
    <h4>按钮组大小</h4>
    <div>
      <ButtonGroup size="l">
        <Button icon="inbox">新建</Button>
        <Button icon="trash">删除</Button>
        <Button icon="refresh">刷新</Button>
        <Button icon="star">收藏</Button>
      </ButtonGroup>
      <ButtonGroup :circle="true" size="s">
        <Button icon="left"></Button>
        <Button icon="right"></Button>
      </ButtonGroup>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        loading1:false,
        loading2:false
      }
    }
  }
</script>
