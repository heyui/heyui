<template>
  <div class="page-resource">
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <li class="title">hey-cli 脚手架</li>
          <ul>
            <li><a to="/basic/grid">简介</a></li>
          </ul>
          <li class="title">hey-utils</li>
          <ul>
            <li><a to="/basic/grid">简介</a></li>
          </ul>
          <li class="title">model 数据转换</li>
          <ul>
            <li><a to="/basic/grid">简介</a></li>
          </ul>
          <li class="title">manba 日期格式化</li>
          <ul>
            <li><a to="/basic/grid">简介</a></li>
          </ul>
          <li class="title">ajax封装</li>
          <ul>
            <li><a to="/data/plugin/select">简介</a></li>
          </ul>
          <li class="title">umock 服务器</li>
          <ul>
            <li><a to="/basic/grid">入门</a></li>
            <li><a to="/basic/color">文档输出</a></li>
            <li><a to="/basic/icon">配合后端开发</a></li>
            <li><a to="/basic/extend">数据模拟</a></li>
          </ul>
        </ul>
      </div>
      <div slot="right-frame">
        ready
      </div>
      </com-frame>
    </com-frame>
  </div>
</template>
<script>
export default {
  data() {
      return {
        pass: '',
        error: false
      }
    },
    methods: {}
}
</script>
