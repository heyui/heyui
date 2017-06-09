<template>
  <div class="doc">
    <h2>affix 图钉</h2>

    <div>
      <Affix :offset-top="70" @onchange="onchange"><button class="h-btn" :class="{'h-btn-green': fixed}">固定在距离顶部偏移量70px的位置</button></Affix>
    </div>
    <div v-height="10"></div>
    <div>
      <Affix :offset-top="120"><button class="h-btn" :class="{'h-btn-yellow': fixed}">固定在距离顶部偏移量120px的位置</button></Affix>
    </div>
    <div v-height="10"></div>
    <div>
      <Affix :offset-top="170"><button class="h-btn" :class="{'h-btn-blue': fixed}">固定在距离顶部偏移量190px的位置</button></Affix>
    </div>

    <div v-height="800">
    </div>
    <div>
      <Affix :offset-bottom="10"><button class="h-btn">固定在距离底部偏移量10px的位置</button></Affix>
    </div>
    
    <h3>affix 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>offsetTop</td>
        <td>定位在距离窗口顶部达到指定偏移量后</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offsetBottom</td>
        <td>定位在距离窗口底部达到指定偏移量后</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>


    <h3>affix 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>onchange</td>
        <td>固定状态发生变化时触发该方法。</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      fixed: false
    }
  },
  methods: {
    onchange(status) {
      this.fixed = status;
    }
  }
}
</script>
