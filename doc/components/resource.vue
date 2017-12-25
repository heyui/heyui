<template>
  <div class="page-resource">
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li class="gray-color">资源</li>
            <li><router-link to="/resource/heycli" :class="{'router-link-active': $route.name =='resourceheycli'}">hey-cli 脚手架</router-link></li>
            <li><router-link to="/resource/umock">umock mock服务器</router-link></li>
            <li><router-link to="/resource/heyutils">hey-utils 通用方法</router-link></li>
            <li><router-link to="/resource/heyvalidator">hey-validator 数据验证</router-link></li>
            <li><router-link to="/resource/model">model 数据转换</router-link></li>
            <li><router-link to="/resource/manba">manba 日期工具</router-link></li>
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
