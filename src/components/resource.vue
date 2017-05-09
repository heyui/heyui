<template>
  <div class="page-resource">
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li class="gray-color">相关资源</li>
            <li><router-link to="/resource/heycli" :class="{'router-link-active': $route.name =='heycli'}">hey-cli 脚手架</router-link></li>
            <li><router-link to="/resource/utils">hey-utils 通用方法</router-link></li>
            <li><router-link to="/resource/validtor">hey-validtor 数据验证</router-link></li>
            <li><router-link to="/resource/model">model 数据转换</router-link></li>
            <li><router-link to="/resource/manba">manba 日期格式化</router-link></li>
            <li><router-link to="/resource/ajax">ajax 异步数据封装</router-link></li>
            <li><router-link to="/resource/umock">umock 服务器</router-link></li>
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
